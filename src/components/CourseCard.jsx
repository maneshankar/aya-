import React, { useState } from 'react';

export const CourseCard = ({ course, onViewDetails }) => {
  const [imgSrc, setImgSrc] = useState(course.coverImage);

  const handleImageError = () => {
    if (course.fallbackSvg) {
      setImgSrc(`data:image/svg+xml;utf8,${encodeURIComponent(course.fallbackSvg)}`);
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
      }}
      className="free-course-card"
      onClick={() => onViewDetails(course)}
    >
      {/* Visual Thumbnail */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '16/10',
          backgroundColor: '#1E1E1E',
          overflow: 'hidden'
        }}
      >
        <img
          src={imgSrc}
          alt={course.title}
          onError={handleImageError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          className="course-thumb"
        />
      </div>

      {/* Course Info */}
      <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--accent-terracotta)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          {course.badge}
        </div>

        <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--ink-primary)', lineHeight: '1.35' }}>
          {course.title}
        </h3>

        <div style={{ fontSize: '12px', color: 'var(--ink-muted)', marginTop: '4px' }}>
          {course.modulesCount} • Free
        </div>
      </div>

      <style>{`
        .free-course-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
          border-color: var(--border-medium);
        }
        .free-course-card:hover .course-thumb {
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );
};
