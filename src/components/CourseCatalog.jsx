import React, { useState, useEffect } from 'react';
import { CourseCard } from './CourseCard';
import { courseApi } from '../api/courseApi';
import { ArrowRight } from 'lucide-react';

export const CourseCatalog = ({ onSelectCourse, onEnroll }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    courseApi.getCourses().then(res => {
      if (res.success) setCourses(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <section id="courses" style={{ padding: '60px 0 80px', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Header matching image */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
          <div>
            <div className="section-tag">COURSES</div>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', fontWeight: '800', color: 'var(--ink-primary)', letterSpacing: '-0.02em' }}>
              Free courses from people who make this for a living
            </h2>
          </div>

          <div>
            <a
              href="#courses"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--ink-primary)',
                fontWeight: '700'
              }}
              className="explore-link"
            >
              <span>Explore all courses</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* 3 Course Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {courses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onViewDetails={onSelectCourse}
              onEnroll={onEnroll}
            />
          ))}
        </div>
      </div>

      <style>{`
        .explore-link:hover {
          color: var(--accent-terracotta) !important;
        }
      `}</style>
    </section>
  );
};
