import React, { useEffect, useState } from 'react';
import { courseApi } from '../api/courseApi';
import { ArrowRight } from 'lucide-react';

export const MentorsSection = ({ onBookMentor }) => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    courseApi.getMentors().then(res => {
      if (res.success) setMentors(res.data);
    });
  }, []);

  return (
    <section id="mentors" style={{ padding: '80px 0 90px', backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ marginBottom: '8px' }}>
            <span className="status-pill">
              <span className="status-dot" style={{ backgroundColor: 'var(--aurora-purple)' }} />
              <span>FACULTY & 1:1 CRITIQUES</span>
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: '800', color: 'var(--ink-primary)', letterSpacing: '-0.03em' }}>
            Get unstuck with 1:1 studio guidance
          </h2>
        </div>

        {/* 3 Mentors Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}
        >
          {mentors.map((mentor, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)',
                borderRadius: '20px',
                padding: '24px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--transition-smooth)'
              }}
              className="mentor-card"
            >
              <img
                src={mentor.avatar}
                alt={mentor.name}
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1px solid var(--border-medium)'
                }}
              />

              <div style={{ flexGrow: 1 }}>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--ink-primary)', marginBottom: '2px' }}>
                  {mentor.name}
                </h3>
                <div style={{ fontSize: '12px', color: 'var(--ink-secondary)', marginBottom: '8px' }}>
                  {mentor.role}
                </div>
                <button
                  onClick={() => onBookMentor(mentor)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '11.5px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--aurora-coral)',
                    fontWeight: '700'
                  }}
                  className="mentor-action-btn"
                >
                  <span>{mentor.action}</span>
                  <ArrowRight size={12} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .mentor-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(12, 12, 14, 0.08), 0 0 20px rgba(121, 71, 255, 0.08);
          border-color: rgba(121, 71, 255, 0.3);
        }
        .mentor-action-btn:hover {
          color: var(--ink-primary) !important;
        }
      `}</style>
    </section>
  );
};
