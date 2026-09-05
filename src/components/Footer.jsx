import React, { useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';

export const Footer = ({ onCategoryClick }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer style={{ backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-light)', padding: '70px 0 36px' }}>
      <div className="container">
        {/* Top 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}
        >
          {/* Brand & Manifesto Column */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', fontWeight: '800', letterSpacing: '-0.03em', color: 'var(--ink-primary)', marginBottom: '16px' }}>
              <span style={{ color: 'var(--accent-terracotta)', fontSize: '20px' }}>●</span>
              <span>atelier</span>
            </div>

            <p style={{ fontSize: '12.5px', color: 'var(--ink-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
              A boutique academy for engineering craft, design systems, and autonomous AI systems. Based in San Francisco & London, operating globally.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '11.5px', color: 'var(--accent-green)', fontWeight: '600', fontFamily: 'var(--font-mono)' }}>
              <span className="status-dot green"></span>
              <span>All cohorts operational & active</span>
            </div>
          </div>

          {/* Disciplines Column */}
          <div>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              DISCIPLINES
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--ink-secondary)' }}>
              <li><a href="#masterclasses" className="footer-link">Design Token Architecture</a></li>
              <li><a href="#masterclasses" className="footer-link">Autonomous AI Agents</a></li>
              <li><a href="#masterclasses" className="footer-link">Sub-50ms Web Systems</a></li>
              <li><a href="#masterclasses" className="footer-link">Category Creation Strategy</a></li>
              <li><a href="#masterclasses" className="footer-link">Figma to React Pipelines</a></li>
            </ul>
          </div>

          {/* Academy Info Column */}
          <div>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              ACADEMY
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--ink-secondary)' }}>
              <li><a href="#masterclasses" className="footer-link">Current Cohorts</a></li>
              <li><a href="#methodology" className="footer-link">Curriculum Standards</a></li>
              <li><a href="#outcomes" className="footer-link">Alumni Verification</a></li>
              <li><a href="#capabilities" className="footer-link">Instructor Roster</a></li>
              <li><a href="#faq" className="footer-link">Enterprise Teams</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              ATELIER DISPATCH
            </div>
            <p style={{ fontSize: '12.5px', color: 'var(--ink-secondary)', lineHeight: '1.5', marginBottom: '14px' }}>
              Bi-weekly technical breakdowns, repo templates, and guest masterclass invites.
            </p>

            {subscribed ? (
              <div style={{ fontSize: '12px', color: 'var(--accent-green)', fontWeight: '600' }}>
                ✓ Subscribed. Check your inbox soon.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '6px' }}>
                <input
                  type="email"
                  required
                  placeholder="Enter email..."
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-xs)',
                    fontSize: '12px',
                    flexGrow: 1,
                    minWidth: 0
                  }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '8px 14px' }}>
                  <Send size={13} />
                </button>
              </form>
            )}

            <div style={{ marginTop: '16px', fontSize: '11.5px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)' }}>
              admissions@atelier.design
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '28px',
            borderTop: '1px solid var(--border-light)',
            fontSize: '11.5px',
            color: 'var(--ink-muted)',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <div>
            © 2026 Atelier Academy, Inc. All rights reserved. Crafted with precision.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Code of Conduct</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--ink-primary) !important;
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
};
