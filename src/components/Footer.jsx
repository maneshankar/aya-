import React from 'react';
import { Logo } from './Logo';

export const Footer = ({ onNavigate }) => {
  const handleLink = (page, sectionId = null, e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(page, sectionId);
    }
  };

  return (
    <footer style={{ backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-light)', padding: '60px 0 32px' }}>
      <div className="container">
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '36px',
            marginBottom: '48px'
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '14px', cursor: 'pointer' }} onClick={(e) => handleLink('overview', null, e)}>
              <Logo size="lg" />
            </div>

            <p style={{ fontSize: '12.5px', color: 'var(--ink-secondary)', lineHeight: '1.55' }}>
              A dedicated academy for design disciplines, physical craft, and tactile art. London / SF / Zurich.
            </p>
          </div>

          {/* Academy Column */}
          <div>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
              ACADEMY
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px', color: 'var(--ink-secondary)' }}>
              <li><a href="#courses" onClick={(e) => handleLink('overview', 'courses', e)} className="footer-link">All Masterclasses</a></li>
              <li><a href="#courses" onClick={(e) => handleLink('overview', 'courses', e)} className="footer-link">Free Courses</a></li>
              <li><a href="#marketplace" onClick={(e) => handleLink('marketplace', null, e)} className="footer-link">Physical Kits</a></li>
              <li><a href="#overview" onClick={(e) => handleLink('overview', 'mentors', e)} className="footer-link">Mentorship</a></li>
            </ul>
          </div>

          {/* Marketplace Column */}
          <div>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
              MARKETPLACE
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px', color: 'var(--ink-secondary)' }}>
              <li><a href="#marketplace" onClick={(e) => handleLink('marketplace', null, e)} className="footer-link">Original Artworks</a></li>
              <li><a href="#marketplace" onClick={(e) => handleLink('marketplace', null, e)} className="footer-link">Prints & Editions</a></li>
              <li><a href="#marketplace" onClick={(e) => handleLink('marketplace', null, e)} className="footer-link">Artist Submissions</a></li>
            </ul>
          </div>

          {/* Account Column */}
          <div>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
              ACCOUNT
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px', color: 'var(--ink-secondary)' }}>
              <li><a href="#overview" onClick={(e) => handleLink('overview', 'courses', e)} className="footer-link">Sign In</a></li>
              <li><a href="#overview" onClick={(e) => handleLink('overview', 'courses', e)} className="footer-link">Sign Up</a></li>
              <li><a href="#overview" onClick={(e) => handleLink('overview', null, e)} className="footer-link">Student Portal</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border-light)',
            fontSize: '11.5px',
            color: 'var(--ink-muted)',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <div>
            © 2026 aya+, Inc. All rights reserved. Built for makers.
          </div>
          <div style={{ display: 'flex', gap: '18px' }}>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms</a>
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
