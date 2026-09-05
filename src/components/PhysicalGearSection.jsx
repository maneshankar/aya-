import React, { useEffect, useState } from 'react';
import { courseApi } from '../api/courseApi';

export const PhysicalGearSection = ({ onAddToCart }) => {
  const [gear, setGear] = useState([]);

  useEffect(() => {
    courseApi.getPhysicalGear().then(res => {
      if (res.success) setGear(res.data);
    });
  }, []);

  return (
    <section style={{ padding: '70px 0 80px', backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <div className="section-tag">SHOP • PHYSICAL GEAR</div>
          <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', fontWeight: '800', color: 'var(--ink-primary)', letterSpacing: '-0.02em' }}>
            Canvas, brushes, paint — the physical kit
          </h2>
        </div>

        {/* 3 Physical Gear Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {gear.map(item => (
            <div
              key={item.id}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
              }}
              className="gear-card"
            >
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '16/11',
                  backgroundColor: '#1E1E1E',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80';
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  className="gear-img"
                />
              </div>

              <div style={{ padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--ink-primary)', marginBottom: '3px' }}>
                    {item.title}
                  </h3>
                  <div style={{ fontSize: '12px', color: 'var(--ink-muted)' }}>
                    {item.subtitle}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '15px', fontWeight: '800', color: 'var(--ink-primary)' }}>
                    ${item.price}
                  </div>
                  <button
                    onClick={() => onAddToCart({ ...item, category: 'Physical Gear' })}
                    style={{
                      marginTop: '4px',
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-terracotta)',
                      fontWeight: '700'
                    }}
                  >
                    + Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gear-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
          border-color: var(--border-medium);
        }
        .gear-card:hover .gear-img {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
};
