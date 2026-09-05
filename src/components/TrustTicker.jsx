import React, { useEffect, useState } from 'react';
import { courseApi } from '../api/courseApi';

export const TrustTicker = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    courseApi.getTrustPartners().then(res => {
      if (res.success) setPartners(res.data);
    });
  }, []);

  return (
    <section style={{ borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', padding: '24px 0', backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
              TRUSTED BY LEADERS ACROSS MODERN TECH, DESIGN STUDIOS & ENTERPRISE FOUNDRIES
            </div>
            <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)' }}>
              100+ Production Blueprints Shipped
            </div>
          </div>

          {/* Logos Row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '24px',
              paddingTop: '6px'
            }}
          >
            {partners.map((p, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '0.06em',
                  color: 'var(--ink-secondary)',
                  opacity: 0.85,
                  transition: 'opacity var(--transition-fast)'
                }}
                className="partner-logo"
              >
                <span>{p.name}</span>
                <span style={{ fontSize: '10px', color: 'var(--accent-terracotta)', fontWeight: '600', fontFamily: 'var(--font-mono)' }}>•</span>
                <span style={{ fontSize: '11px', color: 'var(--ink-muted)', fontWeight: '500' }}>{p.metric}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .partner-logo:hover {
          opacity: 1 !important;
          color: var(--ink-primary) !important;
        }
      `}</style>
    </section>
  );
};
