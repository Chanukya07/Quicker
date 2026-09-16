import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  Mail,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const features = [
  { icon: ReceiptText, title: "Every receipt, organized", text: "Quicker turns scattered email receipts into clean, categorized transactions—automatically." },
  { icon: BarChart3, title: "Clarity at a glance", text: "Know where your money goes with simple trends, merchant insights, and monthly comparisons." },
  { icon: Sparkles, title: "Spot what changed", text: "Catch price jumps, surprise renewals, and unusual purchases before they slip past you." },
];

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <nav className="nav shell" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="Quicker home"><span className="brandMark"><Zap size={18} fill="currentColor" /></span> quicker</Link>
        <div className="navLinks"><a href="#features">Features</a><a href="#security">Security</a><Link href="/demo">Demo</Link></div>
        <Link className="navCta" href="/analyze">Connect Gmail <ArrowRight size={16} /></Link>
      </nav>

      <section className="heroLanding shell">
        <div className="heroCopy">
          <div className="eyebrow"><span><Sparkles size={14} /></span> Your inbox, finally useful</div>
          <h1>Your spending.<br /><em>Crystal clear.</em></h1>
          <p className="heroText">Quicker finds receipts in your Gmail and turns them into effortless spending insights. No spreadsheets. No manual tracking.</p>
          <div className="heroActions">
            <Link className="primaryCta" href="/analyze"><Mail size={18} /> Analyze my inbox <ArrowRight size={17} /></Link>
            <Link className="textCta" href="/demo">Preview with sample data <span>→</span></Link>
          </div>
          <div className="trustLine"><div className="avatars"><span><ShieldCheck size={15}/></span><span><Mail size={15}/></span><span><Zap size={15}/></span></div><div><strong>Private by design</strong><small>Read-only access • Disconnect anytime</small></div></div>
        </div>

        <div className="heroVisual" aria-label="Preview of the Quicker spending dashboard">
          <div className="glowOrb" />
          <div className="appWindow">
            <div className="windowBar"><div className="miniBrand"><span><Zap size={12} fill="currentColor" /></span> quicker</div><div className="windowSearch">⌕&nbsp;&nbsp; Search transactions...</div><div className="userDot">AK</div></div>
            <div className="dashboardBody">
              <aside className="sideRail"><span className="active"><BarChart3 size={15} /></span><span><ReceiptText size={15} /></span><span><TrendingUp size={15} /></span></aside>
              <div className="dashboardMain">
                <div className="dashHeading"><div><small>OVERVIEW</small><h2>Good morning, Alex</h2></div><span className="datePill">This month⌄</span></div>
                <div className="statGrid">
                  <div className="statCard mainStat"><small>TOTAL SPENT</small><strong>$2,847.60</strong><span className="positive">↘ 12.4% vs last month</span></div>
                  <div className="statCard"><small>TRANSACTIONS</small><strong>47</strong><span>Across 28 merchants</span></div>
                  <div className="statCard"><small>SUBSCRIPTIONS</small><strong>$186</strong><span>8 active services</span></div>
                </div>
                <div className="dashGrid">
                  <div className="chartCard">
                    <div className="cardHeading"><div><small>SPENDING TREND</small><strong>Daily activity</strong></div><span className="legend"><i /> This month</span></div>
                    <svg viewBox="0 0 420 150" role="img" aria-label="Spending activity chart">
                      <defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#6956e8" stopOpacity=".28"/><stop offset="1" stopColor="#6956e8" stopOpacity="0"/></linearGradient></defs>
                      <path className="gridLine" d="M0 25H420M0 65H420M0 105H420" />
                      <path className="area" d="M0 121 C30 119 40 102 68 105 S112 73 139 85 S177 106 204 68 S247 43 270 59 S307 91 333 53 S371 17 420 28 L420 145 L0 145Z" />
                      <path className="chartLine" d="M0 121 C30 119 40 102 68 105 S112 73 139 85 S177 106 204 68 S247 43 270 59 S307 91 333 53 S371 17 420 28" />
                      <circle cx="333" cy="53" r="5" />
                    </svg>
                    <div className="chartLabels"><span>Sep 1</span><span>Sep 8</span><span>Sep 15</span><span>Sep 22</span><span>Sep 30</span></div>
                  </div>
                  <div className="activityCard"><div className="cardHeading"><div><small>RECENT</small><strong>Latest activity</strong></div><span>•••</span></div>
                    {[['F','Figma','Design tools','−$15.00'],['N','Notion','Productivity','−$10.00'],['U','Uber','Transport','−$24.80']].map(([letter,name,type,amount])=><div className="transaction" key={name}><span className={`merchant ${letter.toLowerCase()}`}>{letter}</span><div><strong>{name}</strong><small>{type}</small></div><b>{amount}</b></div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="floatingNotice"><span><BadgeCheck size={20} /></span><div><small>SMART INSIGHT</small><strong>You spent 18% less this week</strong></div></div>
        </div>
      </section>

      <section className="logoStrip"><p>One inbox. A complete view.</p><div><span>Receipts</span><span>Invoices</span><span>Subscriptions</span><span>Renewals</span><span>Alerts</span></div></section>

      <section className="featureSection shell" id="features">
        <div className="sectionIntro"><span className="sectionKicker">LESS TRACKING. MORE KNOWING.</span><h2>Money clarity without<br />the busywork.</h2><p>From inbox to insight in seconds. Quicker does the sorting so you can focus on the decisions.</p></div>
        <div className="featureGrid">{features.map(({icon: Icon,title,text},i)=><article className="featureCard" key={title}><span className="featureNumber">0{i+1}</span><div className="featureIcon"><Icon size={22}/></div><h3>{title}</h3><p>{text}</p><a href="#how-it-works" aria-label={`Learn more about ${title}`}>Learn more <ArrowRight size={15}/></a></article>)}</div>
      </section>

      <section className="howSection shell" id="how-it-works"><div className="howCard"><div><span className="sectionKicker">PRIVATE BY DESIGN</span><h2>Read-only access.<br />Always in your control.</h2><p>Quicker requests read-only Gmail access and stores structured purchase details—not raw email bodies. Disconnect whenever you want.</p><ul><li><Check size={15}/> Google OAuth sign-in</li><li><Check size={15}/> No raw email storage</li><li><Check size={15}/> One-click disconnect</li></ul></div><div className="securitySeal" id="security"><div className="sealRings"><span><ShieldCheck size={46}/></span></div><strong>You stay in control</strong><small>Read-only Gmail access</small></div></div></section>

      <section className="finalCta shell"><div><span className="sectionKicker">READY WHEN YOU ARE</span><h2>Make sense of your spending.</h2><p>Connect Gmail and let Groq AI turn your receipts into structured insights.</p></div><Link className="primaryCta light" href="/analyze"><Mail size={18}/> Connect Gmail <ArrowRight size={17}/></Link></section>
      <footer className="footer shell"><Link className="brand" href="/"><span className="brandMark"><Zap size={18} fill="currentColor" /></span> quicker</Link><p>Spend smarter, without trying harder.</p><nav aria-label="Legal"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><span>© 2026 Quicker</span></nav></footer>
    </main>
  );
}
