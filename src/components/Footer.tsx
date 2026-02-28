"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer bg-surface">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">IP Solutions</h3>
            <p className="footer-desc">
              Helping businesses implement, customize, integrate, migrate, and support Microsoft Dynamics 365 Business Central with scalable ERP solutions.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/why-choose-us">Why Choose Us</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services#implementation">D365 Implementation</Link></li>
              <li><Link href="/services#customization">AL Development</Link></li>
              <li><Link href="/services#integrations">API Integrations</Link></li>
              <li><Link href="/services#migration">NAV Upgrades</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: info@ipsol.co.in</p>
            <p>Phone: +(91) 9560415235</p>
            <p>Address: JMD Megapolis, Sohna Road<br />Gurugram, Haryana</p>
            <div className="social-icons">
              <div className="icon">in</div>
              <div className="icon">tw</div>
              <div className="icon">fb</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} IP Solutions. All rights reserved.</p>
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
