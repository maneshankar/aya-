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
    <section id="journal" style={{ padding: '70px 0 80px', backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <div className="section-tag">FREE ACCESS • OPEN SOURCE</div>
          <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', fontWeight: '800', color: 'var(--ink-primary)', letterSpacing: '-0.02em' }}>
            Articles, references and copyright-free assets
          </h2>
        </div>

        {/* 3 Articles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}
        >
          {articles.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                padding: '24px 22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '150px',
                cursor: 'pointer',
                transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
              }}
              className="article-card"
              onClick={() => onSelectArticle && onSelectArticle(item)}
            >
              <div>
                <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--accent-terracotta)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                  {item.tag}
                </div>

                <h3 style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--ink-primary)', lineHeight: '1.4' }}>
                  {item.title}
                </h3>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '11.5px', color: 'var(--ink-muted)' }}>
                  {item.readTime}
                </span>
                <ArrowUpRight size={14} color="var(--ink-muted)" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .article-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-hover);
          border-color: var(--border-medium);
        }
      `}</style>
    </section>
  );
};
