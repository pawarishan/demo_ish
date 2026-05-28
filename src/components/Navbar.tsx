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

      <div className="navbar-container">

        {/* =========================================
            LOGO
        ========================================= */}

        <Link href="/" className="logo">

          <div className="logo-wrapper">

            <span className="logo-ip">
              IPSOL
            </span>

            <span className="logo-text">
              TECHNOLOGIES
            </span>

          </div>

          <span className="logo-tagline">
            Microsoft Licensing & Business Central Solutions
          </span>

        </Link>

        {/* =========================================
            NAVIGATION
        ========================================= */}

        <nav className={`nav-links ${mobileMenuOpen ? 'nav-open' : ''}`}>

          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>

          <Link
            href="/microsoft-licenses"
            onClick={() => setMobileMenuOpen(false)}
          >
            Licenses
          </Link>

          <Link
            href="/business-central"
            onClick={() => setMobileMenuOpen(false)}
          >
            Business Central
          </Link>

          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            href="/industries"
            onClick={() => setMobileMenuOpen(false)}
          >
            Industries
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="/why-choose-us"
            onClick={() => setMobileMenuOpen(false)}
          >
            Why Us
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>

        </nav>

        {/* =========================================
            ACTION BUTTONS
        ========================================= */}

        <div className="nav-actions">

          <ThemeToggle />

          <Link
            href="/contact?service=license"
            className="btn btn-outline nav-cta hide-mobile"
          >
            Get License Quote
          </Link>

          <Link
            href="/contact"
            className="btn btn-primary nav-cta"
          >
            Free Consultation
          </Link>

          <button
            className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </div>

      {/* =========================================
          STYLES
      ========================================= */}

      <style jsx>{`

        /* =========================================
            NAVBAR
        ========================================= */

        .navbar {
          position: fixed;

          top: 0;
          left: 0;

          width: 100%;

          z-index: 1000;

          background: var(--nav-bg);

          backdrop-filter: blur(30px) saturate(180%);
          -webkit-backdrop-filter: blur(30px) saturate(180%);

          border-bottom: 1px solid var(--nav-border);

          transition: all 0.3s ease;

          padding: 0.75rem 0;
        }

        .navbar.scrolled {
          padding: 0.55rem 0;

          box-shadow: var(--shadow-elevation-low);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 2rem;

          width: 100%;
          max-width: 1550px;

          min-height: 60px;

          margin: 0 auto;

          padding-left: 2rem;
          padding-right: 2rem;
        }

        /* =========================================
            LOGO
        ========================================= */

        .logo {
          display: flex;
          flex-direction: column;
          justify-content: center;

          text-decoration: none;

          line-height: 1;

          flex-shrink: 0;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;

          gap: 0.3rem;
        }

        .logo-ip {
          font-size: 1.65rem;

          font-weight: 900;

          letter-spacing: -1px;

          background: var(--gradient-primary);

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          line-height: 1;
        }

        .logo-text {
          font-size: 0.82rem;

          font-weight: 800;

          letter-spacing: 2px;

          color: var(--color-text);

          line-height: 1;
        }

        .logo-tagline {
          font-size: 0.63rem;

          font-weight: 500;

          color: var(--color-text-light);

          letter-spacing: 0.3px;

          margin-top: 0.15rem;

          opacity: 0.85;
        }

        /* =========================================
            NAV LINKS
        ========================================= */

        .nav-links {
          display: flex;
          align-items: center;
          justify-content: center;

          flex: 1;

          gap: 1.2rem;

          margin-left: 2.5rem;
          margin-right: 2rem;
        }

        .nav-links a {
          position: relative;

          font-size: 0.78rem;

          font-weight: 700;

          text-transform: uppercase;

          letter-spacing: 0.5px;

          color: var(--color-text);

          transition: all 0.25s ease;

          padding: 0.3rem 0;

          white-space: nowrap;
        }

        .nav-links a:hover {
          color: var(--color-secondary);

          transform: translateY(-1px);
        }

        .nav-links a::after {
          content: '';

          position: absolute;

          left: 0;
          bottom: -2px;

          width: 0%;
          height: 2px;

          background: var(--gradient-primary);

          border-radius: 999px;

          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        /* =========================================
            ACTIONS
        ========================================= */

        .nav-actions {
          display: flex;
          align-items: center;

          gap: 0.8rem;

          flex-shrink: 0;
        }

        .nav-cta {
          height: 40px;

          padding: 0 1rem;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          font-size: 0.8rem;

          white-space: nowrap;
        }

        /* =========================================
            MOBILE TOGGLE
        ========================================= */

        .mobile-toggle {
          display: none;

          flex-direction: column;
          justify-content: center;

          gap: 5px;

          background: transparent;
          border: none;

          cursor: pointer;

          padding: 0.3rem;
        }

        .mobile-toggle span {
          width: 22px;
          height: 2px;

          background: var(--color-text);

          transition: all 0.3s ease;
        }

        .mobile-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .mobile-toggle.active span:nth-child(2) {
          opacity: 0;
        }

        .mobile-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* =========================================
            RESPONSIVE
        ========================================= */

        @media (max-width: 1300px) {

          .nav-links {
            gap: 0.9rem;

            margin-left: 1.8rem;
            margin-right: 1.5rem;
          }

          .logo-tagline {
            display: none;
          }
        }

        @media (max-width: 1150px) {

          .nav-links a {
            font-size: 0.74rem;
          }

          .nav-links {
            gap: 0.7rem;
          }

          .nav-actions {
            gap: 0.5rem;
          }

          .nav-cta {
            padding: 0 0.85rem;

            font-size: 0.75rem;
          }
        }

        @media (max-width: 992px) {

          .navbar {
            padding: 0.7rem 0;
          }

          .navbar-container {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .nav-links {
            display: none;
          }

          .nav-links.nav-open {
            display: flex;

            position: absolute;

            top: 100%;
            left: 0;

            width: 100%;

            flex-direction: column;
            align-items: flex-start;

            gap: 1.2rem;

            padding: 1.5rem;

            margin: 0;

            background: var(--nav-bg);

            backdrop-filter: blur(30px) saturate(180%);
            -webkit-backdrop-filter: blur(30px) saturate(180%);

            border-bottom: 1px solid var(--nav-border);

            box-shadow: var(--shadow-elevation-medium);
          }

          .nav-links.nav-open a {
            font-size: 0.95rem;
          }

          .hide-mobile,
          .nav-cta {
            display: none !important;
          }

          .mobile-toggle {
            display: flex;
          }

          .logo-tagline {
            display: none;
          }
        }

        @media (max-width: 576px) {

          .navbar-container {
            min-height: 54px;

            padding-left: 1rem;
            padding-right: 1rem;
          }

          .logo-ip {
            font-size: 1.45rem;
          }

          .logo-text {
            font-size: 0.72rem;

            letter-spacing: 1.5px;
          }
        }

      `}</style>

    </header>
  );
}