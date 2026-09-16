"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Bell,
  CheckCircle2,
  ChevronDown,
  Download,
  LayoutDashboard,
  ReceiptText,
  Search,
  Settings,
  Sparkles,
  TrendingDown,
  Wallet,
  Zap,
} from "lucide-react";

type View = "Overview" | "Transactions" | "Insights";

const transactions = [
  { name: "Adobe Creative Cloud", category: "Software", date: "Sep 15, 2026", amount: 54.99, mark: "A" },
  { name: "Whole Foods Market", category: "Groceries", date: "Sep 14, 2026", amount: 86.42, mark: "W" },
  { name: "Uber", category: "Transport", date: "Sep 13, 2026", amount: 24.8, mark: "U" },
  { name: "Notion", category: "Productivity", date: "Sep 12, 2026", amount: 10, mark: "N" },
  { name: "Blue Bottle Coffee", category: "Food & dining", date: "Sep 11, 2026", amount: 8.75, mark: "B" },
  { name: "Amazon", category: "Shopping", date: "Sep 10, 2026", amount: 72.3, mark: "A" },
];

const navItems: { label: View; icon: typeof Wallet }[] = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Transactions", icon: ReceiptText },
  { label: "Insights", icon: Sparkles },
];

export default function DemoPage() {
  const [view, setView] = useState<View>("Overview");
  const [query, setQuery] = useState("");
  const [range, setRange] = useState("This month");
  const [noticeOpen, setNoticeOpen] = useState(false);

  const filteredTransactions = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return transactions;
    return transactions.filter(({ name, category }) =>
      `${name} ${category}`.toLowerCase().includes(normalized),
    );
  }, [query]);

  function exportReport() {
    const rows = [
      ["Merchant", "Category", "Date", "Amount"],
      ...filteredTransactions.map((item) => [item.name, item.category, item.date, item.amount.toFixed(2)]),
    ];
    const csv = rows.map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    link.download = "quicker-demo-report.csv";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  return (
    <main id="main-content" tabIndex={-1} className="demoPage">
      <aside className="demoSidebar">
        <Link className="brand" href="/" aria-label="Quicker home">
          <span className="brandMark"><Zap size={18} fill="currentColor" /></span> quicker
        </Link>
        <nav aria-label="Dashboard navigation">
          {navItems.map(({ label, icon: Icon }) => (
            <button
              className={view === label ? "demoActive" : ""}
              key={label}
              onClick={() => setView(label)}
              type="button"
            >
              <Icon size={18} /> {label}
            </button>
          ))}
        </nav>
        <div className="sideBottom">
          <span><Settings size={18} /> Settings</span>
          <Link href="/"><ArrowLeft size={18} /> Back to home</Link>
        </div>
      </aside>

      <section className="demoContent">
        <header className="demoHeader">
          <label className="demoSearch">
            <Search size={17} />
            <span className="srOnly">Search transactions</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search merchants or categories..."
            />
            {query && <kbd>{filteredTransactions.length} found</kbd>}
          </label>
          <div className="notificationWrap">
            <button aria-label="Notifications" onClick={() => setNoticeOpen((open) => !open)} type="button">
              <Bell size={18} /><i />
            </button>
            {noticeOpen && <div className="notificationPopover"><strong>You’re all caught up</strong><span>3 new receipts were synced today.</span></div>}
          </div>
          <div className="demoUser"><span>AK</span><div><strong>Alex Kim</strong><small>Demo workspace</small></div><ChevronDown size={15} /></div>
        </header>

        <div className="demoInner">
          <div className="demoMode"><span><Sparkles size={13} /> Live product preview</span><p>Explore the dashboard with sample data—search, switch views, and export a report.</p></div>
          {view === "Overview" && (
            <>
              <div className="demoTitle">
                <div><p>MONDAY, SEPTEMBER 16</p><h1>Good morning, Alex</h1><span>Here’s what’s happening with your money.</span></div>
                <button onClick={exportReport} type="button"><Download size={16} /> Export report</button>
              </div>
              <div className="demoStats">
                <article><small>TOTAL SPENT</small><strong>$2,847.60</strong><span className="positive"><TrendingDown size={14} /> 12.4% from last month</span></article>
                <article><small>TRANSACTIONS</small><strong>47</strong><span>Across 28 merchants</span></article>
                <article><small>RECURRING</small><strong>$186.00</strong><span>8 active subscriptions</span></article>
                <article><small>TOP CATEGORY</small><strong>Food</strong><span>$642.30 this month</span></article>
              </div>
              <div className="demoCharts">
                <article className="spendChart">
                  <div className="demoCardHead"><div><h2>Spending overview</h2><p>Your daily spend for {range.toLowerCase()}</p></div><label className="rangeSelect"><span className="srOnly">Chart date range</span><select value={range} onChange={(event) => setRange(event.target.value)}><option>This month</option><option>Last month</option><option>Last 90 days</option></select><ChevronDown size={14} /></label></div>
                  <div className="bigChart"><div className="yAxis"><span>$400</span><span>$300</span><span>$200</span><span>$100</span><span>$0</span></div><svg viewBox="0 0 700 220" role="img" aria-label={`Spending graph for ${range.toLowerCase()}`}><defs><linearGradient id="demoArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#6956e8" stopOpacity=".25"/><stop offset="1" stopColor="#6956e8" stopOpacity="0"/></linearGradient></defs><path className="gridLine" d="M0 10H700M0 60H700M0 110H700M0 160H700M0 210H700"/><path className="area" d="M0 180 C50 170 55 132 100 147 S160 96 205 112 S280 170 325 92 S405 45 450 85 S525 135 575 70 S635 30 700 42 L700 215H0Z"/><path className="chartLine" d="M0 180 C50 170 55 132 100 147 S160 96 205 112 S280 170 325 92 S405 45 450 85 S525 135 575 70 S635 30 700 42"/></svg></div>
                  <div className="xAxis"><span>Sep 1</span><span>Sep 6</span><span>Sep 12</span><span>Sep 18</span><span>Sep 24</span><span>Sep 30</span></div>
                </article>
                <article className="categoryCard"><div className="demoCardHead"><div><h2>By category</h2><p>This month</p></div><span>•••</span></div><div className="donut"><div><strong>$2.8k</strong><small>Total</small></div></div><ul><li><i className="purple"/>Food & dining <b>32%</b></li><li><i className="orange"/>Shopping <b>24%</b></li><li><i className="green"/>Transport <b>18%</b></li><li><i className="gray"/>Other <b>26%</b></li></ul></article>
              </div>
            </>
          )}

          {view === "Transactions" && <div className="viewIntro"><p>ALL ACTIVITY</p><h1>Transactions</h1><span>Every receipt found and organized in one place.</span></div>}
          {view === "Insights" && <><div className="viewIntro"><p>SMART SIGNALS</p><h1>Insights</h1><span>Useful changes and patterns, without the noise.</span></div><div className="insightGrid"><article><span className="insightIcon green"><TrendingDown size={22}/></span><div><small>WEEKLY SPEND</small><h2>You spent 18% less this week</h2><p>Dining and transport accounted for most of the decrease.</p></div></article><article><span className="insightIcon purple"><Sparkles size={22}/></span><div><small>SUBSCRIPTION WATCH</small><h2>Your Adobe plan renews tomorrow</h2><p>Expected charge: $54.99. This matches your usual monthly price.</p></div></article></div></>}

          {view !== "Insights" && (
            <article className={`transactionTable ${view === "Transactions" ? "expandedTable" : ""}`}>
              <div className="demoCardHead"><div><h2>{query ? "Search results" : "Recent transactions"}</h2><p>{filteredTransactions.length} receipts automatically matched from your inbox</p></div>{query && <button onClick={() => setQuery("")} type="button">Clear search</button>}</div>
              {filteredTransactions.length ? filteredTransactions.map(({ name, category, date, amount, mark }) => (
                <div className="tableRow" key={`${name}-${date}`}><span className={`merchant ${mark.toLowerCase()}`}>{mark}</span><div className="merchantName"><strong>{name}</strong><small>{category}</small></div><span>{date}</span><b>−${amount.toFixed(2)}</b><span className="matched"><CheckCircle2 size={13} /> Receipt matched</span></div>
              )) : <div className="emptyState"><Search size={25}/><strong>No matching transactions</strong><span>Try another merchant or category.</span></div>}
            </article>
          )}
        </div>
      </section>
    </main>
  );
}
