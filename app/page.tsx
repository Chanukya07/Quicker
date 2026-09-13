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
    <main className="page">
      <section className="hero">
        <p className="badge">Quicker • Gmail Spend Intelligence</p>
        <h1>Understand your email-based spending in minutes.</h1>
        <p className="subtitle">
          Turn receipts and invoices from Gmail into a clean dashboard with
          trends, recurring charges, and anomaly alerts.
        </p>
        <div className="actions">
          <button className="button buttonPrimary" type="button">
            Connect Gmail
          </button>
          <button className="button buttonSecondary" type="button">
            View Demo Flow
          </button>
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
        <button className="button buttonPrimary" type="button">
          Get Started
        </button>
      </section>
    </main>
  );
}
