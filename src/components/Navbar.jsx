import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = ({
  cartCount,
  onOpenCart,
  onSearchTrigger,
  currentPage = 'overview',
  onNavigate
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page, sectionId = null) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page, sectionId);
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'rgba(12, 12, 14, 0.06)' : 'transparent'}`,
        transition: 'all var(--transition-fast)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('overview');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Logo size="md" />
        </a>

        {/* Center Navigation Links */}
        <nav style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          <button
            onClick={() => handleNavClick('overview')}
            style={{
              fontSize: '13px',
              fontWeight: currentPage === 'overview' ? '700' : '500',
              color: currentPage === 'overview' ? 'var(--ink-primary)' : 'var(--ink-secondary)',
              letterSpacing: '-0.01em',
              position: 'relative',
              padding: '6px 0'
            }}
            className="nav-link"
          >
            Overview
            {currentPage === 'overview' && (
              <span
                style={{
                  position: 'absolute',
                  bottom: '0px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--ink-primary)',
                  borderRadius: '2px'
                }}
              />
            )}
          </button>

          <button
            onClick={() => handleNavClick('overview', 'courses')}
            style={{ fontSize: '13px', fontWeight: '500', color: 'var(--ink-secondary)', letterSpacing: '-0.01em' }}
            className="nav-link"
          >
            Courses
          </button>

          <button
            onClick={() => handleNavClick('marketplace')}
            style={{
              fontSize: '13px',
              fontWeight: currentPage === 'marketplace' ? '700' : '500',
              color: currentPage === 'marketplace' ? 'var(--ink-primary)' : 'var(--ink-secondary)',
              letterSpacing: '-0.01em',
              position: 'relative',
              padding: '6px 0'
            }}
            className="nav-link"
          >
            Marketplace
            {currentPage === 'marketplace' && (
              <span
                style={{
                  position: 'absolute',
                  bottom: '0px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--ink-primary)',
                  borderRadius: '2px'
                }}
              />
            )}
          </button>

          <button
            onClick={() => handleNavClick('overview', 'mentors')}
            style={{ fontSize: '13px', fontWeight: '500', color: 'var(--ink-secondary)', letterSpacing: '-0.01em' }}
            className="nav-link"
          >
            Mentors
          </button>

          <button
            onClick={() => handleNavClick('overview', 'articles')}
            style={{ fontSize: '13px', fontWeight: '500', color: 'var(--ink-secondary)', letterSpacing: '-0.01em' }}
            className="nav-link"
          >
            Journal
          </button>
        </nav>

        {/* Right Action: Search, Cart, Pill CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onSearchTrigger}
            aria-label="Search"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--bg-surface-subtle)',
              color: 'var(--ink-primary)'
            }}
          >
            <Search size={15} strokeWidth={2} />
          </button>

          <button
            onClick={onOpenCart}
            aria-label="View cart"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'var(--bg-surface-subtle)',
              color: 'var(--ink-primary)',
              padding: '8px 14px',
              borderRadius: 'var(--radius-full)',
              fontSize: '12px',
              fontWeight: '600'
            }}
          >
            <ShoppingBag size={14} />
            <span>Cart</span>
            {cartCount > 0 && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--aurora-pink)',
                  color: '#FFFFFF',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  fontSize: '10.5px',
                  fontWeight: '700'
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Pill Outline CTA with Arrow */}
          <button
            onClick={() => handleNavClick('overview', 'courses')}
            className="btn-pill-cta"
            id="nav-signup-btn"
            style={{ display: 'none' }}
          >
            <span>TRY IT FOR FREE</span>
            <ArrowRight size={13} strokeWidth={2.5} />
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px', color: 'var(--ink-primary)' }}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-light)',
            padding: '24px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <button
            onClick={() => handleNavClick('overview')}
            style={{
              textAlign: 'left',
              fontSize: '15px',
              fontWeight: currentPage === 'overview' ? '700' : '600',
              color: currentPage === 'overview' ? 'var(--aurora-coral)' : 'var(--ink-primary)',
              padding: '6px 0'
            }}
          >
            Overview
          </button>
          <button
            onClick={() => handleNavClick('overview', 'courses')}
            style={{ textAlign: 'left', fontSize: '15px', fontWeight: '600', padding: '6px 0' }}
          >
            Courses
          </button>
          <button
            onClick={() => handleNavClick('marketplace')}
            style={{
              textAlign: 'left',
              fontSize: '15px',
              fontWeight: currentPage === 'marketplace' ? '700' : '600',
              color: currentPage === 'marketplace' ? 'var(--aurora-coral)' : 'var(--ink-primary)',
              padding: '6px 0'
            }}
          >
            Marketplace
          </button>
          <button
            onClick={() => handleNavClick('overview', 'mentors')}
            style={{ textAlign: 'left', fontSize: '15px', fontWeight: '600', padding: '6px 0' }}
          >
            Mentors
          </button>
          <button
            onClick={() => handleNavClick('overview', 'articles')}
            style={{ textAlign: 'left', fontSize: '15px', fontWeight: '600', padding: '6px 0' }}
          >
            Journal
          </button>
          <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); handleNavClick('overview', 'courses'); }}
              className="btn-pill-cta"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>TRY IT FOR FREE</span>
              <ArrowRight size={13} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          #nav-signup-btn { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link:hover {
          color: var(--ink-primary) !important;
        }
      `}</style>
    </header>
  );
};
