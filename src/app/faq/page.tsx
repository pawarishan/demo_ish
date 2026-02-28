"use client";

import Link from 'next/link';
import { useState } from 'react';

const faqs = [
    { q: "What exactly is Microsoft Dynamics 365 Business Central?", a: "Business Central is Microsoft's premier cloud-based ERP solution designed for small to mid-sized organizations. It provides a comprehensive, unified view of your financials, sales, service, and operations while seamlessly integrating with Microsoft 365 applications like Outlook and Excel." },
    { q: "Which types of businesses benefit most from Business Central?", a: "It excels particularly in Manufacturing, Wholesale Distribution, Retail, Trading, and Professional Services. Any organization outgrowing basic accounting software and experiencing operational silos is a prime candidate for an upgrade to Business Central." },
    { q: "Do you provide both implementation AND customization?", a: "Yes. That is our core strength. While many agencies only handle configuration, we possess deep architectural expertise in AL development, allowing us to write powerful, non-breaking custom extensions tailored precisely to your unique workflows." },
    { q: "Can you manage a migration from an older Dynamics NAV version?", a: "Absolutely. Migrating from older, on-premise Dynamics NAV to Business Central requires rigorous data transformation and code refactoring (from C/AL to AL). We specialize in risk-free NAV upgrades, ensuring your historical data remains fully intact and accessible." },
    { q: "Do you offer integration with third-party SaaS applications?", a: "Yes. We regularly build robust REST API integrations connecting Business Central to CRM platforms (Salesforce, HubSpot), eCommerce engines (Shopify, Magento), logistics providers, and bespoke internal applications." },
    { q: "What kind of support do you provide post-deployment?", a: "We offer comprehensive, long-term support contracts addressing system health monitoring, bug fixes, major release testing (Microsoft pushes updates bi-annually), and continuous architectural refinement as your business scales." },
    { q: "Can you create custom complex reports?", a: "Yes. We build highly complex custom RDLC and Word layout reports — intricate financial statements, robust inventory valuation metrics, or perfectly branded customer invoices. We design the exact intelligence layouts you require." },
    { q: "How do we get started with IP Solutions?", a: "The first step is a completely free architectural consultation. We'll discuss your current operational bottlenecks, your long-term business goals, and map out a strategy to determine if Business Central and IP Solutions are the right fit for your enterprise." },
];

function FAQItem({ q, a }: { q: string, a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`faq-item glass-card ${open ? 'is-open' : ''}`}>
            <button className="faq-trigger" onClick={() => setOpen(!open)}>
                <span className="faq-q">{q}</span>
                <span className={`faq-icon ${open ? 'rotated' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </span>
            </button>
            {open && (
                <div className="faq-answer">
                    <p className="text-muted">{a}</p>
                </div>
            )}
            <div className="card-glow"></div>
            <style jsx>{`
                .faq-item {
                    background: var(--glass-bg);
                    backdrop-filter: blur(12px);
                    border: 1px solid var(--glass-border);
                    border-radius: var(--radius-md);
                    position: relative; overflow: hidden;
                    transition: all 0.3s ease;
                }
                .faq-item.is-open {
                    border-color: var(--color-secondary);
                }
                .faq-trigger {
                    width: 100%; background: none; border: none;
                    padding: 1.75rem 2rem; cursor: pointer;
                    display: flex; justify-content: space-between; align-items: center;
                    text-align: left; gap: 1.5rem;
                }
                .faq-q {
                    font-size: 1.05rem; font-weight: 600;
                    color: var(--color-primary); line-height: 1.5;
                }
                .faq-icon {
                    color: var(--color-text-muted);
                    transition: transform 0.3s ease; flex-shrink: 0;
                }
                .faq-icon.rotated { transform: rotate(180deg); color: var(--color-secondary); }
                .faq-answer {
                    padding: 0 2rem 1.75rem;
                    border-top: 1px solid var(--color-border);
                    padding-top: 1.25rem;
                }
                .faq-answer p {
                    font-size: 0.975rem; line-height: 1.8; margin: 0;
                }
                .card-glow {
                    position: absolute; inset: 0;
                    background: radial-gradient(ellipse at top, rgba(37,99,235,0.07) 0%, transparent 60%);
                    opacity: 0; transition: opacity 0.35s ease; pointer-events: none;
                }
                .faq-item.is-open .card-glow { opacity: 1; }
            `}</style>
        </div>
    );
}

export default function FAQ() {
    return (
        <>
            <section className="page-hero">
                <div className="orb-1"></div><div className="orb-2"></div>
                <div className="container text-center animate-fade-in" style={{ position: 'relative', zIndex: 1 }}>
                    <p className="eyebrow">Got Questions?</p>
                    <h1 style={{ color: 'white' }}>Frequently Asked <span className="text-grad">Questions</span></h1>
                    <p className="page-sub">Expert answers regarding Microsoft Dynamics 365 Business Central evaluations, deployments, and our bespoke development methodology.</p>
                </div>
            </section>

            <section className="section">
                <div className="container faq-container">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} q={faq.q} a={faq.a} />
                    ))}
                </div>
            </section>

            <section className="section bg-alt text-center">
                <div className="container">
                    <h2>Still Have Questions?</h2>
                    <p className="text-muted" style={{ maxWidth: '560px', margin: '0 auto 2rem', fontSize: '1.05rem' }}>Our solutions architects are available to discuss the specific nuances of your operational environment.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/contact" className="btn btn-primary">Contact an Architect</Link>
                        <a href="mailto:info@ipsolutions.com" className="btn btn-outline">Email Us Directly</a>
                    </div>
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
                .text-grad {
                    background: linear-gradient(90deg, #60a5fa, #a855f7);
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                }
                .page-sub {
                    color: rgba(255,255,255,0.7); font-size: 1.15rem;
                    max-width: 640px; margin: 0 auto;
                }
                .faq-container {
                    max-width: 860px; margin: 0 auto;
                    display: flex; flex-direction: column; gap: 1rem;
                }
            `}</style>
        </>
    );
}
