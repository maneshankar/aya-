import React, { useEffect, useState } from 'react';
import { courseApi } from '../api/courseApi';
import { MessageSquare, Users, Wrench } from 'lucide-react';

export const TrustTicker = () => {
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    courseApi.getTrustTickers().then(res => {
      if (res.success) setTickers(res.data);
    });
  }, []);

  const icons = [MessageSquare, Users, Wrench];

  return (
    <section style={{ borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', padding: '22px 0', backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {tickers.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ color: 'var(--accent-terracotta)', marginTop: '2px' }}>
                  <Icon size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink-primary)', marginBottom: '2px' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--ink-secondary)', lineHeight: '1.45' }}>
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
