"use client";

import Link from 'next/link';

export default function Home() {
  const services = [
    { title: "Microsoft 365 Licenses", desc: "Equip your team with industry-leading productivity apps and secure cloud services.", icon: "☁️" },
    { title: "Dynamics 365 Licenses", desc: "Unlock the full potential of CRM and ERP applications with precise licensing plans.", icon: "🔑" },
    { title: "Azure Cloud Solutions", desc: "Scale your infrastructure securely with Microsoft Azure's flexible cloud platform.", icon: "🌐" },
    { title: "BC Implementation", desc: "End-to-end deployment of Dynamics 365 Business Central tailored to your operations.", icon: "⚙️" },
    { title: "AL Development", desc: "Expert AL coding to perfectly adapt Business Central to your unique workflows.", icon: "💻" },
    { title: "API Integrations", desc: "Seamlessly connect Business Central to CRM, eCommerce, and bespoke systems.", icon: "🔗" },
    { title: "Support & Maintenance", desc: "Reliable ongoing support for your Microsoft licenses and ERP systems.", icon: "🛠️" },
    { title: "Data Migration & Upgrades", desc: "Securely transition legacy data to the cloud with NAV to BC upgrades.", icon: "🔄" }
  ];

  const stats = [
    { value: "100%", label: "Microsoft Focus" },
    { value: "Seamless", label: "License Provisioning" },
    { value: "Zero", label: "Data Loss in Migration" },
    { value: "24/7", label: "Business Visibility" },
  ];

  const outcomes = [
    { title: "Cost-Optimized Licensing", desc: "Pay only for what you need with tailored Microsoft license provisioning and audits.", icon: "💡" },
    { title: "Operational Visibility", desc: "Real-time insights across finance, supply chain, and sales via Business Central.", icon: "👁️" },
    { title: "Automated Workflows", desc: "Drastically reduce manual data entry and human error with connected Microsoft tools.", icon: "⚡" },
    { title: "Scalable Foundation", desc: "An enterprise-grade architecture that grows flawlessly alongside your business.", icon: "🚀" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-orb orb-1"></div>
        <div className="hero-bg-orb orb-2"></div>
        <div className="hero-bg-orb orb-3"></div>
        <div className="container hero-content animate-fade-in">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Microsoft Cloud & ERP Experts
            </div>
            <h1>
              Your Trusted Partner for <span className="text-gradient">Microsoft Licenses</span> & <span className="text-gradient">Business Central</span>
            </h1>
            <p className="hero-subtitle">
              IPSOL Technologies delivers cost-effective Microsoft license provisioning and precision-built Dynamics 365 Business Central implementations to power your enterprise.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-primary">Book a Free Consultation</Link>
              <Link href="/contact?service=license" className="btn btn-ghost">Get a License Quote →</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="dashboard-glass">
              <div className="db-topbar">
                <div className="db-dot red"></div>
                <div className="db-dot yellow"></div>
                <div className="db-dot green"></div>
                <span className="db-title">IPSOL Technologies Portal</span>
              </div>
              <div className="db-body">
                <div className="db-sidebar-nav">
                  <div className="db-nav-item active"></div>
                  <div className="db-nav-item"></div>
                  <div className="db-nav-item"></div>
                  <div className="db-nav-item"></div>
                </div>
                <div className="db-main-content">
                  <div className="db-stat-cards">
                    <div className="db-stat-card"><div className="db-stat-bar" style={{ width: '70%' }}></div></div>
                    <div className="db-stat-card"><div className="db-stat-bar accent" style={{ width: '55%' }}></div></div>
                    <div className="db-stat-card"><div className="db-stat-bar green" style={{ width: '85%' }}></div></div>
                  </div>
                  <div className="db-chart">
                    <div className="db-bar" style={{ height: '40%' }}></div>
                    <div className="db-bar" style={{ height: '70%' }}></div>
                    <div className="db-bar" style={{ height: '55%' }}></div>
                    <div className="db-bar" style={{ height: '90%' }}></div>
                    <div className="db-bar" style={{ height: '65%' }}></div>
                    <div className="db-bar" style={{ height: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container stats-container">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-value text-gradient">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Business Overview */}
      <section className="section">
        <div className="container text-center">
          <p className="section-eyebrow">What We Do</p>
          <h2 className="mb-2">Transforming Operations with <span className="text-gradient">Microsoft Solutions</span></h2>
          <p className="text-muted section-subtitle">
            IPSOL Technologies bridges the gap between software acquisition and digital transformation. 
            We provide optimized Microsoft licensing solutions alongside deep technical expertise in Dynamics 365 Business Central implementation, ensuring you get maximum ROI from your tech stack.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="section bg-alt">
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-eyebrow">Core Services</p>
            <h2>Everything You Need to <span className="text-gradient">Succeed with Microsoft</span></h2>
            <p className="text-muted section-subtitle">From cost-effective license provisioning to complex ERP customizations, we have you covered.</p>
          </div>
          <div className="services-grid">
            {services.map((svc, i) => (
              <div key={i} className="service-card glass-card">
                <div className="service-icon-wrap">
                  <span className="service-icon">{svc.icon}</span>
                </div>
                <h3 className="service-title">{svc.title}</h3>
                <p className="text-muted service-desc">{svc.desc}</p>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-section">
        <div className="why-orb"></div>
        <div className="container why-inner">
          <div className="why-text">
            <p className="section-eyebrow section-eyebrow-light">Why IPSOL Technologies</p>
            <h2 style={{ color: 'white' }}>Licenses & Implementations. <br />Handled <span style={{ background: 'linear-gradient(90deg, #60a5fa, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Expertly.</span></h2>
            <p className="why-desc">We offer a unified approach: providing the exact Microsoft licenses you need and the elite technical talent required to implement Dynamics 365 Business Central.</p>
            <ul className="check-list">
              <li>Optimized Microsoft License Provisioning</li>
              <li>Deep Business Central technical expertise</li>
              <li>Clean, scalable AL development methodology</li>
              <li>Transparent, cost-effective pricing</li>
              <li>Continuous advisory and dedicated support</li>
            </ul>
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>Discover the IPSOL Difference</Link>
          </div>
          <div className="why-visual">
            <div className="why-card glass-dark">
              <div className="why-card-icon">🤝</div>
              <h4>Unified Vendor</h4>
              <p>Buy licenses and build your ERP with a single, trusted technology partner.</p>
            </div>
            <div className="why-card glass-dark" style={{ marginTop: '2rem' }}>
              <div className="why-card-icon">🎯</div>
              <h4>Precision-First</h4>
              <p>Rigorous analysis for license audits and ERP deployments.</p>
            </div>
            <div className="why-card glass-dark">
              <div className="why-card-icon">🚀</div>
              <h4>Risk-Free Delivery</h4>
              <p>Milestone-driven framework guaranteeing operational continuity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-eyebrow">Business Impact</p>
            <h2>Tangible <span className="text-gradient">Business Outcomes</span></h2>
            <p className="text-muted section-subtitle">The return on your investment with our premium delivery framework.</p>
          </div>
          <div className="outcomes-grid">
            {outcomes.map((out, i) => (
              <div key={i} className="outcome-card glass-card">
                <div className="outcome-icon">{out.icon}</div>
                <h3>{out.title}</h3>
                <p className="text-muted">{out.desc}</p>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="cta-section">
        <div className="cta-orb-1"></div>
        <div className="cta-orb-2"></div>
        <div className="container text-center">
          <p className="section-eyebrow section-eyebrow-light">Get Started</p>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Ready to Empower Your Enterprise?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.15rem' }}>
            Let IPSOL Technologies provide the right Microsoft licenses and the precise Business Central implementation to scale your operations.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">Schedule a Consultation</Link>
            <Link href="/contact?service=license" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(4px)' }}>Get a License Quote</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
                /* ---- Hero ---- */
                .hero {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    padding: 8rem 0 6rem;
                    position: relative;
                    overflow: hidden;
                    background: var(--color-base);
                }

                .hero-bg-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.4;
                    pointer-events: none;
                }
                .orb-1 {
                    width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(37,99,235,0.5) 0%, transparent 70%);
                    top: -100px; right: -100px;
                }
                .orb-2 {
                    width: 400px; height: 400px;
                    background: radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%);
                    bottom: 50px; left: -50px;
                }
                .orb-3 {
                    width: 300px; height: 300px;
                    background: radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%);
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                }

                .hero-content {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    align-items: center;
                    gap: 5rem;
                    position: relative;
                    z-index: 1;
                }

                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: var(--glass-bg);
                    backdrop-filter: blur(8px);
                    border: 1px solid var(--glass-border);
                    color: var(--color-secondary);
                    font-size: 0.875rem;
                    font-weight: 600;
                    padding: 0.5rem 1rem;
                    border-radius: 100px;
                    margin-bottom: 1.5rem;
                }
                .badge-dot {
                    width: 8px; height: 8px;
                    border-radius: 50%;
                    background: var(--color-secondary);
                    animation: pulseGlow 2s infinite;
                }

                .hero-text h1 {
                    font-size: clamp(2.5rem, 4.5vw, 4rem);
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    color: var(--color-primary);
                }

                .hero-subtitle {
                    font-size: 1.15rem;
                    color: var(--color-text-muted);
                    margin-bottom: 2.5rem;
                    line-height: 1.8;
                    max-width: 540px;
                }

                .hero-ctas {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                .btn-ghost {
                    background: var(--glass-bg);
                    color: var(--color-text);
                    border: 1px solid var(--color-border);
                    backdrop-filter: blur(8px);
                }
                .btn-ghost:hover {
                    border-color: var(--color-secondary);
                    color: var(--color-secondary);
                }

                /* Dashboard Mockup */
                .dashboard-glass {
                    background: var(--glass-bg);
                    backdrop-filter: blur(20px);
                    border: 1px solid var(--glass-border);
                    border-radius: 16px;
                    box-shadow: var(--shadow-elevation-high);
                    overflow: hidden;
                    width: 100%;
                }
                .db-topbar {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    padding: 12px 16px;
                    background: var(--glass-bg);
                    border-bottom: 1px solid var(--glass-border);
                }
                .db-dot {
                    width: 12px; height: 12px;
                    border-radius: 50%;
                }
                .db-dot.red { background: #ff5f56; }
                .db-dot.yellow { background: #ffbd2d; }
                .db-dot.green { background: #27c93f; }
                .db-title {
                    font-size: 0.75rem;
                    color: var(--color-text-muted);
                    margin-left: 8px;
                    font-weight: 500;
                }
                .db-body {
                    display: flex;
                    height: 320px;
                }
                .db-sidebar-nav {
                    width: 56px;
                    background: var(--glass-bg);
                    border-right: 1px solid var(--glass-border);
                    padding: 16px 12px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .db-nav-item {
                    height: 32px;
                    border-radius: 6px;
                    background: var(--color-border);
                    opacity: 0.6;
                }
                .db-nav-item.active {
                    background: var(--color-secondary);
                    opacity: 1;
                }
                .db-main-content {
                    flex: 1;
                    padding: 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .db-stat-cards {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 8px;
                }
                .db-stat-card {
                    background: var(--color-base-alt);
                    border: 1px solid var(--color-border);
                    border-radius: 8px;
                    padding: 12px;
                    height: 56px;
                    display: flex;
                    align-items: flex-end;
                }
                .db-stat-bar {
                    height: 4px;
                    border-radius: 100px;
                    background: var(--color-secondary);
                }
                .db-stat-bar.accent { background: #a855f7; }
                .db-stat-bar.green { background: #10b981; }
                .db-chart {
                    flex: 1;
                    display: flex;
                    align-items: flex-end;
                    gap: 8px;
                    padding: 12px;
                    background: var(--color-base-alt);
                    border: 1px solid var(--color-border);
                    border-radius: 8px;
                }
                .db-bar {
                    flex: 1;
                    background: linear-gradient(to top, var(--color-secondary), rgba(37,99,235,0.3));
                    border-radius: 4px 4px 0 0;
                    transition: height 0.3s ease;
                }
                .db-bar:nth-child(even) {
                    background: linear-gradient(to top, #a855f7, rgba(168,85,247,0.3));
                }

                /* ---- Stats Bar ---- */
                .stats-bar {
                    background: var(--color-base-surface);
                    border-top: 1px solid var(--color-border);
                    border-bottom: 1px solid var(--color-border);
                    padding: 2.5rem 0;
                }
                .stats-container {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                    text-align: center;
                }
                .stat-item { }
                .stat-value {
                    font-size: 2.5rem;
                    font-weight: 800;
                    line-height: 1;
                    margin-bottom: 0.5rem;
                }
                .stat-label {
                    font-size: 0.9rem;
                    color: var(--color-text-muted);
                    font-weight: 500;
                }

                /* ---- Section Helpers ---- */
                .section-eyebrow {
                    font-size: 0.875rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-secondary);
                    margin-bottom: 0.75rem;
                }
                .section-eyebrow-light {
                    color: rgba(255,255,255,0.6);
                }
                .section-subtitle {
                    font-size: 1.1rem;
                    max-width: 680px;
                    margin: 0 auto;
                    line-height: 1.8;
                }

                /* ---- Services Grid ---- */
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                }

                .glass-card {
                    background: var(--glass-bg);
                    backdrop-filter: blur(12px);
                    border: 1px solid var(--glass-border);
                    border-radius: var(--radius-md);
                    position: relative;
                    overflow: hidden;
                    transition: border-color 0.35s ease, box-shadow 0.35s ease, translate 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .glass-card:hover {
                    translate: 0 -6px;
                    border-color: var(--color-secondary);
                    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.15), var(--shadow-elevation-medium);
                }
                .glass-card:hover .card-glow {
                    opacity: 1;
                }
                .card-glow {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(ellipse at top, rgba(37,99,235,0.07) 0%, transparent 60%);
                    opacity: 0;
                    transition: opacity 0.35s ease;
                    pointer-events: none;
                }

                .service-card {
                    padding: 2rem;
                }
                .service-icon-wrap {
                    width: 52px; height: 52px;
                    border-radius: 12px;
                    background: var(--color-base-alt);
                    border: 1px solid var(--color-border);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.25rem;
                    transition: all 0.3s ease;
                }
                .glass-card:hover .service-icon-wrap {
                    background: var(--color-secondary);
                    border-color: var(--color-secondary);
                }
                .service-icon {
                    font-size: 1.5rem;
                }
                .service-title {
                    font-size: 1.1rem;
                    font-weight: 700;
                    margin-bottom: 0.75rem;
                    color: var(--color-primary);
                }
                .service-desc {
                    font-size: 0.95rem;
                    line-height: 1.7;
                    margin-bottom: 1.25rem;
                }
                .service-link {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--color-secondary);
                    transition: gap 0.3s ease;
                }
                .service-link:hover {
                    text-decoration: underline;
                }

                /* ---- Why Section ---- */
                .why-section {
                    background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
                    position: relative;
                    overflow: hidden;
                }
                .why-orb {
                    position: absolute;
                    width: 500px; height: 500px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%);
                    top: -100px; right: -50px;
                    pointer-events: none;
                }
                .why-inner {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 5rem;
                    align-items: center;
                    position: relative;
                    z-index: 1;
                }
                .why-desc {
                    color: rgba(255,255,255,0.7);
                    font-size: 1.05rem;
                    line-height: 1.8;
                    margin-bottom: 1.5rem;
                }
                .check-list {
                    list-style: none;
                    padding: 0;
                }
                .check-list li {
                    padding: 0.6rem 0 0.6rem 2rem;
                    position: relative;
                    color: rgba(255,255,255,0.85);
                    font-weight: 500;
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                }
                .check-list li:last-child { border-bottom: none; }
                .check-list li::before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    color: #60a5fa;
                    font-weight: 700;
                }
                .why-visual {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                }
                .glass-dark {
                    background: rgba(255,255,255,0.06);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: var(--radius-md);
                    padding: 1.75rem;
                    transition: background 0.3s ease, border-color 0.3s ease, translate 0.3s ease;
                }
                .glass-dark:hover {
                    background: rgba(255,255,255,0.1);
                    border-color: rgba(99,102,241,0.5);
                    translate: 6px 0;
                }
                .why-card-icon {
                    font-size: 2rem;
                    margin-bottom: 0.75rem;
                }
                .why-card h4 {
                    color: white;
                    font-size: 1.1rem;
                    margin-bottom: 0.5rem;
                }
                .why-card p {
                    color: rgba(255,255,255,0.65);
                    font-size: 0.95rem;
                    line-height: 1.6;
                    margin-bottom: 0;
                }

                /* ---- Outcomes ---- */
                .outcomes-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                }
                .outcome-card {
                    padding: 2.5rem;
                }
                .outcome-icon {
                    font-size: 2.5rem;
                    margin-bottom: 1.25rem;
                }
                .outcome-card h3 {
                    font-size: 1.35rem;
                    margin-bottom: 0.75rem;
                    color: var(--color-primary);
                }

                /* ---- CTA Section ---- */
                .cta-section {
                    padding: 8rem 0;
                    background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
                    position: relative;
                    overflow: hidden;
                }
                .cta-orb-1 {
                    position: absolute;
                    width: 400px; height: 400px;
                    background: radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, transparent 70%);
                    border-radius: 50%;
                    top: -100px; left: -100px;
                    pointer-events: none;
                }
                .cta-orb-2 {
                    position: absolute;
                    width: 400px; height: 400px;
                    background: radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 70%);
                    border-radius: 50%;
                    bottom: -100px; right: -100px;
                    pointer-events: none;
                }

                /* ---- Responsive ---- */
                @media (max-width: 992px) {
                    .hero-content {
                        grid-template-columns: 1fr;
                        text-align: center;
                        gap: 3rem;
                    }
                    .hero-ctas { justify-content: center; }
                    .hero-subtitle { margin: 0 auto 2.5rem; }
                    .hero-badge { margin: 0 auto 1.5rem; }
                    .stats-container { grid-template-columns: repeat(2, 1fr); }
                    .why-inner { grid-template-columns: 1fr; gap: 3rem; }
                    .outcomes-grid { grid-template-columns: 1fr; }
                }
                @media (max-width: 600px) {
                    .stats-container { grid-template-columns: repeat(2, 1fr); }
                    .services-grid { grid-template-columns: 1fr; }
                }
            `}</style>
    </>
  );
}
