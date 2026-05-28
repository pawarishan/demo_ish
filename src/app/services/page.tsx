"use client";

import Link from 'next/link';

export default function Services() {
    const servicesList = [
        { id: "implementation", icon: "⚙️", title: "Business Central Implementation", desc: "Deploying an ERP system is a critical business event. We ensure a flawless transition through meticulous planning, configuration, and training.", solves: "Disjointed systems, poor financial visibility, and inefficient manual processes.", value: "A unified, single source of truth for your enterprise data, accelerating operations from day one." },
        { id: "customization", icon: "💻", title: "AL Development & Customization", desc: "Off-the-shelf software rarely fits intricate business models perfectly. Our senior AL developers architect custom extensions that modify Business Central to fit your exact operational workflows.", solves: "Rigid software limitations forcing your business to adapt its processes to the software.", value: "Tailor-made software that gives you a competitive edge without compromising future upgrade paths." },
        { id: "integrations", icon: "🔗", title: "API & Third-Party Integrations", desc: "Your ERP should not live in isolation. We build robust, secure API integrations linking Business Central to your CRM, eCommerce platforms, WMS, and bespoke internal applications.", solves: "Data silos, duplicate data entry, and inconsistent information across departments.", value: "A seamlessly connected software ecosystem ensuring data accuracy in real-time." },
        { id: "reports", icon: "📊", title: "Report Development (RDLC / Word)", desc: "Data is useless without insight. We design high-performance custom RDLC and Word layout reports to give management the exact analytics they need to steer the business.", solves: "Inability to extract actionable insights or format customer-facing documents professionally.", value: "Empowered decision-making through clear, precise, and branded business intelligence." },
        { id: "migration", icon: "🔄", title: "Data Migration", desc: "Moving historical data is often the riskiest part of ERP transitions. Our team utilizes rigorous ETL methodologies to migrate your legacy data safely and accurately.", solves: "Fear of data loss, corruption, or losing historical insights during an upgrade.", value: "Complete continuity of business operations with untainted historical records accessible immediately." },
        { id: "nav-upgrade", icon: "⬆️", title: "NAV to Business Central Upgrade", desc: "Operating on legacy Dynamics NAV poses security risks and operational bottlenecks. We manage your complex upgrade to the modern cloud environment of Business Central.", solves: "On-premise infrastructure costs, lack of modern features, and compliance risks.", value: "Modernized infrastructure, automatic updates, and access to the latest Microsoft AI capabilities." },
        { id: "support", icon: "🛠️", title: "Support & Maintenance", desc: "Our relationship doesn't end at go-live. We provide continuous technical support, system health checks, and enhancements to ensure maximum ROI on your ERP investment.", solves: "System downtime, user adoption hurdles, and unaddressed technical bugs.", value: "Uninterrupted business continuity and a system that continually evolves with your business." },
        { id: "consulting", icon: "🧠", title: "ERP Consulting", desc: "Before a single line of code is written, our enterprise architects offer strategic consulting to align your software architecture with your long-term business objectives.", solves: "Lack of strategic direction or failed software implementations due to poor planning.", value: "A clear, actionable technology roadmap designed to maximize enterprise valuation." }
    ];

    return (
        <>
            <section className="page-hero">
                <div className="orb-1"></div><div className="orb-2"></div>
                <div className="container text-center animate-fade-in" style={{ position: 'relative', zIndex: 1 }}>
                    <p className="eyebrow">Our Capabilities</p>
                    <h1 style={{ color: 'white' }}>Premium <span className="text-grad">ERP Services</span></h1>
                    <p className="page-sub">Comprehensive, enterprise-grade capabilities for Microsoft Dynamics 365 Business Central.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {servicesList.map((svc) => (
                        <div key={svc.id} id={svc.id} className="svc-row glass-card">
                            <div className="svc-left">
                                <div className="svc-icon-wrap">{svc.icon}</div>
                                <h2 className="svc-title">{svc.title}</h2>
                                <p className="text-muted svc-desc">{svc.desc}</p>
                                <Link href="/contact" className="btn btn-primary svc-btn">Discuss This Service →</Link>
                            </div>
                            <div className="svc-right">
                                <div className="svc-metric">
                                    <div className="svc-metric-icon problem">⚠️</div>
                                    <div>
                                        <p className="metric-label">Problems Solved</p>
                                        <p className="text-muted metric-text">{svc.solves}</p>
                                    </div>
                                </div>
                                <div className="svc-metric">
                                    <div className="svc-metric-icon value">💎</div>
                                    <div>
                                        <p className="metric-label">Business Value</p>
                                        <p className="text-muted metric-text">{svc.value}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-glow"></div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-orb-1"></div><div className="cta-orb-2"></div>
                <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>Need a Custom Solution?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '0 auto 2rem' }}>Our architects excel at solving unique operational challenges securely and efficiently.</p>
                    <Link href="/contact" className="btn btn-primary">Talk to an Expert Today</Link>
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
                .svc-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                    padding: 2.5rem;
                    margin-bottom: 2rem;
                    background: var(--glass-bg);
                    backdrop-filter: blur(12px);
                    border: 1px solid var(--glass-border);
                    border-radius: var(--radius-md);
                    position: relative; overflow: hidden;
                    transition: border-color 0.3s ease, box-shadow 0.3s ease, translate 0.3s ease;
                    scroll-margin-top: 100px;
                }
                .svc-row:hover {
                    translate: 0 -4px;
                    border-color: var(--color-secondary);
                    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.1);
                }
                .svc-row:hover .card-glow { opacity: 1; }
                .card-glow {
                    position: absolute; inset: 0;
                    background: radial-gradient(ellipse at top left, rgba(37,99,235,0.06) 0%, transparent 60%);
                    opacity: 0; transition: opacity 0.35s ease; pointer-events: none;
                }
                .svc-icon-wrap {
                    font-size: 2.5rem; margin-bottom: 1.25rem;
                    width: 60px; height: 60px;
                    border-radius: 14px;
                    background: var(--color-base-alt);
                    border: 1px solid var(--color-border);
                    display: flex; align-items: center; justify-content: center;
                    transition: all 0.3s ease;
                }
                .svc-row:hover .svc-icon-wrap {
                    background: var(--color-secondary);
                    border-color: var(--color-secondary);
                }
                .svc-title { font-size: 1.5rem; margin-bottom: 1rem; }
                .svc-desc { font-size: 1rem; line-height: 1.75; margin-bottom: 1.5rem; }
                .svc-btn { align-self: flex-start; }
                .svc-left { display: flex; flex-direction: column; }
                .svc-right {
                    display: flex; flex-direction: column; gap: 1.5rem;
                    border-left: 1px solid var(--color-border);
                    padding-left: 2.5rem;
                    justify-content: center;
                }
                .svc-metric { display: flex; gap: 1rem; align-items: flex-start; }
                .svc-metric-icon {
                    font-size: 1.5rem; flex-shrink: 0;
                    width: 44px; height: 44px;
                    border-radius: 10px; display: flex;
                    align-items: center; justify-content: center;
                }
                .svc-metric-icon.problem { background: rgba(245,158,11,0.1); }
                .svc-metric-icon.value { background: rgba(37,99,235,0.1); }
                .metric-label {
                    font-weight: 700; font-size: 0.9rem;
                    color: var(--color-primary); margin-bottom: 0.35rem;
                }
                .metric-text { font-size: 0.95rem; line-height: 1.65; margin: 0; }
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
                    .svc-row { grid-template-columns: 1fr; gap: 2rem; }
                    .svc-right { border-left: none; border-top: 1px solid var(--color-border); padding-left: 0; padding-top: 1.5rem; }
                }
            `}</style>
        </>
    );
}
