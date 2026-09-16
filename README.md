# Quicker — Gmail Spend Intelligence

Quicker connects to Gmail with **read-only access**, finds receipt-like messages, and uses Groq AI to turn invoice metadata into structured spending records. The app includes both a real Gmail analysis flow at `/analyze` and a credential-free sample dashboard at `/demo`.

> **Security:** Never commit or paste Google or Groq credentials into source code. If a key has been shared publicly, revoke it and create a replacement before configuring the deployment.

## Current architecture

```text
Browser (Next.js)
  → Google Identity Services requests gmail.readonly consent
  → short-lived Google access token is POSTed to /api/analyze
  → route handler queries Gmail for receipt-like messages
  → only sender, subject, date, and snippet metadata is sent to Groq
  → Groq returns validated structured transactions
  → results are returned to the browser and linked to the source Gmail message
```

The access token, email metadata, and analysis results are not persisted by this repository. The Groq key remains server-side. `/demo` uses bundled sample data and does not access Gmail.

## Required configuration

Create `.env.local` from the example:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_GOOGLE_CLIENT_ID="your-google-oauth-web-client-id.apps.googleusercontent.com"
GROQ_API_KEY="your-new-groq-key"
# Optional
GROQ_MODEL="llama-3.3-70b-versatile"
```

### Google Cloud

1. Create or select a Google Cloud project.
2. Enable the **Gmail API**.
3. Configure the OAuth consent screen and add the `https://www.googleapis.com/auth/gmail.readonly` scope.
4. Create an **OAuth 2.0 Web client ID**. An API key is not sufficient for Gmail consent.
5. Add `http://localhost:3000` and the Vercel deployment origin under **Authorized JavaScript origins**.
6. If the consent screen is in testing mode, add the Gmail account under **Test users**.

### Vercel

Add `NEXT_PUBLIC_GOOGLE_CLIENT_ID` and `GROQ_API_KEY` under **Project settings → Environment Variables**, then redeploy. Do not expose the Groq key with a `NEXT_PUBLIC_` prefix.

## Run locally

```bash
pnpm install
pnpm dev
```

Open:

- `http://localhost:3000` — product landing page
- `http://localhost:3000/analyze` — real Gmail + Groq analysis
- `http://localhost:3000/demo` — interactive sample dashboard

## Privacy and limits

- The app requests Gmail read-only permission; it cannot send, edit, or delete email.
- Gmail access tokens are used only during the analysis request and are not stored.
- The current analysis reads metadata and snippets for at most 15 receipt-like messages from the last year.
- AI output can be inaccurate. Each result links back to its source email for verification.
