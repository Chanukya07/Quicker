import Link from "next/link";

const demoSteps = [
  "Sign in with Google and select a test-user account.",
  "Accept Gmail read-only permissions on the consent screen.",
  "Click Sync Now from the dashboard.",
  "Watch the gmail-sync execution in n8n.",
  "Return to the app and verify charts and insights populate.",
  "Open an anomaly and use View original email for traceability.",
  "Click Disconnect Gmail to clean up user data.",
];

export default function DemoPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page focus:outline-none">
      <section className="hero">
        <p className="badge">Demo</p>
        <h1>Gmail Spend Intelligence demo flow</h1>
        <p className="subtitle">
          Use these steps to run a complete end-to-end demo from sign-in to
          cleanup.
        </p>
      </section>

      <section className="section">
        <h2>Script</h2>
        <ol className="list">
          {demoSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="section cta">
        <Link className="button buttonPrimary" href="/">
          Back to Home
        </Link>
      </section>
    </main>
  );
}
