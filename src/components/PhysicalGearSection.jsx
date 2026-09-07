import React, { useEffect, useState } from 'react';
import { courseApi } from '../api/courseApi';
import { Plus, Check } from 'lucide-react';

export const PhysicalGearSection = ({ onAddToCart }) => {
  const [gear, setGear] = useState([]);
  const [addedIds, setAddedIds] = useState({});

  useEffect(() => {
    courseApi.getPhysicalGear().then(res => {
      if (res.success) setGear(res.data);
    });
  }, []);

  const handleAdd = (item) => {
    onAddToCart({ ...item, category: 'Physical Gear' });
    setAddedIds(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [item.id]: false }));
    }, 1800);
  };

  return (
    <section style={{ padding: '80px 0 90px', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ marginBottom: '8px' }}>
            <span className="status-pill">
              <span className="status-dot" style={{ backgroundColor: 'var(--aurora-amber)' }} />
              <span>STUDIO ATELIER GEAR</span>
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: '800', color: 'var(--ink-primary)', letterSpacing: '-0.03em' }}>
            Canvas, archival pigments, and tactile kits
          </h2>
        </div>

        {/* 3 Physical Gear Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px'
          }}
        >
          {gear.map(item => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)',
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--transition-smooth)'
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
                    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="gear-img"
                />
              </div>

              <div style={{ padding: '20px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '15.5px', fontWeight: '800', color: 'var(--ink-primary)', marginBottom: '3px' }}>
                    {item.title}
                  </h3>
                  <div style={{ fontSize: '12.5px', color: 'var(--ink-secondary)' }}>
                    {item.subtitle}
                  </div>
                </div>

                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <div style={{ fontSize: '16px', fontWeight: '800', color: 'var(--ink-primary)' }}>
                    ${item.price}
                  </div>
                  <button
                    onClick={() => handleAdd(item)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: addedIds[item.id] ? 'var(--accent-green)' : 'var(--ink-primary)',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: '700'
                    }}
                  >
                    {addedIds[item.id] ? <Check size={11} /> : <Plus size={11} />}
                    <span>{addedIds[item.id] ? 'Added' : 'Add'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gear-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(12, 12, 14, 0.09), 0 0 20px rgba(255, 171, 46, 0.1);
          border-color: rgba(255, 171, 46, 0.4);
        }
        .gear-card:hover .gear-img {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
};
