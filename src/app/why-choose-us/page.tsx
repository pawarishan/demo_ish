"use client";

import Link from 'next/link';

export default function WhyChooseUs() {
  const reasons = [
    { title: "Exclusive BC Focus", desc: "We do not dilute our expertise across multiple generic ERP systems. We eat, sleep, and breathe Microsoft Dynamics 365 Business Central. This translates to deeper technical knowledge, cleaner architecture, and faster deployments.", icon: "🎯" },
    { title: "Clean, Scalable AL Development", desc: "We write elegant, non-intrusive AL extensions. Our strict coding standards mean Microsoft's bi-annual Business Central updates will not break your system, ensuring lifetime ROI on your customizations.", icon: "💻" },
    { title: "Business-First Architecture", desc: "Our architects are business analysts first and technologists second. We never implement software for the sake of software; we engineer the system to solve tangible financial, supply chain, and operational bottlenecks.", icon: "📈" },
    { title: "Risk-Free Delivery Methodology", desc: "Data-loss, budget overruns, and timeline delays plague generic ERP implementations. We utilize a highly disciplined, milestone-driven deployment framework guaranteeing operational continuity.", icon: "🛡️" },
    { title: "Complex Integration Mastery", desc: "Your ERP is only as strong as the ecosystem around it. We excel at securely connecting Business Central via REST APIs to critical third-party CRMs, eCommerce platforms, and custom SaaS tools.", icon: "🔗" },
    { title: "Long-Term Strategic Partnership", desc: "A successful go-live is just the starting line. We view ourselves as your off-site CTOs, providing continuous technical advisory, rapid-response support, and proactive system optimization as you scale.", icon: "🤝" }
  ];

  const stats = [
    { value: "100%", label: "Business Central Focus" },
    { value: "Zero", label: "Post-deployment data loss" },
    { value: "24/7", label: "Total Enterprise Visibility" },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="orb-1"></div><div className="orb-2"></div>
        <div className="container text-center animate-fade-in" style={{ position: 'relative', zIndex: 1 }}>
          <p className="eyebrow">The IP Advantage</p>
          <h1 style={{ color: 'white' }}>Why <span className="text-grad">IP Solutions</span>?</h1>
          <p className="page-sub">Why discerning organizations trust us as their dedicated Microsoft Dynamics 365 Business Central partner.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reasons-grid">
            {reasons.map((r, i) => (
              <div key={i} className="reason-card glass-card">
                <div className="reason-icon">{r.icon}</div>
                <h3>{r.title}</h3>
                <p className="text-muted reason-desc">{r.desc}</p>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-orb"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <p className="eyebrow-light">Measuring Excellence</p>
            <h2 style={{ color: 'white' }}>Delivering Measurable Impact</h2>
          </div>
          <div className="impact-grid">
            {stats.map((s, i) => (
              <div key={i} className="impact-card glass-dark">
                <div className="impact-num">{s.value}</div>
                <div className="impact-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-orb-1"></div><div className="cta-orb-2"></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Refuse to Settle for Generic ERP Delivery.</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '0 auto 2rem' }}>Work with specialists who understand the critical nature of your operational infrastructure.</p>
          <Link href="/contact" className="btn btn-primary">Schedule an Architectural Review</Link>
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
                .eyebrow-light {
                    font-size: 0.813rem; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 0.12em;
                    color: rgba(255,255,255,0.5); margin-bottom: 1rem;
                }
                .text-grad {
                    background: linear-gradient(90deg, #60a5fa, #a855f7);
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                }
                .page-sub {
                    color: rgba(255,255,255,0.7); font-size: 1.15rem;
                    max-width: 640px; margin: 0 auto;
                }
                .reasons-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
                    gap: 1.75rem;
                }
                .glass-card {
                    background: var(--glass-bg);
                    backdrop-filter: blur(12px);
                    border: 1px solid var(--glass-border);
                    border-radius: var(--radius-md);
                    position: relative; overflow: hidden;
                    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .glass-card:hover {
                    transform: translateY(-6px);
                    border-color: var(--color-secondary);
                    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.12);
                }
                .glass-card:hover .card-glow { opacity: 1; }
                .card-glow {
                    position: absolute; inset: 0;
                    background: radial-gradient(ellipse at top, rgba(37,99,235,0.07) 0%, transparent 60%);
                    opacity: 0; transition: opacity 0.35s ease; pointer-events: none;
                }
                .reason-card { padding: 2.5rem; }
                .reason-icon { font-size: 2.5rem; margin-bottom: 1.25rem; }
                .reason-card h3 { font-size: 1.3rem; margin-bottom: 0.75rem; }
                .reason-desc { font-size: 0.975rem; line-height: 1.75; margin: 0; }
                .stats-section {
                    padding: 7rem 0;
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    position: relative; overflow: hidden;
                }
                .stats-orb {
                    position: absolute; width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%);
                    border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%,-50%);
                    pointer-events: none;
                }
                .impact-grid {
                    display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;
                }
                .glass-dark {
                    background: rgba(255,255,255,0.06);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: var(--radius-md);
                    transition: all 0.3s ease;
                }
                .glass-dark:hover {
                    background: rgba(255,255,255,0.1);
                    border-color: rgba(99,102,241,0.5);
                    transform: translateY(-4px);
                }
                .impact-card { padding: 3rem 2rem; text-align: center; }
                .impact-num {
                    font-size: 3.5rem; font-weight: 800;
                    background: var(--gradient-primary);
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                    margin-bottom: 0.5rem; line-height: 1;
                }
                .impact-label { font-size: 1.05rem; color: rgba(255,255,255,0.65); font-weight: 500; }
                .cta-section {
                    padding: 8rem 0;
                    background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
                    position: relative; overflow: hidden;
                }
                .cta-orb-1 {
                    position: absolute; width: 400px; height: 400px;
                    background: radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%);
                    border-radius: 50%; top: -100px; left: -100px; pointer-events: none;
                }
                .cta-orb-2 {
                    position: absolute; width: 400px; height: 400px;
                    background: radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%);
                    border-radius: 50%; bottom: -100px; right: -100px; pointer-events: none;
                }
                @media (max-width: 992px) {
                    .reasons-grid { grid-template-columns: 1fr; }
                    .impact-grid { grid-template-columns: 1fr; }
                }
            `}</style>
    </>
  );
}
