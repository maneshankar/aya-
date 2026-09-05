import React from 'react';
import { Star, Clock, Users, ArrowUpRight, Bookmark, Check, Layers } from 'lucide-react';

export const CourseCard = ({
  course,
  onViewDetails,
  onQuickEnroll,
  isSaved,
  onToggleSave
}) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all var(--transition-fast)',
        position: 'relative'
      }}
      className="course-card"
    >
      {/* Top Banner / Graphic Header */}
      <div
        style={{
          position: 'relative',
          padding: '24px 20px',
          background: course.gradient || 'var(--bg-dark)',
          color: '#FFFFFF',
          minHeight: '130px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        {/* Top Badges & Bookmark */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(8px)',
              padding: '4px 10px',
              borderRadius: 'var(--radius-xs)',
              fontSize: '10.5px',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              fontWeight: '700',
              color: '#FFFFFF'
            }}
          >
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent-terracotta)' }}></span>
            {course.badge}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(course.id);
            }}
            aria-label={isSaved ? 'Remove from saved' : 'Save course'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: isSaved ? 'var(--accent-terracotta)' : 'rgba(0, 0, 0, 0.4)',
              color: '#FFFFFF',
              transition: 'transform 0.15s ease'
            }}
          >
            <Bookmark size={14} fill={isSaved ? '#FFFFFF' : 'none'} />
          </button>
        </div>

        {/* Level & Category Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.75)' }}>
            {course.category}
          </span>
          <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>•</span>
          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.75)' }}>
            {course.level}
          </span>
        </div>
      </div>

      {/* Course Body Content */}
      <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <div>
          {/* Title */}
          <h3
            style={{
              fontSize: '17px',
              fontWeight: '700',
              lineHeight: '1.35',
              letterSpacing: '-0.02em',
              color: 'var(--ink-primary)',
              marginBottom: '10px'
            }}
          >
            {course.title}
          </h3>

          {/* Tagline */}
          <p
            style={{
              fontSize: '13px',
              lineHeight: '1.55',
              color: 'var(--ink-secondary)',
              marginBottom: '20px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {course.tagline}
          </p>

          {/* Instructor & Meta */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              paddingBottom: '16px',
              borderBottom: '1px solid var(--border-light)',
              marginBottom: '16px'
            }}
          >
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1px solid var(--border-medium)'
              }}
            />
            <div style={{ flexGrow: 1, minWidth: 0 }}>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--ink-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {course.instructor.name}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--ink-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {course.instructor.role.split('at')[0]}
              </div>
            </div>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: '700' }}>
              <Star size={13} fill="#C8832B" color="#C8832B" />
              <span>{course.rating}</span>
            </div>
          </div>

          {/* Duration & Lessons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: 'var(--ink-secondary)', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Clock size={14} color="var(--ink-muted)" />
              <span>{course.duration}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Layers size={14} color="var(--ink-muted)" />
              <span>{course.totalLessons} Lessons</span>
            </div>
          </div>
        </div>

        {/* Bottom Actions Row */}
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div>
              <span style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', display: 'block' }}>COHORT PASS</span>
              <span style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--ink-primary)' }}>
                ${course.price}
              </span>
              <span style={{ fontSize: '13px', color: 'var(--ink-muted)', textDecoration: 'line-through', marginLeft: '6px' }}>
                ${course.originalPrice}
              </span>
            </div>

            <button
              onClick={() => onViewDetails(course)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '12px',
                fontWeight: '700',
                fontFamily: 'var(--font-mono)',
                color: 'var(--ink-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}
              className="syllabus-link"
            >
              <span>Syllabus</span>
              <ArrowUpRight size={13} />
            </button>
          </div>

          <button
            onClick={() => onQuickEnroll(course)}
            className="btn-primary"
            style={{ width: '100%', padding: '10px' }}
          >
            <span>Enroll in Cohort</span>
          </button>
        </div>
      </div>

      <style>{`
        .course-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
          border-color: var(--border-medium);
        }
        .syllabus-link:hover {
          color: var(--accent-terracotta) !important;
        }
      `}</style>
    </div>
  );
};
