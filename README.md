# Gmail Spend Intelligence

This is a demo web app that connects to a user's Gmail account (read-only), scans their inbox for transactional emails (invoices, receipts, subscriptions), extracts structured transaction data using an LLM, and shows a spending dashboard with anomaly flags that trace back to the source email.

## Architecture

```
Browser (Next.js) 
  → Firebase Auth (Google sign-in + incremental Gmail readonly scope) 
  → gets Google OAuth access token + Firebase ID token from Firebase Auth 
  → POSTs { uid, googleAccessToken, firebaseToken } to an n8n Webhook node ("start-sync") 
 
n8n workflow "gmail-sync" (self-hosted, Docker): 
  1. Webhook trigger receives tokens 
  2. HTTP Request → Gmail API messages.list 
  3. Loop node → HTTP Request → messages.get (format=full) 
  4. Code node → strip HTML/quoted text down to plain text, cheap regex pre-filter 
  5. HTTP Request → OpenRouter (meta-llama/llama-3-8b-instruct:free), fast extraction 
  6. Code node → validate/parse JSON 
  7. HTTP Request → Firestore REST API → write to users/{uid}/transactions/{gmailMessageId} 
  8. Triggers aggregate-and-flag workflow
 
n8n workflow "aggregate-and-flag": 
  1. Read all transactions for the uid from Firestore 
  2. Code node → deterministic aggregation (NOT the LLM): 
     - total spend, spend by category, spend by merchant, spend by month 
     - recurring detection, trend deltas, rule-based anomaly flags 
  3. For each flagged item → HTTP Request → OpenRouter (anthropic/claude-3.5-sonnet:free) for grounded explanations 
  4. Write aggregates + flags + explanations to Firestore
 
Next.js dashboard: 
  - reads users/{uid}/transactions, users/{uid}/insights/* directly from Firestore 
  - shows charts, recurring payments, top merchants, and anomaly flags.
```

### Why n8n and OpenRouter?

- **n8n:** A visual, node-based automation tool that makes it incredibly easy to orchestrate multi-step data pipelines. It provides an inspectable UI where each step's input and output can be monitored, allowing for rapid debugging of data transformations and API calls without having to redeploy backend code.
- **OpenRouter:** A unified API for multiple LLM providers. This enables flexible model routing to balance cost, speed, and intelligence. For example, a fast and cheap Llama model can be used for the bulk extraction of simple JSON data across hundreds of emails, while a more capable model like Claude 3.5 Sonnet can be leveraged for reasoning-heavy tasks like writing grounded explanations for anomalies.

## Privacy

- Requests **read-only access** (`https://www.googleapis.com/auth/gmail.readonly`) to Gmail. No send or modify access is requested.
- **Zero Raw Storage:** The raw email bodies and HTML are **never** stored in Firestore.
- Execution history saving for the n8n workflows is disabled by default to prevent logging sensitive email content locally.
- Fully revokable via the "Disconnect Gmail" button which deletes all associated user data and tokens.

## Local Run Instructions

### 1. Firebase Project Setup

1. Create a project at [Firebase Console](https://console.firebase.google.com/).
2. Enable **Authentication** (Google Provider).
3. Enable **Firestore Database** and set the security rules:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{uid}/{document=**} {
         allow read, write: if request.auth != null && request.auth.uid == uid;
       }
     }
   }
   ```
4. Get your Web app config keys.

### 2. Google Cloud OAuth Consent Screen

1. Go to [Google Cloud Console](https://console.cloud.google.com/) for your Firebase project.
2. Go to **APIs & Services** > **OAuth consent screen**.
3. Configure the consent screen (User Type: External for demo, add yourself as a test user).
4. Add the `https://www.googleapis.com/auth/gmail.readonly` scope.

### 3. OpenRouter API Key

1. Get an API key from [OpenRouter](https://openrouter.ai/).

### 4. Environment Variables

Create a `.env` file from the `.env.example`:

```bash
cp .env.example .env
```

Fill in the variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY="..."
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="..."
NEXT_PUBLIC_FIREBASE_PROJECT_ID="..."
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="..."
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="..."
NEXT_PUBLIC_FIREBASE_APP_ID="..."

NEXT_PUBLIC_N8N_WEBHOOK_URL="http://localhost:5678/webhook/start-sync"

OPENROUTER_API_KEY="..."
```

### 5. Start n8n

Ensure Docker is running, then spin up n8n:

```bash
docker compose up -d
```

1. Navigate to `http://localhost:5678`.
2. Complete the initial setup.
3. Import the workflows from `/n8n-workflows/gmail-sync.json` and `/n8n-workflows/aggregate-and-flag.json`.
4. Ensure both workflows are set to "Active".

### 6. Start the Next.js App

```bash
npm install
npm run dev
```

Navigate to `http://localhost:3000`.
