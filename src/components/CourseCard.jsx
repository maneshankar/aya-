import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

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
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--border-light)',
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all var(--transition-smooth)',
        position: 'relative'
      }}
      className="free-course-card"
      onClick={() => onViewDetails(course)}
    >
      {/* Visual Thumbnail */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '16/10',
          backgroundColor: '#16151A',
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
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          className="course-thumb"
        />

        {/* Floating Play Indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--ink-primary)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
          className="play-badge"
        >
          <Play size={14} fill="var(--ink-primary)" />
        </div>
      </div>

      {/* Course Info */}
      <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span
            style={{
              fontSize: '10px',
              fontFamily: 'var(--font-mono)',
              fontWeight: '700',
              color: 'var(--aurora-coral)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              backgroundColor: 'rgba(255, 90, 54, 0.08)',
              padding: '3px 8px',
              borderRadius: 'var(--radius-full)'
            }}
          >
            {course.badge || course.category}
          </span>

          <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)' }}>
            {course.modulesCount}
          </span>
        </div>

        <h3
          style={{
            fontSize: '16px',
            fontWeight: '800',
            color: 'var(--ink-primary)',
            lineHeight: '1.35',
            letterSpacing: '-0.02em',
            marginTop: '4px'
          }}
        >
          {course.title}
        </h3>

        <div style={{ fontSize: '13px', color: 'var(--ink-secondary)', marginTop: 'auto', paddingTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontWeight: '500' }}>By {course.instructor?.name || 'Master Artisan'}</span>
          <span style={{ fontWeight: '700', color: 'var(--ink-primary)' }}>Free</span>
        </div>
      </div>

      <style>{`
        .free-course-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 90, 54, 0.4);
          box-shadow: 0 16px 36px rgba(12, 12, 14, 0.09), 0 0 20px rgba(255, 90, 54, 0.1);
        }
        .free-course-card:hover .course-thumb {
          transform: scale(1.04);
        }
        .free-course-card:hover .play-badge {
          background-color: var(--ink-primary);
          color: #FFFFFF;
        }
        .free-course-card:hover .play-badge svg {
          fill: #FFFFFF !important;
        }
      `}</style>
    </div>
  );
};
