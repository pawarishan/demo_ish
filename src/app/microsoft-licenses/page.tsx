"use client";

import Link from 'next/link';

export default function MicrosoftLicenses() {

  const licenses = [
    {
      title: "Microsoft 365",
      desc: "Empower your workforce with Word, Excel, Teams, and enterprise-grade security.",
      icon: "☁️",
      type: "Productivity"
    },
    {
      title: "Dynamics 365",
      desc: "Intelligent CRM and ERP applications for sales, customer service, and finance.",
      icon: "🔑",
      type: "Business Apps"
    },
    {
      title: "Power Platform",
      desc: "Analyze data, build solutions, automate processes, and create virtual agents.",
      icon: "⚡",
      type: "Automation"
    },
    {
      title: "Microsoft Azure",
      desc: "Build, manage, and deploy applications on a massive, global network.",
      icon: "🌐",
      type: "Cloud Infrastructure"
    }
  ];

  return (
    <div className="page-wrapper animate-fade-in">

      {/* =========================================
          HERO SECTION
      ========================================= */}

      <div
        className="page-header"
        style={{
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container">

          <div className="hero-badge">
            <span className="badge-dot"></span>
            IPSOL Technologies • Microsoft Cloud Solutions
          </div>

          <h1 className="page-title">
            Microsoft <span className="text-gradient">Licenses</span>
          </h1>

          <p className="page-subtitle text-muted">
            Procure the right Microsoft licenses at the right price.
            IPSOL Technologies helps businesses optimize licensing
            costs while maximizing productivity, collaboration,
            and security.
          </p>

        </div>

        {/* Background Glow */}
        <div className="hero-glow"></div>
      </div>

      {/* =========================================
          LICENSE CARDS
      ========================================= */}

      <div
        className="container"
        style={{ paddingBottom: '6rem' }}
      >

        <div className="services-grid">

          {licenses.map((lic, i) => (

            <div
              key={i}
              className="glass-card license-card"
              style={{
                animationDelay: `${i * 120}ms`
              }}
            >

              <div className="license-icon">
                {lic.icon}
              </div>

              <div className="license-type">
                {lic.type}
              </div>

              <h3 className="license-title">
                {lic.title}
              </h3>

              <p className="license-desc text-muted">
                {lic.desc}
              </p>

              <Link
                href={`/contact?service=license&type=${lic.title.toLowerCase().replace(' ', '-')}`}
                className="license-link"
              >
                Get Quote
                <span>→</span>
              </Link>

            </div>

          ))}

        </div>

        {/* =========================================
            CTA SECTION
        ========================================= */}

        <div className="glass-card cta-card">

          <div className="cta-glow"></div>

          <h2>
            Stop Overpaying for Software
          </h2>

          <p className="text-muted">
            Our licensing experts conduct detailed audits of your
            current Microsoft environment to identify redundancies,
            optimize costs, and architect the right licensing
            strategy tailored to your business needs.
          </p>

          <Link
            href="/contact?service=license"
            className="btn btn-primary"
          >
            Request License Audit
          </Link>

        </div>

      </div>

      {/* =========================================
          STYLES
      ========================================= */}

      <style jsx>{`

        /* =========================================
            HERO
        ========================================= */

        .hero-badge {
          margin-bottom: 1.5rem;

          display: inline-flex;
          align-items: center;
          gap: 0.6rem;

          background: var(--glass-bg);

          backdrop-filter: blur(10px);

          border: 1px solid var(--glass-border);

          color: var(--color-secondary);

          font-size: 0.875rem;
          font-weight: 600;

          padding: 0.6rem 1.1rem;

          border-radius: 999px;
        }

        .badge-dot {
          width: 8px;
          height: 8px;

          border-radius: 50%;

          background: var(--color-secondary);
        }

        .hero-glow {
          position: absolute;

          top: -120px;
          right: -120px;

          width: 420px;
          height: 420px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(37,99,235,0.28) 0%,
              transparent 70%
            );

          filter: blur(40px);

          pointer-events: none;
        }

        /* =========================================
            GRID
        ========================================= */

        .services-grid {
          display: grid;

          grid-template-columns:
            repeat(auto-fit, minmax(300px, 1fr));

          gap: 2rem;

          margin-bottom: 4rem;
        }

        /* =========================================
            LICENSE CARD
        ========================================= */

        .license-card {
          position: relative;

          overflow: hidden;

          padding: 2.5rem;

          background: var(--glass-bg);

          backdrop-filter: blur(12px);

          border: 1px solid var(--glass-border);

          border-radius: var(--radius-lg);

          opacity: 0;

          translate: 0 30px;

          animation: cardFadeUp 0.7s ease forwards;

          transition:
            transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.45s ease,
            border-color 0.45s ease;
        }

        .license-card:hover {
          transform: translateY(-10px);

          border-color: rgba(37,99,235,0.35);

          box-shadow:
            0 20px 40px rgba(0,0,0,0.12),
            0 0 30px rgba(37,99,235,0.08);
        }

        .license-card::before {
          content: '';

          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,0.08),
              transparent 40%
            );

          opacity: 0;

          transition: opacity 0.4s ease;

          pointer-events: none;
        }

        .license-card:hover::before {
          opacity: 1;
        }

        .license-icon {
          font-size: 2.8rem;

          margin-bottom: 1.2rem;
        }

        .license-type {
          font-size: 0.82rem;
          font-weight: 700;

          text-transform: uppercase;

          letter-spacing: 1px;

          color: var(--color-secondary);

          margin-bottom: 0.7rem;
        }

        .license-title {
          font-size: 1.45rem;

          color: var(--color-primary);

          margin-bottom: 1rem;
        }

        .license-desc {
          line-height: 1.8;

          margin-bottom: 2rem;
        }

        .license-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;

          color: var(--color-text);

          font-weight: 600;

          transition: color 0.3s ease;
        }

        .license-link span {
          color: var(--color-secondary);

          transition: transform 0.3s ease;
        }

        .license-link:hover span {
          transform: translateX(5px);
        }

        /* =========================================
            CTA CARD
        ========================================= */

        .cta-card {
          position: relative;

          overflow: hidden;

          text-align: center;

          padding: 4rem 2rem;

          background: var(--glass-bg);

          border: 1px solid var(--glass-border);

          border-radius: var(--radius-lg);
        }

        .cta-card h2 {
          font-size: 2rem;

          margin-bottom: 1.5rem;

          position: relative;
          z-index: 1;
        }

        .cta-card p {
          max-width: 650px;

          margin:
            0 auto
            2rem;

          font-size: 1.08rem;

          line-height: 1.8;

          position: relative;
          z-index: 1;
        }

        .cta-card .btn {
          position: relative;
          z-index: 1;
        }

        .cta-glow {
          position: absolute;

          top: 50%;
          left: 50%;

          transform:
            translate(-50%, -50%);

          width: 320px;
          height: 320px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(168,85,247,0.15) 0%,
              transparent 70%
            );

          filter: blur(40px);
        }

        /* =========================================
            ANIMATIONS
        ========================================= */

        @keyframes cardFadeUp {
          to {
            opacity: 1;
            translate: 0 0;
          }
        }

        /* =========================================
            RESPONSIVE
        ========================================= */

        @media (max-width: 768px) {

          .services-grid {
            gap: 1.5rem;
          }

          .license-card {
            padding: 2rem;
          }

          .cta-card {
            padding: 3rem 1.5rem;
          }

          .cta-card h2 {
            font-size: 1.7rem;
          }

          .cta-card p {
            font-size: 1rem;
          }
        }

      `}</style>

    </div>
  );
}