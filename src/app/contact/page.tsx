"use client";

import { useState } from 'react';

const contactDetails = [
    { icon: "📧", label: "Email Us", value: "pawarishant@gmail.com", sub: "We respond within 24 hours." },
    { icon: "📞", label: "Call Us", value: "+(91) 8800685189", sub: "Mon–Fri, 9am–6pm IST." },
    { icon: "🏢", label: "Headquarters", value: "Santomalan, Najibabad", sub: "District Bijnor, UP" },
];

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });
        try {
            const res = await fetch(`/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setStatus({ type: 'success', message: '✅ Message sent! We\'ll be in touch within 24 hours.' });
                setFormData({ name: '', email: '', phone: '', company: '', message: '' });
            } else {
                const data = await res.json();
                setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
            }
        } catch {
            setStatus({ type: 'error', message: '⚠️ Failed to connect to the server. Please email us directly.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Hero */}
            <section className="page-hero">
                <div className="orb-1"></div><div className="orb-2"></div>
                <div className="container text-center animate-fade-in" style={{ position: 'relative', zIndex: 1 }}>
                    <p className="eyebrow">Let's Talk</p>
                    <h1 style={{ color: 'white' }}>Get in Touch With <span className="text-grad">an Expert</span></h1>
                    <p className="page-sub">Schedule a consultation to discuss how IPSOL Technologies can transform your business operations.</p>
                </div>
            </section>

            {/* Contact Body */}
            <section className="section">
                <div className="container contact-grid">

                    {/* Info Panel */}
                    <div className="info-panel">
                        <h2 className="info-heading">We'd Love to<br />Hear From You</h2>
                        <p className="text-muted info-intro">
                            Whether you're evaluating Business Central for the first time or looking for an expert partner to enhance your existing setup — we're ready to guide you.
                        </p>
                        <div className="info-cards">
                            {contactDetails.map((item, i) => (
                                <div key={i} className="info-card glass-card">
                                    <div className="info-icon">{item.icon}</div>
                                    <div>
                                        <p className="info-label">{item.label}</p>
                                        <p className="info-value">{item.value}</p>
                                        <p className="info-sub text-muted">{item.sub}</p>
                                    </div>
                                    <div className="card-glow"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form Panel */}
                    <div className="form-panel glass-card">
                        <h2 className="form-heading">Send Us a Message</h2>
                        <p className="text-muted form-sub">Fill in your details and we'll get back to you within 24 hours.</p>

                        {status.message && (
                            <div className={`alert alert-${status.type}`}>
                                {status.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label className="form-label">Full Name *</label>
                                <input type="text" name="name" className="form-input" required
                                    value={formData.name} onChange={handleChange} placeholder="John Doe" />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Work Email *</label>
                                    <input type="email" name="email" className="form-input" required
                                        value={formData.email} onChange={handleChange} placeholder="john@company.com" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Phone Number</label>
                                    <input type="tel" name="phone" className="form-input"
                                        value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Company Name</label>
                                <input type="text" name="company" className="form-input"
                                    value={formData.company} onChange={handleChange} placeholder="Your Enterprise LLC" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">How can we help you? *</label>
                                <textarea name="message" className="form-textarea" rows={5} required
                                    value={formData.message} onChange={handleChange}
                                    placeholder="Tell us about your ERP needs, challenges, or project scope...">
                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <><span className="spinner"></span> Sending...</>
                                ) : (
                                    'Schedule a Free Consultation →'
                                )}
                            </button>
                        </form>
                        <div className="card-glow"></div>
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
                .contact-grid {
                    display: grid; grid-template-columns: 1fr 1.3fr;
                    gap: 4rem; align-items: flex-start;
                }
                .info-heading { font-size: 2.25rem; line-height: 1.2; margin-bottom: 1rem; }
                .info-intro { font-size: 1.05rem; line-height: 1.8; margin-bottom: 2.5rem; }
                .info-cards { display: flex; flex-direction: column; gap: 1rem; }
                .glass-card {
                    background: var(--glass-bg);
                    backdrop-filter: blur(12px);
                    border: 1px solid var(--glass-border);
                    border-radius: var(--radius-md);
                    position: relative; overflow: hidden;
                    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .glass-card:hover { border-color: var(--color-secondary); }
                .glass-card:hover .card-glow { opacity: 1; }
                .card-glow {
                    position: absolute; inset: 0;
                    background: radial-gradient(ellipse at top, rgba(37,99,235,0.07) 0%, transparent 60%);
                    opacity: 0; transition: opacity 0.35s ease; pointer-events: none;
                }
                .info-card {
                    display: flex; align-items: flex-start;
                    gap: 1.25rem; padding: 1.5rem;
                }
                .info-icon { font-size: 1.75rem; flex-shrink: 0; }
                .info-label {
                    font-size: 0.8rem; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 0.08em;
                    color: var(--color-secondary); margin-bottom: 0.25rem;
                }
                .info-value { font-weight: 700; color: var(--color-primary); font-size: 1rem; margin-bottom: 0.25rem; }
                .info-sub { font-size: 0.85rem; margin: 0; }
                .form-panel { padding: 3rem; }
                .form-heading { font-size: 1.75rem; margin-bottom: 0.5rem; }
                .form-sub { margin-bottom: 2rem; }
                .contact-form .form-group { margin-bottom: 1.25rem; }
                .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
                .form-label {
                    display: block; font-weight: 600;
                    font-size: 0.875rem; color: var(--color-primary);
                    margin-bottom: 0.5rem;
                }
                .form-input, .form-textarea {
                    width: 100%; padding: 0.875rem 1rem;
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-sm);
                    font-family: inherit; font-size: 1rem;
                    background: var(--color-base);
                    color: var(--color-text);
                    transition: all 0.3s ease;
                }
                .form-input:focus, .form-textarea:focus {
                    outline: none;
                    border-color: var(--color-secondary);
                    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
                }
                .form-textarea { resize: vertical; }
                .submit-btn {
                    width: 100%; margin-top: 0.5rem;
                    padding: 1rem; font-size: 1rem;
                    display: flex; align-items: center; justify-content: center; gap: 0.5rem;
                }
                .spinner {
                    width: 16px; height: 16px;
                    border: 2px solid rgba(255,255,255,0.4);
                    border-top-color: white;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                    display: inline-block;
                }
                @keyframes spin { to { transform: rotate(360deg); } }
                .alert {
                    padding: 1rem 1.25rem;
                    border-radius: var(--radius-sm);
                    margin-bottom: 1.5rem;
                    font-weight: 500; font-size: 0.95rem;
                }
                .alert-success {
                    background: rgba(16,185,129,0.12);
                    color: #059669;
                    border: 1px solid rgba(16,185,129,0.3);
                }
                .alert-error {
                    background: rgba(239,68,68,0.1);
                    color: #dc2626;
                    border: 1px solid rgba(239,68,68,0.3);
                }
                @media (max-width: 992px) {
                    .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
                    .form-row { grid-template-columns: 1fr; }
                }
            `}</style>
        </>
    );
}
