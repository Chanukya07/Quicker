import Link from "next/link";
import { ArrowLeft, ShieldCheck, Zap } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Quicker",
  description: "How Quicker handles Gmail access, receipt metadata, and AI analysis.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="legalPage">
      <nav className="legalNav">
        <Link className="brand" href="/"><span className="brandMark"><Zap size={18} fill="currentColor" /></span> quicker</Link>
        <Link href="/"><ArrowLeft size={16} /> Back home</Link>
      </nav>
      <article className="legalDocument">
        <header>
          <span className="legalIcon"><ShieldCheck size={25} /></span>
          <p className="sectionKicker">YOUR DATA, EXPLAINED</p>
          <h1>Privacy Policy</h1>
          <p className="legalUpdated">Last updated September 16, 2026</p>
          <p>This policy explains what Quicker processes when you connect Gmail and use its AI-powered receipt analysis.</p>
        </header>

        <section><h2>1. Information we process</h2><p>When you authorize Gmail, Quicker receives a short-lived Google OAuth access token. The app searches for receipt-like messages and processes limited metadata: message ID, sender, subject, received date, and a shortened message snippet. We do not request permission to send, modify, or delete email.</p></section>
        <section><h2>2. How we use information</h2><p>We use this information only to identify likely purchases, extract transaction details, summarize spending, and link results to the original Gmail message for your review.</p></section>
        <section><h2>3. AI processing</h2><p>Limited receipt metadata is sent to Groq to generate structured transaction information. AI results may be incomplete or inaccurate, so you should verify important information against the linked source email. Groq’s handling of submitted data is governed by its own terms and privacy policy.</p></section>
        <section><h2>4. Storage and retention</h2><p>The current application does not persist Gmail access tokens, email metadata, or analysis results in its own database. Information is held only as needed to complete the request and display the response in your browser. Hosting and AI providers may maintain operational or security logs under their own policies.</p></section>
        <section><h2>5. Sharing</h2><p>Quicker sends necessary data to Google to access Gmail, to Groq to perform AI analysis, and through the hosting infrastructure required to operate the service. We do not sell personal information.</p></section>
        <section><h2>6. Your choices</h2><p>You can stop using the service at any time and revoke Quicker’s Google access from your Google Account security settings. Because the current app does not maintain a user database, there is no stored Quicker profile to delete.</p></section>
        <section><h2>7. Security and limits</h2><p>We limit Gmail access to the read-only scope and keep the Groq credential server-side. No internet service is completely secure, and you use the service at your own risk. Do not connect an account containing information you are not authorized to process.</p></section>
        <section><h2>8. Children</h2><p>Quicker is not intended for children under 13, and we do not knowingly collect personal information from children.</p></section>
        <section><h2>9. Changes and contact</h2><p>We may update this policy as the service changes. The updated date above identifies the latest version. For privacy questions, contact the project owner through the repository or deployment contact channel.</p></section>

        <footer className="legalFooter"><Link href="/terms">Read Terms of Service</Link><Link href="/">Return to Quicker</Link></footer>
      </article>
    </main>
  );
}
