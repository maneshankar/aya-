import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = ({ cartCount, onOpenCart, onSearchTrigger }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Links matching image */}
        <nav style={{ display: 'none', gap: '28px', alignItems: 'center' }} className="desktop-nav">
          <button onClick={() => scrollToSection('overview')} style={{ fontSize: '13.5px', fontWeight: '500', color: 'var(--ink-secondary)' }} className="nav-link">
            Overview
          </button>
          <button onClick={() => scrollToSection('marketplace')} style={{ fontSize: '13.5px', fontWeight: '500', color: 'var(--ink-secondary)' }} className="nav-link">
            Marketplace
          </button>
          <button onClick={() => scrollToSection('club')} style={{ fontSize: '13.5px', fontWeight: '500', color: 'var(--ink-secondary)' }} className="nav-link">
            Club
          </button>
          <button onClick={() => scrollToSection('journal')} style={{ fontSize: '13.5px', fontWeight: '500', color: 'var(--ink-secondary)' }} className="nav-link">
            Journal
          </button>
        </nav>

        {/* Right Actions: Log In, Sign up, Cart */}
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

          <button style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink-secondary)', display: 'none' }} className="desktop-login">
            Log In
          </button>

          <button
            onClick={() => scrollToSection('courses')}
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
          <button onClick={() => scrollToSection('overview')} style={{ textAlign: 'left', fontSize: '15px', fontWeight: '600', padding: '6px 0' }}>
            Overview
          </button>
          <button onClick={() => scrollToSection('marketplace')} style={{ textAlign: 'left', fontSize: '15px', fontWeight: '600', padding: '6px 0' }}>
            Marketplace
          </button>
          <button onClick={() => scrollToSection('club')} style={{ textAlign: 'left', fontSize: '15px', fontWeight: '600', padding: '6px 0' }}>
            Club
          </button>
          <button onClick={() => scrollToSection('journal')} style={{ textAlign: 'left', fontSize: '15px', fontWeight: '600', padding: '6px 0' }}>
            Journal
          </button>
          <div style={{ paddingTop: '10px', borderTop: '1px solid var(--border-light)', display: 'flex', gap: '10px' }}>
            <button onClick={() => { setMobileMenuOpen(false); onOpenCart(); }} className="btn-primary" style={{ width: '100%' }}>
              View Cart ({cartCount})
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .desktop-login { display: inline-block !important; }
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
