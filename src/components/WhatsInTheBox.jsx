import React, { useEffect, useState } from 'react';
import { courseApi } from '../api/courseApi';
import { Compass, Layers, Package, Check } from 'lucide-react';

export const WhatsInTheBox = () => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    courseApi.getWhatsInTheBox().then(res => {
      if (res.success) setBoxes(res.data);
    });
  }, []);

  const icons = [Compass, Layers, Package];

  return (
    <section style={{ padding: '60px 0 70px', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '-0.03em', color: 'var(--ink-primary)' }}>
            What's in the box
          </h2>
        </div>

        {/* 3 Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {boxes.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '30px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px'
                }}
              >
                {/* Icon Box */}
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'var(--bg-surface-subtle)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--ink-primary)'
                  }}
                >
                  <Icon size={18} />
                </div>

                {/* Card Title */}
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--ink-primary)' }}>
                  {item.title}
                </h3>

                {/* Points List */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {item.points.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '12.5px',
                        color: 'var(--ink-secondary)',
                        lineHeight: '1.45'
                      }}
                    >
                      <span style={{ color: 'var(--accent-terracotta)', marginTop: '2px' }}>
                        <Check size={14} strokeWidth={2.5} />
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
