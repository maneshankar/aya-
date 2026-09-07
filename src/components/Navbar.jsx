import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
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
        backgroundColor: scrolled ? 'rgba(248, 246, 240, 0.95)' : 'var(--bg-main)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--border-light)' : 'transparent'}`,
        transition: 'all var(--transition-fast)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
        {/* Brand Logo aya+ */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('overview');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', gap: '28px', alignItems: 'center' }} className="desktop-nav">
          <button
            onClick={() => handleNavClick('overview')}
            style={{
              fontSize: '13.5px',
              fontWeight: currentPage === 'overview' ? '700' : '500',
              color: currentPage === 'overview' ? 'var(--ink-primary)' : 'var(--ink-secondary)',
              position: 'relative'
            }}
            className="nav-link"
          >
            Overview
            {currentPage === 'overview' && (
              <span
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--accent-terracotta)',
                  borderRadius: '1px'
                }}
              />
            )}
          </button>

          <button
            onClick={() => handleNavClick('marketplace')}
            style={{
              fontSize: '13.5px',
              fontWeight: currentPage === 'marketplace' ? '700' : '500',
              color: currentPage === 'marketplace' ? 'var(--ink-primary)' : 'var(--ink-secondary)',
              position: 'relative'
            }}
            className="nav-link"
          >
            Marketplace
            {currentPage === 'marketplace' && (
              <span
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--accent-terracotta)',
                  borderRadius: '1px'
                }}
              />
            )}
          </button>

          <button
            onClick={() => handleNavClick('overview', 'mentors')}
            style={{ fontSize: '13.5px', fontWeight: '500', color: 'var(--ink-secondary)' }}
            className="nav-link"
          >
            Club
          </button>

          <button
            onClick={() => handleNavClick('overview', 'articles')}
            style={{ fontSize: '13.5px', fontWeight: '500', color: 'var(--ink-secondary)' }}
            className="nav-link"
          >
            Journal
          </button>
        </nav>

        {/* Right Actions: Search, Cart, Sign up */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
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
              padding: '7px 14px',
              borderRadius: 'var(--radius-full)',
              fontSize: '12.5px',
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
                  backgroundColor: 'var(--accent-terracotta)',
                  color: '#FFFFFF',
                  width: '17px',
                  height: '17px',
                  borderRadius: '50%',
                  fontSize: '10px',
                  fontWeight: '700'
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => handleNavClick('overview', 'courses')}
            className="btn-primary"
            style={{ display: 'none', padding: '8px 16px', fontSize: '12.5px' }}
            id="nav-signup-btn"
          >
            Sign up
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
            backgroundColor: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-light)',
            padding: '20px 28px',
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
              color: currentPage === 'overview' ? 'var(--accent-terracotta)' : 'var(--ink-primary)',
              padding: '6px 0'
            }}
          >
            Overview
          </button>
          <button
            onClick={() => handleNavClick('marketplace')}
            style={{
              textAlign: 'left',
              fontSize: '15px',
              fontWeight: currentPage === 'marketplace' ? '700' : '600',
              color: currentPage === 'marketplace' ? 'var(--accent-terracotta)' : 'var(--ink-primary)',
              padding: '6px 0'
            }}
          >
            Marketplace
          </button>
          <button
            onClick={() => handleNavClick('overview', 'mentors')}
            style={{ textAlign: 'left', fontSize: '15px', fontWeight: '600', padding: '6px 0' }}
          >
            Club
          </button>
          <button
            onClick={() => handleNavClick('overview', 'articles')}
            style={{ textAlign: 'left', fontSize: '15px', fontWeight: '600', padding: '6px 0' }}
          >
            Journal
          </button>
          <div style={{ paddingTop: '10px', borderTop: '1px solid var(--border-light)', display: 'flex', gap: '10px' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCart(); }}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              View Cart ({cartCount})
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
