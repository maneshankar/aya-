import React, { useState, useEffect } from 'react';
import { X, Check, Clock, Layers, Star, Users, ChevronDown, ChevronUp, ShieldCheck, ArrowRight, Bookmark } from 'lucide-react';

export const CourseDetailModal = ({
  course,
  onClose,
  onEnroll,
  isSaved,
  onToggleSave
}) => {
  const [expandedModules, setExpandedModules] = useState({ 0: true });

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!course) return null;

  const toggleModule = (idx) => {
    setExpandedModules(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(18, 18, 18, 0.65)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'modalBackdropFade 0.2s ease-out'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderRadius: 'var(--radius-md)',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-drawer)',
          border: '1px solid var(--border-medium)',
          overflow: 'hidden',
          animation: 'modalContentZoom 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div
          style={{
            padding: '24px 28px',
            borderBottom: '1px solid var(--border-light)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'var(--bg-surface)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                backgroundColor: 'var(--bg-surface-subtle)',
                color: 'var(--ink-secondary)',
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                fontWeight: '700',
                textTransform: 'uppercase'
              }}
            >
              {course.category}
            </span>
            <span style={{ fontSize: '12px', color: 'var(--ink-muted)' }}>•</span>
            <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--accent-terracotta)', fontWeight: '700' }}>
              {course.badge}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => onToggleSave(course.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: isSaved ? 'var(--accent-terracotta)' : 'var(--bg-surface-subtle)',
                color: isSaved ? '#FFFFFF' : 'var(--ink-primary)',
                fontSize: '12px',
                fontWeight: '600'
              }}
            >
              <Bookmark size={13} fill={isSaved ? '#FFFFFF' : 'none'} />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={onClose}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--bg-surface-subtle)',
                color: 'var(--ink-primary)'
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div style={{ padding: '28px', overflowY: 'auto', flexGrow: 1 }}>
          {/* Main Title & Tagline */}
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
              fontWeight: '800',
              lineHeight: '1.2',
              letterSpacing: '-0.03em',
              color: 'var(--ink-primary)',
              marginBottom: '12px'
            }}
          >
            {course.title}
          </h2>

          <p style={{ fontSize: '14.5px', lineHeight: '1.6', color: 'var(--ink-secondary)', marginBottom: '24px' }}>
            {course.tagline}
          </p>

          {/* Quick Metrics Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '14px',
              padding: '16px 20px',
              backgroundColor: 'var(--bg-surface-subtle)',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '28px'
            }}
          >
            <div>
              <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                LEVEL
              </div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink-primary)' }}>
                {course.level}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                DURATION
              </div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink-primary)' }}>
                {course.duration}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                CURRICULUM
              </div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink-primary)' }}>
                {course.totalLessons} Deep Lessons
              </div>
            </div>

            <div>
              <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                RATING
              </div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Star size={13} fill="#C8832B" color="#C8832B" />
                <span>{course.rating} ({course.reviewsCount})</span>
              </div>
            </div>
          </div>

          {/* Instructor Profile Card */}
          <div
            style={{
              padding: '20px',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              gap: '18px',
              alignItems: 'center',
              marginBottom: '28px'
            }}
          >
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid var(--border-medium)'
              }}
            />
            <div>
              <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--accent-terracotta)', fontWeight: '700', textTransform: 'uppercase' }}>
                INSTRUCTOR & LEAD PRACTITIONER
              </div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--ink-primary)', margin: '2px 0 4px' }}>
                {course.instructor.name}
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--ink-secondary)', lineHeight: '1.45' }}>
                {course.instructor.bio}
              </div>
            </div>
          </div>

          {/* Key Deliverables & Highlights */}
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: '700', fontFamily: 'var(--font-mono)', color: 'var(--ink-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '14px' }}>
              What You Will Build & Master
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
              {course.highlights?.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{ color: 'var(--accent-terracotta)', marginTop: '2px' }}>
                    <Check size={16} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: '13px', color: 'var(--ink-secondary)', lineHeight: '1.5' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Syllabus Accordion */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', fontFamily: 'var(--font-mono)', color: 'var(--ink-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Interactive Syllabus & Modules ({course.syllabus?.length || 0} Modules)
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {course.syllabus?.map((mod, idx) => {
                const isExpanded = !!expandedModules[idx];
                return (
                  <div
                    key={idx}
                    style={{
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden'
                    }}
                  >
                    <button
                      onClick={() => toggleModule(idx)}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        backgroundColor: isExpanded ? 'var(--bg-surface-subtle)' : 'var(--bg-surface)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: 'left',
                        transition: 'background-color var(--transition-fast)'
                      }}
                    >
                      <span style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--ink-primary)' }}>
                        {mod.title}
                      </span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {isExpanded && (
                      <div style={{ padding: '14px 18px', backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-light)' }}>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          {mod.lessons.map((lesson, lIdx) => (
                            <li key={lIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12.5px', color: 'var(--ink-secondary)' }}>
                              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--accent-terracotta)' }}></span>
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Sticky Bottom Action Footer */}
        <div
          style={{
            padding: '20px 28px',
            borderTop: '1px solid var(--border-light)',
            backgroundColor: 'var(--bg-surface)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div>
            <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
              ALL-INCLUSIVE COHORT ENROLLMENT
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontSize: '24px', fontWeight: '800', color: 'var(--ink-primary)' }}>
                ${course.price}
              </span>
              <span style={{ fontSize: '14px', color: 'var(--ink-muted)', textDecoration: 'line-through' }}>
                ${course.originalPrice}
              </span>
              <span style={{ fontSize: '11px', color: 'var(--accent-green)', fontWeight: '700' }}>
                Save ${course.originalPrice - course.price}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => {
                onClose();
                onEnroll(course);
              }}
              className="btn-primary"
              style={{ padding: '12px 28px', fontSize: '14px' }}
            >
              <span>Enroll in Masterclass</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
