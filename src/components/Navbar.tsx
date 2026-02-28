"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container navbar-container">
        <Link href="/" className="logo">
          IP Solutions
        </Link>

        <nav className={`nav-links ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/industries" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
          <Link href="/why-choose-us" onClick={() => setMobileMenuOpen(false)}>Why Us</Link>
          <Link href="/faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <Link href="/contact" className="btn btn-primary nav-cta">
            Consultation
          </Link>
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: transparent;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-bottom: 1px solid transparent;
          padding: 1.5rem 0;
        }

        .navbar.scrolled {
          padding: 1rem 0;
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: var(--shadow-elevation-low);
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-primary);
          letter-spacing: -0.5px;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--color-text-muted);
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: var(--color-primary);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0%;
          height: 2px;
          background: var(--gradient-primary);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-primary);
        }

        @media (max-width: 992px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: var(--color-base-surface);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 2rem;
            box-shadow: var(--shadow-elevation-medium);
            gap: 1.5rem;
            border-bottom: 1px solid var(--color-border);
          }

          .nav-links.nav-open {
            display: flex;
          }

          .nav-cta {
            display: none;
          }

          .mobile-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
}
