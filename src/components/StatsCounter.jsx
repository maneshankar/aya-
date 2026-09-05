import React, { useEffect, useState } from 'react';
import { courseApi } from '../api/courseApi';

export const StatsCounter = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    courseApi.getStats().then(res => {
      if (res.success) setStats(res.data);
    });
  }, []);

  return (
    <section id="outcomes" style={{ padding: '80px 0 90px', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
          <div>
            <div className="section-tag">BY THE NUMBERS</div>
            <h2 className="section-title-large">
              Rigorous craft validated through <span className="italic-serif">verifiable outcomes</span>.
            </h2>
          </div>
          <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Audited annual alumni performance metrics
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px'
          }}
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                padding: '32px 26px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '210px',
                transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
              }}
              className="stat-card"
            >
              {/* Top Accent Line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  backgroundColor: idx === 0 ? 'var(--accent-terracotta)' : 'transparent',
                  borderTopLeftRadius: 'var(--radius-sm)',
                  borderTopRightRadius: 'var(--radius-sm)'
                }}
              />

              <div>
                <div
                  style={{
                    fontSize: 'clamp(2.4rem, 3.5vw, 3.2rem)',
                    fontWeight: '800',
                    letterSpacing: '-0.04em',
                    lineHeight: '1',
                    color: 'var(--ink-primary)',
                    marginBottom: '10px'
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: '700',
                    color: 'var(--accent-terracotta)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '12px'
                  }}
                >
                  {item.label}
                </div>
              </div>

              <p style={{ fontSize: '12.5px', color: 'var(--ink-secondary)', lineHeight: '1.5', margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stat-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
          border-color: var(--border-medium);
        }
      `}</style>
    </section>
  );
};
