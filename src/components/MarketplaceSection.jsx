import React, { useEffect, useState } from 'react';
import { courseApi } from '../api/courseApi';
import { ArrowRight } from 'lucide-react';

export const MarketplaceSection = ({ onAddToCart }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    courseApi.getMarketplaceItems().then(res => {
      if (res.success) setItems(res.data);
    });
  }, []);

  return (
    <section id="marketplace" style={{ padding: '70px 0 80px', backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
          <div>
            <div className="section-tag">MARKETPLACE</div>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', fontWeight: '800', color: 'var(--ink-primary)', letterSpacing: '-0.02em' }}>
              Original work, straight from the artist
            </h2>
          </div>

          <div>
            <a
              href="#marketplace"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--ink-primary)',
                fontWeight: '700'
              }}
              className="explore-link"
            >
              <span>Explore the Marketplace</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* 3 Artwork Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {items.map(item => (
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
              className="marketplace-card"
            >
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '4/4.5',
                  backgroundColor: '#1E1E1E',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80';
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  className="art-img"
                />
              </div>

              <div style={{ padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--ink-primary)', marginBottom: '3px' }}>
                    {item.title}
                  </h3>
                  <div style={{ fontSize: '12px', color: 'var(--ink-muted)' }}>
                    {item.medium}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '15px', fontWeight: '800', color: 'var(--ink-primary)' }}>
                    ${item.price}
                  </div>
                  <button
                    onClick={() => onAddToCart({ ...item, category: 'Marketplace Original' })}
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
        .marketplace-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
          border-color: var(--border-medium);
        }
        .marketplace-card:hover .art-img {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
};
