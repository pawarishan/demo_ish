"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer bg-surface">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">IPSOL Technologies</h3>
            <p className="footer-desc" style={{ marginBottom: '1rem', fontWeight: '500' }}>
              Microsoft Licenses & Business Central Solutions
            </p>
            <p className="footer-desc">
              Helping businesses buy the right Microsoft licenses and implement Microsoft Dynamics 365 Business Central with clean, scalable, and business-focused solutions.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/microsoft-licenses">Microsoft Licenses</Link></li>
              <li><Link href="/business-central">Business Central</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/why-choose-us">Why Choose Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><Link href="/microsoft-licenses">Microsoft 365 Licenses</Link></li>
              <li><Link href="/microsoft-licenses">Dynamics 365 Licenses</Link></li>
              <li><Link href="/microsoft-licenses">Azure Services</Link></li>
              <li><Link href="/business-central">Business Central Implementation</Link></li>
              <li><Link href="/business-central">AL Development</Link></li>
              <li><Link href="/business-central">API Integrations</Link></li>
              <li><Link href="/business-central">Support & Maintenance</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: pawarishant@gmail.com</p>
            <p>Phone: +(91) 8800685189</p>
            <p>Address: Santomalan, Najibabad<br />District Bijnor, UP</p>
            <div className="social-icons">
              <div className="icon">in</div>
              <div className="icon">tw</div>
              <div className="icon">fb</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: 'var(--color-base-alt)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', width: '100%', maxWidth: '800px', border: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ margin: 0, fontWeight: '600', color: 'var(--color-text)' }}>Need Microsoft licenses or Business Central support?</p>
            <a href="https://wa.me/918800685189?text=Hi%20IPSOL%20Technologies,%20I%20am%20interested%20in%20Microsoft%20licenses%20/%20Business%20Central%20services.%20Please%20contact%20me." target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#25D366', color: 'white', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Chat with us on WhatsApp</a>
          </div>
          <p>&copy; {new Date().getFullYear()} IPSOL Technologies. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          padding: 5rem 0 2rem;
          border-top: 1px solid var(--color-border);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .footer-logo {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-desc {
          color: var(--color-text-muted);
          max-width: 300px;
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .footer-links h4, .footer-contact h4 {
          margin-bottom: 1.5rem;
          color: var(--color-primary);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .footer-links ul li {
          margin-bottom: 0.75rem;
        }

        .footer-links a, .footer-contact p {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--color-secondary);
          padding-left: 6px;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--color-base-alt);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .icon:hover {
          background: var(--color-secondary);
          color: white;
          border-color: var(--color-secondary);
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        .footer-bottom {
          border-top: 1px solid var(--color-border);
          padding-top: 2rem;
          text-align: center;
          color: var(--color-text-muted);
          font-size: 0.875rem;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </footer>
  );
}
