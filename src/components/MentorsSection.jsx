import React, { useEffect, useState } from 'react';
import { courseApi } from '../api/courseApi';
import { Calendar } from 'lucide-react';

export const MentorsSection = ({ onBookMentor }) => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    courseApi.getMentors().then(res => {
      if (res.success) setMentors(res.data);
    });
  }, []);

  return (
    <section style={{ padding: '70px 0 80px', backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <div className="section-tag">MENTORS • 1:1 CALLS</div>
          <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', fontWeight: '800', color: 'var(--ink-primary)', letterSpacing: '-0.02em' }}>
            Get unstuck with 1:1 guidance
          </h2>
        </div>

        {/* 3 Mentors Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}
        >
          {mentors.map((mentor, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                padding: '20px 22px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
              }}
              className="mentor-card"
            >
              <img
                src={mentor.avatar}
                alt={mentor.name}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%)',
                  border: '1px solid var(--border-medium)'
                }}
              />

              <div style={{ flexGrow: 1 }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--ink-primary)', marginBottom: '2px' }}>
                  {mentor.name}
                </h3>
                <div style={{ fontSize: '11.5px', color: 'var(--ink-muted)', marginBottom: '6px' }}>
                  {mentor.role}
                </div>
                <button
                  onClick={() => onBookMentor(mentor)}
                  style={{
                    fontSize: '11.5px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-terracotta)',
                    fontWeight: '700'
                  }}
                  className="mentor-action-btn"
                >
                  {mentor.action} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .mentor-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-hover);
          border-color: var(--border-medium);
        }
        .mentor-action-btn:hover {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
};
