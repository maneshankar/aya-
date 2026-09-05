import React, { useState, useEffect } from 'react';
import { ShoppingBag, Bookmark, Search, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = ({ cartCount, wishlistCount, onOpenCart, onOpenWishlist, onSearchTrigger }) => {
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
        backgroundColor: scrolled ? 'rgba(248, 246, 240, 0.92)' : 'var(--bg-main)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--border-light)' : 'transparent'}`,
        transition: 'all var(--transition-fast)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', fontWeight: '800', letterSpacing: '-0.03em', color: 'var(--ink-primary)' }}
        >
          <span style={{ color: 'var(--accent-terracotta)', fontSize: '20px' }}>●</span>
          <span>atelier <span style={{ fontWeight: '400', fontSize: '13px', color: 'var(--ink-muted)', marginLeft: '4px' }}>academy</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', gap: '28px', alignItems: 'center' }} className="desktop-nav">
          <button onClick={() => scrollToSection('masterclasses')} style={{ fontSize: '13.5px', fontWeight: '500', color: 'var(--ink-secondary)' }} className="nav-link">
            Masterclasses
          </button>
          <button onClick={() => scrollToSection('methodology')} style={{ fontSize: '13.5px', fontWeight: '500', color: 'var(--ink-secondary)' }} className="nav-link">
            Methodology
          </button>
          <button onClick={() => scrollToSection('outcomes')} style={{ fontSize: '13.5px', fontWeight: '500', color: 'var(--ink-secondary)' }} className="nav-link">
            By The Numbers
          </button>
          <button onClick={() => scrollToSection('capabilities')} style={{ fontSize: '13.5px', fontWeight: '500', color: 'var(--ink-secondary)' }} className="nav-link">
            Capabilities
          </button>
          <button onClick={() => scrollToSection('faq')} style={{ fontSize: '13.5px', fontWeight: '500', color: 'var(--ink-secondary)' }} className="nav-link">
            FAQ
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Quick Search */}
          <button
            onClick={onSearchTrigger}
            aria-label="Search courses"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--bg-surface-subtle)',
              color: 'var(--ink-primary)'
            }}
          >
            <Search size={16} strokeWidth={2} />
          </button>

          {/* Cart Icon & Badge */}
          <button
            onClick={onOpenCart}
            aria-label="View enrollment cart"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'var(--ink-primary)',
              color: '#FFFFFF',
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              fontSize: '13px',
              fontWeight: '600'
            }}
          >
            <ShoppingBag size={15} />
            <span>Cart</span>
            {cartCount > 0 && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--accent-terracotta)',
                  color: '#FFFFFF',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  fontSize: '10.5px',
                  fontWeight: '700',
                  marginLeft: '2px'
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Primary Action */}
          <button
            onClick={() => scrollToSection('masterclasses')}
            className="btn-primary"
            style={{ display: 'none' }}
            id="nav-apply-btn"
          >
            <span>Explore Cohorts</span>
            <ArrowUpRight size={15} />
          </button>

          {/* Mobile Hamburger Menu Toggle */}
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

      {/* Mobile Dropdown Menu */}
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
          <button onClick={() => scrollToSection('masterclasses')} style={{ textAlign: 'left', fontSize: '15px', fontWeight: '600', padding: '6px 0' }}>
            Masterclasses
          </button>
          <button onClick={() => scrollToSection('methodology')} style={{ textAlign: 'left', fontSize: '15px', fontWeight: '600', padding: '6px 0' }}>
            Methodology
          </button>
          <button onClick={() => scrollToSection('outcomes')} style={{ textAlign: 'left', fontSize: '15px', fontWeight: '600', padding: '6px 0' }}>
            By The Numbers
          </button>
          <button onClick={() => scrollToSection('capabilities')} style={{ textAlign: 'left', fontSize: '15px', fontWeight: '600', padding: '6px 0' }}>
            Capabilities
          </button>
          <button onClick={() => scrollToSection('faq')} style={{ textAlign: 'left', fontSize: '15px', fontWeight: '600', padding: '6px 0' }}>
            FAQ
          </button>
          <div style={{ paddingTop: '10px', borderTop: '1px solid var(--border-light)' }}>
            <button onClick={() => { setMobileMenuOpen(false); onOpenCart(); }} className="btn-primary" style={{ width: '100%' }}>
              View Cart ({cartCount})
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          #nav-apply-btn { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link:hover {
          color: var(--ink-primary) !important;
        }
      `}</style>
    </header>
  );
};
