import Link from "next/link";
import { ArrowLeft, FileCheck2, Zap } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Quicker",
  description: "Terms governing use of the Quicker Gmail receipt analysis service.",
};

export default function TermsPage() {
  return (
    <main id="main-content" className="legalPage">
      <nav className="legalNav">
        <Link className="brand" href="/"><span className="brandMark"><Zap size={18} fill="currentColor" /></span> quicker</Link>
        <Link href="/"><ArrowLeft size={16} /> Back home</Link>
      </nav>
      <article className="legalDocument">
        <header>
          <span className="legalIcon"><FileCheck2 size={25} /></span>
          <p className="sectionKicker">PLAIN-LANGUAGE TERMS</p>
          <h1>Terms of Service</h1>
          <p className="legalUpdated">Last updated September 16, 2026</p>
          <p>These terms govern your use of Quicker. By connecting Gmail or using the service, you agree to these terms.</p>
        </header>

        <section><h2>1. The service</h2><p>Quicker searches authorized Gmail accounts for receipt-like messages and uses AI to produce spending information. The service may be changed, suspended, or discontinued at any time.</p></section>
        <section><h2>2. Eligibility and authority</h2><p>You must be at least 13 and legally able to agree to these terms. You may connect only a Gmail account that you own or are authorized to access.</p></section>
        <section><h2>3. Acceptable use</h2><p>You may not misuse the service, attempt unauthorized access, interfere with its operation, extract other users’ data, evade provider limits, introduce malicious content, or use results for unlawful activity.</p></section>
        <section><h2>4. Google and third-party services</h2><p>Your use of Gmail, Google Identity Services, Groq, and the hosting provider remains subject to those providers’ terms and policies. Quicker is not responsible for third-party availability, decisions, or changes.</p></section>
        <section><h2>5. AI-generated results</h2><p>Transaction details, categories, summaries, and insights are generated automatically and can be wrong. Quicker is an organizational tool—not financial, accounting, tax, or legal advice. Verify results against the original email before making decisions.</p></section>
        <section><h2>6. Privacy</h2><p>Our <Link href="/privacy">Privacy Policy</Link> describes the information processed by the service and is incorporated into these terms.</p></section>
        <section><h2>7. Intellectual property</h2><p>Quicker’s interface, branding, and original software are protected by applicable laws. You retain rights in your own information. You grant only the limited permission needed to process that information and provide the service.</p></section>
        <section><h2>8. Disclaimer</h2><p>The service is provided “as is” and “as available,” without warranties of accuracy, availability, fitness for a particular purpose, or non-infringement, to the extent permitted by law.</p></section>
        <section><h2>9. Limitation of liability</h2><p>To the extent permitted by law, Quicker and its maintainers will not be liable for indirect, incidental, special, consequential, or punitive damages, or for losses caused by inaccurate AI output, unavailable services, or unauthorized account use.</p></section>
        <section><h2>10. Changes and termination</h2><p>We may update these terms as Quicker evolves. Continuing to use the service after an update means you accept the revised terms. You may stop using Quicker and revoke Google access at any time.</p></section>

        <footer className="legalFooter"><Link href="/privacy">Read Privacy Policy</Link><Link href="/">Return to Quicker</Link></footer>
      </article>
    </main>
  );
}
