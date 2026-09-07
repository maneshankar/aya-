import React, { useEffect, useState } from 'react';
import { courseApi } from '../api/courseApi';
import { MessageSquare, Users, Sparkles } from 'lucide-react';

export const TrustTicker = () => {
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    courseApi.getTrustTickers().then(res => {
      if (res.success) setTickers(res.data);
    });
  }, []);

  const icons = [Sparkles, Users, MessageSquare];
  const accentColors = ['var(--aurora-pink)', 'var(--aurora-coral)', 'var(--aurora-purple)'];

  return (
    <section style={{ borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', padding: '24px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px'
          }}
        >
          {tickers.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            const color = accentColors[idx % accentColors.length];
            return (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-surface-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: color,
                    flexShrink: 0
                  }}
                >
                  <Icon size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: '800', color: 'var(--ink-primary)', marginBottom: '2px', letterSpacing: '-0.01em' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '12.5px', color: 'var(--ink-secondary)', lineHeight: '1.45' }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
