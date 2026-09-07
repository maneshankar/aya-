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
    <footer style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)', padding: '70px 0 36px' }}>
      <div className="container">
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '56px'
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', cursor: 'pointer' }} onClick={(e) => handleLink('overview', null, e)}>
              <Logo size="lg" />
            </div>

            <p style={{ fontSize: '13px', color: 'var(--ink-secondary)', lineHeight: '1.6' }}>
              A dedicated academy and marketplace for design disciplines, physical craft, and tactile art. London / San Francisco / Zurich.
            </p>
          </div>

          {/* Academy Column */}
          <div>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              ACADEMY
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--ink-secondary)' }}>
              <li><a href="#courses" onClick={(e) => handleLink('overview', 'courses', e)} className="footer-link">All Masterclasses</a></li>
              <li><a href="#courses" onClick={(e) => handleLink('overview', 'courses', e)} className="footer-link">Open Curriculum</a></li>
              <li><a href="#marketplace" onClick={(e) => handleLink('marketplace', null, e)} className="footer-link">Physical Studio Kits</a></li>
              <li><a href="#overview" onClick={(e) => handleLink('overview', 'mentors', e)} className="footer-link">1:1 Mentorship</a></li>
            </ul>
          </div>

          {/* Marketplace Column */}
          <div>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              MARKETPLACE
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--ink-secondary)' }}>
              <li><a href="#marketplace" onClick={(e) => handleLink('marketplace', null, e)} className="footer-link">Original Artworks</a></li>
              <li><a href="#marketplace" onClick={(e) => handleLink('marketplace', null, e)} className="footer-link">Prints & Editions</a></li>
              <li><a href="#marketplace" onClick={(e) => handleLink('marketplace', null, e)} className="footer-link">Artist Submissions</a></li>
              <li><a href="#marketplace" onClick={(e) => handleLink('marketplace', null, e)} className="footer-link">Provenance Guarantee</a></li>
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              CONNECT
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--ink-secondary)' }}>
              <li><a href="#articles" onClick={(e) => handleLink('overview', 'articles', e)} className="footer-link">Journal & Essays</a></li>
              <li><a href="#courses" onClick={(e) => handleLink('overview', 'courses', e)} className="footer-link">Student Portal</a></li>
              <li><a href="#overview" onClick={(e) => handleLink('overview', null, e)} className="footer-link">Live Studio Hours</a></li>
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
            gap: '16px',
            paddingTop: '28px',
            borderTop: '1px solid var(--border-light)',
            fontSize: '12px',
            color: 'var(--ink-muted)',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <div>
            © 2026 aya+, Inc. All rights reserved. Built for makers.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--ink-primary) !important;
        }
      `}</style>
    </footer>
  );
};
