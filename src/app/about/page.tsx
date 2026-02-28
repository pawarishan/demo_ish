"use client";

import Link from 'next/link';

export default function About() {
  const values = [
    { icon: "🎯", title: "Precision", desc: "Rigorous analysis and exact execution. We build solutions that work flawlessly from day one." },
    { icon: "🤝", title: "Reliability", desc: "On time, on budget, and without technical debt. Trust is the foundation of every partnership." },
    { icon: "🚀", title: "Long-term Success", desc: "We design your ERP foundation not just for today's needs, but for the next decade of growth." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="ph-orb-1"></div><div className="ph-orb-2"></div>
        <div className="container text-center animate-fade-in">
          <p className="eyebrow">Our Story</p>
          <h1 style={{ color: 'white' }}>About <span className="text-grad">IP Solutions</span></h1>
          <p className="page-subtitle">Elevating enterprise operations through intelligent, tailored, and scalable ERP solutions.</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section">
        <div className="container who-grid">
          <div>
            <p className="eyebrow-dark">Our Identity</p>
            <h2>Who We Are</h2>
            <p className="text-muted text-lg mb-2">
              IP Solutions is a premier technology consulting firm specializing exclusively in Microsoft Dynamics 365 Business Central. We are a team of veteran architects, developers, and business analysts dedicated to transforming complex operational challenges into streamlined, automated workflows.
            </p>
            <p className="text-muted text-lg">
              Unlike generic agencies that spread thin across dozens of platforms, our intense focus on Business Central allows us to deliver unparalleled depth of expertise — we understand the commercial realities of manufacturing, distribution, retail, and professional services.
            </p>
          </div>
          <div className="about-visual glass-card">
            <div className="about-stat"><span className="a-stat-num text-gradient">100%</span><span className="a-stat-lab">BC Focused</span></div>
            <div className="about-divider"></div>
            <div className="about-stat"><span className="a-stat-num text-gradient">Zero</span><span className="a-stat-lab">Data Loss Record</span></div>
            <div className="about-divider"></div>
            <div className="about-stat"><span className="a-stat-num text-gradient">8+</span><span className="a-stat-lab">Service Verticals</span></div>
            <div className="about-icon">🏢</div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-alt">
        <div className="container text-center">
          <p className="eyebrow-dark">Our Purpose</p>
          <h2>Our Mission</h2>
          <p className="text-muted mission-text">
            To architect and deliver robust, highly tailored ERP environments that act as the unbreakable digital spine for growing enterprises — enabling total visibility, seamless scalability, and operational excellence.
          </p>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card glass-card">
                <div className="val-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p className="text-muted">{v.desc}</p>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-orb-1"></div><div className="cta-orb-2"></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to optimize your business operations?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '0 auto 2rem', fontSize: '1.05rem' }}>
            Partner with IP Solutions for an enterprise-grade ERP implementation that drives your business forward.
          </p>
          <Link href="/contact" className="btn btn-primary">Schedule a Consultation</Link>
        </div>
      </section>

      <style jsx>{`
                .page-hero {
                    padding: 8rem 0 6rem;
                    background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
                    position: relative; overflow: hidden;
                }
                .ph-orb-1 {
                    position: absolute; width: 500px; height: 500px;
                    background: radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%);
                    border-radius: 50%; top: -150px; right: -50px; pointer-events: none;
                }
                .ph-orb-2 {
                    position: absolute; width: 350px; height: 350px;
                    background: radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%);
                    border-radius: 50%; bottom: -100px; left: -50px; pointer-events: none;
                }
                .eyebrow {
                    font-size: 0.813rem; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 0.12em;
                    color: rgba(255,255,255,0.6); margin-bottom: 1rem;
                }
                .eyebrow-dark {
                    font-size: 0.813rem; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 0.12em;
                    color: var(--color-secondary); margin-bottom: 0.75rem;
                }
                .text-grad {
                    background: linear-gradient(90deg, #60a5fa, #a855f7);
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                }
                .page-subtitle {
                    color: rgba(255,255,255,0.7); font-size: 1.2rem;
                    max-width: 600px; margin: 0 auto;
                }
                .who-grid {
                    display: grid; grid-template-columns: 1fr 1fr;
                    gap: 5rem; align-items: center;
                }
                .text-lg { font-size: 1.05rem; line-height: 1.8; }
                .mb-2 { margin-bottom: 1rem; }
                .about-visual {
                    padding: 2.5rem;
                    background: var(--glass-bg);
                    backdrop-filter: blur(12px);
                    border: 1px solid var(--glass-border);
                    border-radius: var(--radius-md);
                    display: flex; flex-direction: column;
                    align-items: center; text-align: center; gap: 1.5rem;
                }
                .about-stat { display: flex; flex-direction: column; align-items: center; gap: 0.35rem; }
                .a-stat-num { font-size: 2.5rem; font-weight: 800; }
                .a-stat-lab { font-size: 0.9rem; color: var(--color-text-muted); font-weight: 500; }
                .about-divider { width: 60px; height: 1px; background: var(--color-border); }
                .about-icon { font-size: 4rem; margin-top: 1rem; }
                .mission-text {
                    font-size: 1.1rem; line-height: 1.85;
                    max-width: 800px; margin: 0 auto 3rem;
                }
                .values-grid {
                    display: grid; grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem; margin-top: 2rem;
                }
                .value-card {
                    padding: 2.5rem 2rem;
                    background: var(--glass-bg);
                    backdrop-filter: blur(12px);
                    border: 1px solid var(--glass-border);
                    border-radius: var(--radius-md);
                    position: relative; overflow: hidden;
                    transition: all 0.3s ease;
                    text-align: left;
                }
                .value-card:hover {
                    transform: translateY(-6px);
                    border-color: var(--color-secondary);
                    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.12);
                }
                .value-card:hover .card-glow { opacity: 1; }
                .card-glow {
                    position: absolute; inset: 0;
                    background: radial-gradient(ellipse at top, rgba(37,99,235,0.07) 0%, transparent 60%);
                    opacity: 0; transition: opacity 0.35s ease; pointer-events: none;
                }
                .val-icon { font-size: 2.25rem; margin-bottom: 1rem; }
                .value-card h4 { font-size: 1.15rem; margin-bottom: 0.75rem; }
                .value-card p { font-size: 0.95rem; line-height: 1.7; margin: 0; }
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
                    .who-grid { grid-template-columns: 1fr; gap: 3rem; }
                    .values-grid { grid-template-columns: 1fr; }
                }
            `}</style>
    </>
  );
}
