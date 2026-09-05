import React, { useState, useEffect } from 'react';
import { CourseCard } from './CourseCard';
import { courseApi } from '../api/courseApi';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';

export const CourseCatalog = ({
  onSelectCourse,
  onEnroll,
  wishlist,
  onToggleWishlist,
  searchQuery,
  setSearchQuery,
  searchInputRef
}) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOption, setSortOption] = useState('featured');
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories on mount
  useEffect(() => {
    courseApi.getCategories().then(res => {
      if (res.success) setCategories(res.data);
    });
  }, []);

  // Fetch filtered courses when activeCategory, searchQuery, or sortOption changes
  useEffect(() => {
    setLoading(true);
    courseApi
      .getCourses({
        category: activeCategory,
        query: searchQuery,
        sort: sortOption
      })
      .then(res => {
        if (res.success) setCourses(res.data);
        setLoading(false);
      });
  }, [activeCategory, searchQuery, sortOption]);

  return (
    <section id="masterclasses" style={{ padding: '80px 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Section Tag & Heading */}
        <div style={{ marginBottom: '32px' }}>
          <div className="section-tag">CURATED CURRICULUM</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h2 className="section-title-large">
                Selected <span className="italic-serif">Masterclasses</span>.
              </h2>
              <p style={{ fontSize: '13.5px', color: 'var(--ink-secondary)', marginTop: '8px' }}>
                Experience next-generation visual craft and high performance engineering systems.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Controls Row: Category Pills + Search + Sort */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            marginBottom: '40px',
            paddingBottom: '24px',
            borderBottom: '1px solid var(--border-light)'
          }}
        >
          {/* Top Row: Category Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`btn-pill ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Bottom Row: Search Input & Sort Selector */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
            {/* Search Box */}
            <div
              style={{
                position: 'relative',
                flexGrow: 1,
                maxWidth: '420px',
                minWidth: '240px'
              }}
            >
              <Search
                size={16}
                color="var(--ink-muted)"
                style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
              />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search by topic, keyword, or instructor..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 40px',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: '13px',
                  fontFamily: 'inherit',
                  color: 'var(--ink-primary)',
                  outline: 'none',
                  transition: 'border-color var(--transition-fast)'
                }}
                className="search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '12px',
                    color: 'var(--ink-muted)'
                  }}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                Sort:
              </span>
              <select
                value={sortOption}
                onChange={e => setSortOption(e.target.value)}
                style={{
                  padding: '8px 12px',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: '12.5px',
                  fontFamily: 'inherit',
                  color: 'var(--ink-primary)',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                <option value="featured">Flagship First</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Course Grid or Skeletons or Empty State */}
        {loading ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '28px'
            }}
          >
            {[1, 2, 3, 4, 5, 6].map(n => (
              <div
                key={n}
                style={{
                  height: '460px',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div className="skeleton" style={{ height: '120px', width: '100%' }} />
                <div className="skeleton" style={{ height: '24px', width: '80%' }} />
                <div className="skeleton" style={{ height: '16px', width: '100%' }} />
                <div className="skeleton" style={{ height: '16px', width: '60%' }} />
                <div className="skeleton" style={{ marginTop: 'auto', height: '40px', width: '100%' }} />
              </div>
            ))}
          </div>
        ) : courses.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '28px'
            }}
          >
            {courses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                onViewDetails={onSelectCourse}
                onQuickEnroll={onEnroll}
                isSaved={wishlist.includes(course.id)}
                onToggleSave={onToggleWishlist}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              padding: '60px 20px',
              textAlign: 'center',
              backgroundColor: 'var(--bg-surface)',
              border: '1px dashed var(--border-medium)',
              borderRadius: 'var(--radius-sm)'
            }}
          >
            <Sparkles size={32} color="var(--accent-terracotta)" style={{ margin: '0 auto 12px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--ink-primary)', marginBottom: '6px' }}>
              No masterclasses found matching "{searchQuery}"
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--ink-secondary)', marginBottom: '18px' }}>
              Try adjusting your category filter or search keywords.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="btn-secondary"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      <style>{`
        .search-input:focus {
          border-color: var(--ink-primary) !important;
          background-color: #FFFFFF !important;
        }
      `}</style>
    </section>
  );
};
