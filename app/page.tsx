import { ShieldCheck, MailX } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="bg-slate-900 text-white p-1.5 rounded-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
          </div>
          <span className="font-semibold text-lg">Spend Intelligence</span>
        </div>
        <div className="text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 flex items-center gap-1.5">
           <ShieldCheck size={16}/> Gmail read-only
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Hero Copy */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-slate-100 text-sm font-medium">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
             AI-powered receipt intelligence
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-slate-900">
            Turn your inbox into a <br/>
            <span className="text-emerald-600">spending brain.</span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            Connect Gmail read-only. We scan invoices, receipts, and subscriptions, extract structured data, and flag anomalies with a plain-English explanation — every flag links back to the original email.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Continue with Gmail
            </button>
            <button className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-6 py-3 rounded-lg font-medium transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              Try Demo Mode
            </button>
          </div>

          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Gmail OAuth is not configured yet — Demo Mode runs the full LLM pipeline on realistic seeded emails.
          </p>
        </div>

        {/* Right Column: Visualizer */}
        <div className="relative">
           {/* Background Grid Pattern */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 rounded-2xl pointer-events-none"></div>

           <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden relative">
             {/* Fake Window Header */}
             <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-xs font-mono text-slate-400">live-anomalies.json</div>
             </div>

             {/* Feed */}
             <div className="p-6 space-y-4">

                {/* Item 1 */}
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50/50 shadow-sm flex items-start justify-between group hover:border-slate-300 transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-bold tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded uppercase">Subscription Increase</span>
                       <span className="font-semibold text-slate-900">Netflix</span>
                    </div>
                    <p className="text-sm text-slate-500">rose from $15.49 &rarr; $17.99</p>
                  </div>
                  <div className="text-right font-mono font-medium text-slate-900">$17.99</div>
                </div>

                {/* Item 2 */}
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50/50 shadow-sm flex items-start justify-between group hover:border-slate-300 transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-bold tracking-wider text-rose-700 bg-rose-100 px-2 py-0.5 rounded uppercase">New Merchant</span>
                       <span className="font-semibold text-slate-900">Delta Air Lines</span>
                    </div>
                    <p className="text-sm text-slate-500">first charge, above $200 threshold</p>
                  </div>
                  <div className="text-right font-mono font-medium text-slate-900">$842.60</div>
                </div>

                {/* Item 3 */}
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50/50 shadow-sm flex items-start justify-between group hover:border-slate-300 transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-bold tracking-wider text-purple-700 bg-purple-100 px-2 py-0.5 rounded uppercase">Category Spike</span>
                       <span className="font-semibold text-slate-900">Cloud</span>
                    </div>
                    <p className="text-sm text-slate-500">1.5&times; above trailing 3-mo avg</p>
                  </div>
                  <div className="text-right font-mono font-medium text-slate-900">$187.62</div>
                </div>

             </div>
           </div>
        </div>
      </main>

      {/* Trust / Security Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
           <div className="space-y-2">
             <div className="flex items-center gap-2 text-emerald-700 font-medium">
               <ShieldCheck size={20} /> Read-only, always
             </div>
             <p className="text-sm text-slate-500 leading-relaxed">
               We request gmail.readonly and never gmail.modify or gmail.send.
             </p>
           </div>

           <div className="space-y-2">
             <div className="flex items-center gap-2 text-sky-700 font-medium">
               <MailX size={20} /> No raw emails stored
             </div>
             <p className="text-sm text-slate-500 leading-relaxed">
               Only structured fields + the Gmail message ID for tracing back.
             </p>
           </div>

           <div className="space-y-2">
             <div className="flex items-center gap-2 text-rose-700 font-medium">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
               Disconnect wipes everything
             </div>
             <p className="text-sm text-slate-500 leading-relaxed">
               One click revokes access and purges every document under your account.
             </p>
           </div>
        </div>
      </footer>

    </div>
  );
}
