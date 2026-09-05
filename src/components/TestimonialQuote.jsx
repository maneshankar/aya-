import React, { useEffect, useState } from 'react';
import { courseApi } from '../api/courseApi';

export const TestimonialQuote = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    courseApi.getTestimonial().then(res => {
      if (res.success) setData(res.data);
    });
  }, []);

  if (!data) return null;

  return (
    <section style={{ padding: '80px 0 90px', backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '880px' }}>
        {/* Quote symbol */}
        <div
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '44px',
            color: 'var(--accent-terracotta)',
            lineHeight: 1,
            marginBottom: '16px'
          }}
        >
          “
        </div>

        {/* Big Italic Serif Quote */}
        <blockquote
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.5rem, 2.6vw, 2.3rem)',
            lineHeight: '1.35',
            color: 'var(--ink-primary)',
            fontWeight: '400',
            marginBottom: '32px'
          }}
        >
          {data.quote}
        </blockquote>

        {/* Author Avatar & Credential */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', textAlign: 'left' }}>
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=140&q=80"
            alt={data.author}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid var(--border-medium)',
              filter: 'grayscale(100%)'
            }}
          />
          <div>
            <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--ink-primary)' }}>
              {data.author}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--ink-secondary)' }}>
              {data.role}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
