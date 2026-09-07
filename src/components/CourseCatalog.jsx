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
    <section id="courses" style={{ padding: '80px 0 90px', backgroundColor: 'var(--bg-subtle)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
          <div>
            <div style={{ marginBottom: '8px' }}>
              <span className="status-pill">
                <span className="status-dot" style={{ backgroundColor: 'var(--aurora-coral)' }} />
                <span>OPEN CURRICULUM</span>
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: '800', color: 'var(--ink-primary)', letterSpacing: '-0.03em' }}>
              Masterclasses taught by industry artisans
            </h2>
          </div>

          <div>
            <button
              onClick={() => {
                const el = document.getElementById('courses');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-pill-cta"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <span>EXPLORE ALL COURSES</span>
              <ArrowRight size={13} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* 3 Course Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px'
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
    </section>
  );
};
