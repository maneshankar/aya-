import React, { useState, useEffect } from 'react';
import { courseApi } from '../api/courseApi';
import { Plus, Minus } from 'lucide-react';

export const FaqSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    courseApi.getFaq().then(res => {
      if (res.success) setFaqs(res.data);
    });
  }, []);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '80px 0 90px', backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="section-title-large">
            Everything you need to know about <span className="italic-serif">aya+ Cohorts</span>.
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--ink-primary)' }}>
                    {item.question}
                  </span>
                  <span style={{ color: 'var(--accent-terracotta)', display: 'flex', alignItems: 'center' }}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 20px',
                      fontSize: '13.5px',
                      color: 'var(--ink-secondary)',
                      lineHeight: '1.6',
                      animation: 'fadeIn 0.2s ease-out'
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
