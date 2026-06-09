"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import './navbar.css';

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

    </header>
  );
}