"use client";

import Link from 'next/link';

export default function BusinessCentral() {
  const features = [
    { title: "Financial Management", desc: "Make informed decisions with connected data across accounting, sales, purchasing, and inventory.", icon: "💰" },
    { title: "Supply Chain", desc: "Optimize inventory levels, predict stock shortages, and automatically create purchase orders.", icon: "📦" },
    { title: "Sales & Service", desc: "Prioritize sales leads, manage customer interactions, and accelerate the quote-to-cash process.", icon: "🤝" },
    { title: "Project Management", desc: "Create, manage, and track customer projects using timesheets and advanced job costing.", icon: "📈" }
  ];

  const methodology = [
    { step: "01", title: "Discovery & Analysis", desc: "Deep dive into your operational workflows to map exact ERP requirements." },
    { step: "02", title: "System Architecture", desc: "Designing a scalable Business Central environment tailored to your industry." },
    { step: "03", title: "AL Customization", desc: "Writing clean, upgrade-safe AL code to bridge any functionality gaps." },
    { step: "04", title: "Deployment & Training", desc: "Seamless go-live with comprehensive team training and ongoing support." }
  ];

  return (
    <div className="page-wrapper animate-fade-in">
      <div className="page-header" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="hero-badge" style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--glass-bg)', backdropFilter: 'blur(8px)', border: '1px solid var(--glass-border)', color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 600, padding: '0.5rem 1rem', borderRadius: '100px' }}>
            <span className="badge-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-secondary)' }}></span>
            Dynamics 365 Experts
          </div>
          <h1 className="page-title">Business <span className="text-gradient">Central</span></h1>
          <p className="page-subtitle text-muted">
            We architect, customize, and deploy Microsoft Dynamics 365 Business Central to unify your operations and drive unprecedented enterprise growth.
          </p>
        </div>
        <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)', filter: 'blur(40px)', borderRadius: '50%', pointerEvents: 'none' }}></div>
      </div>

      <div className="container" style={{ paddingBottom: '6rem' }}>
        
        {/* Features Grid */}
        <div style={{ marginBottom: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Unified Business Management</h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>Connect your financials, sales, service, and operations to streamline business processes.</p>
          </div>
          <div className="features-grid">
            {features.map((feat, i) => (
              <div key={i} className="glass-card bc-card" style={{ animationDelay: `${i * 120}ms` }}>
                <div className="bc-icon">{feat.icon}</div>
                <h3 className="bc-title">{feat.title}</h3>
                <p className="text-muted bc-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div style={{ background: 'var(--color-base-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '4rem 3rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }}></div>
          <h2 style={{ fontSize: '2rem', marginBottom: '3rem', position: 'relative', zIndex: 1 }}>Our Delivery Methodology</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', position: 'relative', zIndex: 1 }}>
            {methodology.map((m, i) => (
              <div key={i}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-border)', marginBottom: '1rem', lineHeight: 1 }}>{m.step}</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--color-primary)' }}>{m.title}</h4>
                <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          <Link href="/contact?service=business-central" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Schedule Implementation Call</Link>
        </div>

      </div>

      <style jsx>{`
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .bc-card {
          position: relative;
          overflow: hidden;
          padding: 2rem;
          background: var(--glass-bg);
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

        .bc-card:hover {
          transform: translateY(-10px);
          border-color: rgba(168, 85, 247, 0.35); /* Purple tint for BC */
          box-shadow:
            0 20px 40px rgba(0,0,0,0.12),
            0 0 30px rgba(168, 85, 247, 0.08);
        }

        .bc-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.08), transparent 40%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .bc-card:hover::before {
          opacity: 1;
        }

        .bc-icon {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          background: var(--color-base-alt);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          border: 1px solid var(--glass-border);
          transition: transform 0.4s ease, border-color 0.4s ease;
        }

        .bc-card:hover .bc-icon {
          transform: scale(1.1) rotate(-5deg);
          border-color: rgba(168, 85, 247, 0.3);
        }

        .bc-title {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        .bc-desc {
          line-height: 1.6;
        }

        @keyframes cardFadeUp {
          to {
            opacity: 1;
            translate: 0 0;
          }
        }
      `}</style>
    </div>
  );
}
