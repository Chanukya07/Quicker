"use client";

import Link from "next/link";
import Script from "next/script";
import { useMemo, useState } from "react";
import { ArrowLeft, ExternalLink, LoaderCircle, Mail, ShieldCheck, Sparkles, Zap } from "lucide-react";

type Transaction = { merchant: string; amount: number; currency: string; date: string; category: string; description: string; gmailMessageId: string };

declare global {
  interface Window {
    google?: { accounts: { oauth2: { initTokenClient(config: { client_id: string; scope: string; callback: (response: { access_token?: string; error?: string }) => void }): { requestAccessToken(): void } } } };
  }
}

export default function AnalyzePage() {
  const [status, setStatus] = useState<"idle" | "authorizing" | "analyzing" | "done">("idle");
  const [error, setError] = useState("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [summary, setSummary] = useState("");
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  const total = useMemo(() => transactions.reduce((sum, item) => sum + item.amount, 0), [transactions]);

  async function analyze(accessToken: string) {
    setStatus("analyzing");
    try {
      const response = await fetch("/api/analyze", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ accessToken }) });
      const data = await response.json() as { transactions?: Transaction[]; summary?: string; error?: string };
      if (!response.ok) throw new Error(data.error ?? "Analysis failed.");
      setTransactions(data.transactions ?? []);
      setSummary(data.summary ?? "Analysis complete.");
      setStatus("done");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Analysis failed.");
      setStatus("idle");
    }
  }

  function connectGmail() {
    setError("");
    if (!clientId) return setError("Google OAuth is not configured. Add NEXT_PUBLIC_GOOGLE_CLIENT_ID in Vercel.");
    if (!window.google) return setError("Google sign-in is still loading. Please try again.");
    setStatus("authorizing");
    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: "https://www.googleapis.com/auth/gmail.readonly",
      callback: (response) => {
        if (response.error || !response.access_token) {
          setError("Google authorization was cancelled or failed.");
          setStatus("idle");
          return;
        }
        void analyze(response.access_token);
      },
    });
    client.requestAccessToken();
  }

  return <main id="main-content" className="analyzePage">
    <Script src="https://accounts.google.com/gsi/client" strategy="afterInteractive" />
    <nav className="analyzeNav"><Link className="brand" href="/"><span className="brandMark"><Zap size={18} fill="currentColor" /></span> quicker</Link><Link href="/"><ArrowLeft size={16}/> Back home</Link></nav>
    <section className="connectPanel">
      <div className="connectIcon"><Mail size={30}/></div>
      <span className="sectionKicker">GMAIL SPEND INTELLIGENCE</span>
      <h1>{status === "done" ? "Your inbox, analyzed." : "Turn receipts into answers."}</h1>
      <p>{status === "done" ? summary : "Connect Gmail with read-only access. Quicker finds receipt-like messages and asks Groq AI to extract structured purchases."}</p>
      {status !== "done" && <button className="googleButton" onClick={connectGmail} disabled={status !== "idle"} type="button">{status === "idle" ? <><Mail size={18}/> Connect Gmail securely</> : <><LoaderCircle className="spin" size={18}/> {status === "authorizing" ? "Waiting for Google…" : "Analyzing receipts…"}</>}</button>}
      {error && <div className="connectError" role="alert">{error}</div>}
      <div className="privacyNote"><ShieldCheck size={16}/><span><strong>Read-only and temporary.</strong> Email metadata is processed for this request and is not stored by Quicker. By continuing, you agree to our <Link href="/terms">Terms</Link> and acknowledge our <Link href="/privacy">Privacy Policy</Link>.</span></div>
    </section>
    {status === "done" && <section className="analysisResults">
      <div className="analysisSummary"><article><small>TRANSACTIONS FOUND</small><strong>{transactions.length}</strong></article><article><small>ANALYZED TOTAL</small><strong>{transactions[0]?.currency ?? "USD"} {total.toFixed(2)}</strong></article><article><small>AI ENGINE</small><strong><Sparkles size={18}/> Groq</strong></article></div>
      <div className="resultsTable"><div className="resultsHead"><div><h2>Extracted purchases</h2><p>Review AI-generated results against the original receipt.</p></div><button onClick={connectGmail}>Sync again</button></div>
      {transactions.length ? transactions.map((item) => <article key={`${item.gmailMessageId}-${item.merchant}`}><span className="resultMark">{item.merchant.slice(0,1)}</span><div><strong>{item.merchant}</strong><small>{item.description}</small></div><span>{item.category}</span><span>{item.date}</span><b>{item.currency} {item.amount.toFixed(2)}</b><a href={`https://mail.google.com/mail/u/0/#inbox/${item.gmailMessageId}`} target="_blank" rel="noreferrer" aria-label={`Open ${item.merchant} receipt in Gmail`}><ExternalLink size={15}/></a></article>) : <div className="emptyState"><Mail size={25}/><strong>No clear purchases found</strong><span>Try syncing after more receipts arrive.</span></div>}
      </div>
    </section>}
  </main>;
}
