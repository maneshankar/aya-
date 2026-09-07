import React, { useEffect, useState } from 'react';
import { courseApi } from '../api/courseApi';
import { ArrowUpRight } from 'lucide-react';

export const ArticlesSection = ({ onSelectArticle }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    courseApi.getArticles().then(res => {
      if (res.success) setArticles(res.data);
    });
  }, []);

  return (
    <section id="articles" style={{ padding: '80px 0 90px', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ marginBottom: '8px' }}>
            <span className="status-pill">
              <span className="status-dot" style={{ backgroundColor: 'var(--aurora-pink)' }} />
              <span>OPEN ARCHIVE & JOURNAL</span>
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: '800', color: 'var(--ink-primary)', letterSpacing: '-0.03em' }}>
            Essays, references, and open-source assets
          </h2>
        </div>

        {/* 3 Articles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}
        >
          {articles.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)',
                borderRadius: '20px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '170px',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--transition-smooth)'
              }}
              className="article-card"
              onClick={() => onSelectArticle && onSelectArticle(item)}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: '700',
                    color: 'var(--aurora-coral)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    backgroundColor: 'rgba(255, 90, 54, 0.08)',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-full)',
                    marginBottom: '12px'
                  }}
                >
                  {item.tag}
                </span>

                <h3 style={{ fontSize: '15.5px', fontWeight: '800', color: 'var(--ink-primary)', lineHeight: '1.4', letterSpacing: '-0.02em' }}>
                  {item.title}
                </h3>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '14px', borderTop: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '12px', color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)' }}>
                  {item.readTime}
                </span>
                <ArrowUpRight size={15} color="var(--ink-secondary)" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .article-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(12, 12, 14, 0.08), 0 0 20px rgba(233, 59, 129, 0.08);
          border-color: rgba(233, 59, 129, 0.3);
        }
      `}</style>
    </section>
  );
};
