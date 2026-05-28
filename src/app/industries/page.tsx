"use client";

import Link from 'next/link';

export default function Industries() {
  const industries = [
    { title: "Manufacturing", icon: "🏭", desc: "Complex supply chains and precision production require absolute control. We implement Business Central instances optimized for lean manufacturing, capacity planning, and routing.", useCases: ["Bill of Materials (BOM) Management", "Production Order Routing", "Machine Capacity Planning", "Inventory Valuation & Costing"], color: "#3b82f6" },
    { title: "Distribution & Wholesale", icon: "🚚", desc: "Speed and accuracy are vital in modern distribution. We streamline warehouse operations, picking, packing, and shipping pipelines to ensure perfect order fulfillment.", useCases: ["Advanced Warehouse Management (WMS)", "Automated Replenishment", "Container Tracking", "Barcode & RF Scanner Integration"], color: "#8b5cf6" },
    { title: "Trading", icon: "🌐", desc: "Global trading operations require multi-currency resilience and supply chain visibility. We build robust systems for landed costs, complex pricing, and international logistics.", useCases: ["Foreign Currency Transactions", "Landed Cost Calculations", "Intercompany Trade", "Vendor Rebates & Pricing Tiers"], color: "#10b981" },
    { title: "Retail & eCommerce", icon: "🛒", desc: "Omnichannel retail demands seamless data flow. We connect your POS and eCommerce storefronts directly into Business Central for real-time inventory and financial clarity.", useCases: ["Shopify / Magento API Integrations", "Real-Time Inventory Sync", "Returns Management", "Omnichannel Financial Reconciliation"], color: "#f59e0b" },
    { title: "Professional Services", icon: "💼", desc: "Service firms bill for time and expertise. We deploy project management and job costing modules ensuring every hour is tracked, billed, and maximally profitable.", useCases: ["Job Costing & Budgeting", "Timesheet Management", "Resource Capacity Planning", "WIP Calculations"], color: "#ef4444" },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="orb-1"></div><div className="orb-2"></div>
        <div className="container text-center animate-fade-in" style={{ position: 'relative', zIndex: 1 }}>
          <p className="eyebrow">Sectors We Serve</p>
          <h1 style={{ color: 'white' }}>Industries We <span className="text-grad">Empower</span></h1>
          <p className="page-sub">Domain-specific ERP configurations engineered for your exact commercial environment.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="text-center text-muted intro-text">
            A truly powerful ERP system is one that speaks the language of your industry natively. IPSOL Technologies architects Microsoft Dynamics 365 Business Central environments specifically around the nuanced demands of the following sectors.
          </p>
          <div className="industries-grid">
            {industries.map((ind, i) => (
              <div key={i} className="ind-card glass-card" style={{ '--accent': ind.color } as React.CSSProperties}>
                <div className="ind-icon-wrap">
                  <span className="ind-icon">{ind.icon}</span>
                </div>
                <h2 className="ind-title">{ind.title}</h2>
                <p className="text-muted ind-desc">{ind.desc}</p>
                <div className="ind-divider"></div>
                <p className="capabilities-label">Key Capabilities</p>
                <ul className="use-case-list">
                  {ind.useCases.map((uc, j) => (
                    <li key={j}>{uc}</li>
                  ))}
                </ul>
                <div className="card-glow"></div>
                <div className="card-accent-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-alt text-center">
        <div className="container">
          <h2>Don't See Your Industry?</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.05rem' }}>
            Business Central's extreme flexibility allows us to architect custom solutions for virtually any process-heavy enterprise. Let's discuss your unique workflow.
          </p>
          <Link href="/contact" className="btn btn-primary">Consult With Our Architects</Link>
        </div>
      </section>

      <style jsx>{`
                .page-hero {
                    padding: 8rem 0 6rem;
                    background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
                    position: relative; overflow: hidden;
                }
                .orb-1 {
                    position: absolute; width: 500px; height: 500px;
                    background: radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%);
                    border-radius: 50%; top: -150px; right: -50px; pointer-events: none;
                }
                .orb-2 {
                    position: absolute; width: 350px; height: 350px;
                    background: radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%);
                    border-radius: 50%; bottom: -100px; left: -50px; pointer-events: none;
                }
                .eyebrow {
                    font-size: 0.813rem; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 0.12em;
                    color: rgba(255,255,255,0.6); margin-bottom: 1rem;
                }
                .text-grad {
                    background: linear-gradient(90deg, #60a5fa, #a855f7);
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                }
                .page-sub {
                    color: rgba(255,255,255,0.7); font-size: 1.15rem;
                    max-width: 640px; margin: 0 auto;
                }
                .intro-text {
                    max-width: 800px; margin: 0 auto 4rem;
                    font-size: 1.1rem; line-height: 1.8;
                }
                .industries-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
                    gap: 1.75rem;
                }
                .ind-card {
                    padding: 2.5rem;
                    background: var(--glass-bg);
                    backdrop-filter: blur(12px);
                    border: 1px solid var(--glass-border);
                    border-radius: var(--radius-md);
                    position: relative; overflow: hidden;
                    transition: border-color 0.35s ease, box-shadow 0.35s ease, translate 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .ind-card:hover {
                    translate: 0 -6px;
                    border-color: var(--accent, var(--color-secondary));
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                .ind-card:hover .card-glow { opacity: 1; }
                .card-glow {
                    position: absolute; inset: 0;
                    background: radial-gradient(ellipse at top, rgba(37,99,235,0.07) 0%, transparent 60%);
                    opacity: 0; transition: opacity 0.35s ease; pointer-events: none;
                }
                .card-accent-line {
                    position: absolute; top: 0; left: 0; right: 0;
                    height: 3px; background: var(--accent, var(--color-secondary));
                    border-radius: 4px 4px 0 0;
                    opacity: 0; transition: opacity 0.3s ease;
                    transform: scaleX(0); transform-origin: left;
                    transition: opacity 0.3s, transform 0.3s;
                }
                .ind-card:hover .card-accent-line { opacity: 1; transform: scaleX(1); }
                .ind-icon-wrap {
                    width: 60px; height: 60px; border-radius: 16px;
                    background: var(--color-base-alt);
                    border: 1px solid var(--color-border);
                    display: flex; align-items: center; justify-content: center;
                    margin-bottom: 1.5rem;
                    transition: all 0.3s ease;
                }
                .ind-card:hover .ind-icon-wrap {
                    background: var(--accent, var(--color-secondary));
                    border-color: var(--accent, var(--color-secondary));
                }
                .ind-icon { font-size: 1.75rem; }
                .ind-title { font-size: 1.35rem; margin-bottom: 0.75rem; }
                .ind-desc { font-size: 0.95rem; line-height: 1.75; margin-bottom: 0; }
                .ind-divider { height: 1px; background: var(--color-border); margin: 1.5rem 0; }
                .capabilities-label {
                    font-size: 0.8rem; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 0.1em;
                    color: var(--accent, var(--color-secondary));
                    margin-bottom: 0.75rem;
                }
                .use-case-list { list-style: none; padding: 0; margin: 0; }
                .use-case-list li {
                    font-size: 0.95rem; color: var(--color-text-muted);
                    padding: 0.5rem 0 0.5rem 1.5rem;
                    border-bottom: 1px solid var(--color-border-subtle);
                    position: relative;
                }
                .use-case-list li:last-child { border-bottom: none; }
                .use-case-list li::before {
                    content: '✓'; position: absolute; left: 0;
                    color: var(--accent, var(--color-secondary)); font-weight: 700;
                }
                @media (max-width: 768px) {
                    .industries-grid { grid-template-columns: 1fr; }
                }
            `}</style>
    </>
  );
}
