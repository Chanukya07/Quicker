import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Connect Gmail securely",
      description:
        "Read-only Gmail access with clear consent and one-click disconnect.",
    },
    {
      title: "Auto-extract transactions",
      description:
        "Parse invoices, receipts, and subscriptions into structured spend records.",
    },
    {
      title: "Track trends and anomalies",
      description:
        "See monthly spending patterns, recurring costs, and unusual activity fast.",
    },
  ];

  const highlights = [
    "Top merchants and categories",
    "Recurring payments detection",
    "Month-over-month change insights",
    "Grounded anomaly explanations",
  ];

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="page focus:outline-none"
    >
      <section className="hero">
        <p className="badge">Quicker • Gmail Spend Intelligence</p>
        <h1>Understand your email-based spending in minutes.</h1>
        <p className="subtitle">
          Turn receipts and invoices from Gmail into a clean dashboard with
          trends, recurring charges, and anomaly alerts.
        </p>
        <div className="actions">
          <a className="button buttonPrimary" href="#connect-gmail">
            Connect Gmail
          </a>
          <a className="button buttonSecondary" href="#demo-flow">
            View Demo Flow
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Core features</h2>
        <div className="grid">
          {features.map((feature) => (
            <article className="card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <h2>What you get</h2>
          <p>
            The dashboard is designed for quick clarity: where money goes, what
            repeats every month, and what changed recently.
          </p>
        </div>
        <ul className="list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section cta">
        <h2>Ready to replace inbox chaos with spending clarity?</h2>
        <p>Set up your account and start your first Gmail sync.</p>
        <a className="button buttonPrimary" href="#connect-gmail">
          Get Started
        </a>
      </section>

      <section className="section" id="connect-gmail">
        <h2>Connect Gmail</h2>
        <p>
          Connect your Google account with Gmail read-only permissions, then
          trigger your first sync.
        </p>
        <ol className="list">
          <li>Sign in with Google from your dashboard.</li>
          <li>Approve Gmail read-only access on the consent screen.</li>
          <li>Click Sync Now to start extracting transactions.</li>
        </ol>
      </section>

      <section className="section" id="demo-flow">
        <h2>Demo Flow</h2>
        <p>
          Use the guided demo sequence to show sign-in, sync, and dashboard
          results.
        </p>
        <Link className="button buttonSecondary" href="/demo">
          Open Demo Script
        </Link>
      </section>
    </main>
  );
}
