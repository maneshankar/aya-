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
        backgroundColor: 'rgba(12, 12, 14, 0.75)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '28px',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
          border: '1px solid var(--border-light)',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div
          style={{
            padding: '22px 28px',
            borderBottom: '1px solid var(--border-light)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FFFFFF'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="status-pill">
              <span className="status-dot" style={{ backgroundColor: 'var(--aurora-coral)' }} />
              <span>{course.category}</span>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => onToggleSave(course.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: isSaved ? 'var(--ink-primary)' : 'var(--bg-surface-subtle)',
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
                width: '34px',
                height: '34px',
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
        <div style={{ padding: '32px 28px', overflowY: 'auto', flexGrow: 1 }}>
          {/* Main Title & Tagline */}
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)',
              fontWeight: '800',
              lineHeight: '1.15',
              letterSpacing: '-0.03em',
              color: 'var(--ink-primary)',
              marginBottom: '12px'
            }}
          >
            {course.title}
          </h2>

          <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'var(--ink-secondary)', marginBottom: '24px' }}>
            {course.tagline}
          </p>

          {/* Quick Metrics Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '14px',
              padding: '16px 22px',
              backgroundColor: 'var(--bg-surface-subtle)',
              borderRadius: '16px',
              marginBottom: '28px'
            }}
          >
            <div>
              <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                LEVEL
              </div>
              <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--ink-primary)' }}>
                {course.level}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                DURATION
              </div>
              <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--ink-primary)' }}>
                {course.duration}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                COHORT
              </div>
              <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--ink-primary)' }}>
                {course.cohort}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                RATING
              </div>
              <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--ink-primary)' }}>
                ★ {course.rating} ({course.enrolledCount})
              </div>
            </div>
          </div>

          {/* Instructor Bio */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 20px',
              border: '1px solid var(--border-light)',
              borderRadius: '16px',
              marginBottom: '32px'
            }}
          >
            <img
              src={course.instructor?.avatar}
              alt={course.instructor?.name}
              style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <div>
              <div style={{ fontSize: '14px', fontWeight: '800', color: 'var(--ink-primary)' }}>
                {course.instructor?.name}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--ink-secondary)' }}>
                {course.instructor?.role}
              </div>
            </div>
          </div>

          {/* Syllabus Section */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '16px' }}>
              Masterclass Curriculum
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {course.syllabus?.map((mod, idx) => {
                const isOpen = expandedModules[idx];
                return (
                  <div
                    key={idx}
                    style={{
                      border: '1px solid var(--border-light)',
                      borderRadius: '14px',
                      overflow: 'hidden'
                    }}
                  >
                    <button
                      onClick={() => toggleModule(idx)}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: isOpen ? 'var(--bg-surface-subtle)' : '#FFFFFF'
                      }}
                    >
                      <span style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--ink-primary)' }}>
                        Module {mod.module}: {mod.title}
                      </span>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {isOpen && (
                      <div style={{ padding: '14px 18px', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {mod.lessons?.map((lesson, lIdx) => (
                            <li key={lIdx} style={{ fontSize: '12.5px', color: 'var(--ink-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--aurora-coral)' }} />
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

        {/* Modal Bottom Action Bar */}
        <div
          style={{
            padding: '20px 28px',
            borderTop: '1px solid var(--border-light)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FFFFFF'
          }}
        >
          <div>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)' }}>TUITION</div>
            <div style={{ fontSize: '22px', fontWeight: '800', color: 'var(--ink-primary)', fontFamily: 'var(--font-mono)' }}>
              ${course.price}
            </div>
          </div>

          <button
            onClick={() => {
              onEnroll(course);
              onClose();
            }}
            className="btn-pill-solid"
            style={{ padding: '12px 28px' }}
          >
            <span>ENROLL IN MASTERCLASS</span>
            <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};
