import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { WhatsInTheBox } from './components/WhatsInTheBox';
import { CourseCatalog } from './components/CourseCatalog';
import { PhysicalGearSection } from './components/PhysicalGearSection';
import { MentorsSection } from './components/MentorsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { MarketplacePage } from './components/MarketplacePage';
import { CourseDetailModal } from './components/CourseDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { Toast } from './components/Toast';
import { courseApi } from './api/courseApi';

export function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash === 'marketplace' ? 'marketplace' : 'overview';
  });
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync with browser hash changes (back/forward navigation & direct links)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'marketplace') {
        setCurrentPage('marketplace');
      } else {
        setCurrentPage('overview');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    setWishlist(courseApi.getWishlist());
  }, []);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleToggleWishlist = (courseId) => {
    const result = courseApi.toggleWishlist(courseId);
    setWishlist(result.wishlist);
    showToast(result.isSaved ? 'Saved to your collection' : 'Removed from collection');
  };

  const handleAddToCart = (item) => {
    if (cart.some(c => c.id === item.id)) {
      setIsCartOpen(true);
      return;
    }
    setCart(prev => [...prev, item]);
    setIsCartOpen(true);
    showToast(`Added "${item.title}" to cart`);
  };

  const handleRemoveFromCart = (itemId) => {
    setCart(prev => prev.filter(c => c.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleNavigate = (page, sectionId = null) => {
    if (page === 'marketplace') {
      setCurrentPage('marketplace');
      window.location.hash = 'marketplace';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('overview');
      if (window.location.hash === '#marketplace') {
        window.history.pushState(null, '', window.location.pathname);
      }
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const scrollToSection = (id) => {
    if (currentPage !== 'overview') {
      handleNavigate('overview', id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Universal Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={cart.length}
        onOpenCart={() => setIsCartOpen(true)}
        onSearchTrigger={() => scrollToSection('courses')}
      />

      {/* Page Routing */}
      {currentPage === 'marketplace' ? (
        <main style={{ flexGrow: 1 }}>
          <MarketplacePage
            onAddToCart={handleAddToCart}
            onNavigate={handleNavigate}
            cartCount={cart.length}
            onOpenCart={() => setIsCartOpen(true)}
          />
        </main>
      ) : (
        /* Main Landing Page Layout (Marketplace separated into dedicated page) */
        <main style={{ flexGrow: 1 }}>
          {/* 1. Hero: The education platform built for design disciplines */}
          <Hero
            onJoinWaitlist={() => setIsCartOpen(true)}
            onExploreFreeCourses={() => scrollToSection('courses')}
          />

          {/* 2. Three Checkpoints / Tickers */}
          <TrustTicker />

          {/* 3. What's in the box */}
          <WhatsInTheBox />

          {/* 4. Free courses from people who make this for a living */}
          <CourseCatalog
            onSelectCourse={(course) => setSelectedCourse(course)}
            onEnroll={handleAddToCart}
          />

          {/* 5. Shop • Physical Gear: Canvas, brushes, paint — the physical kit */}
          <PhysicalGearSection
            onAddToCart={handleAddToCart}
          />

          {/* 6. Mentors • 1:1 Calls: Get unstuck with 1:1 guidance */}
          <MentorsSection
            onBookMentor={(mentor) => {
              showToast(`Opening booking calendar for ${mentor.name}...`);
            }}
          />

          {/* 7. Free Access • Open Source: Articles, references and copyright-free assets */}
          <ArticlesSection
            onSelectArticle={(article) => {
              showToast(`Opening "${article.title}"`);
            }}
          />

          {/* 8. Built for makers, not algorithms banner */}
          <CtaBanner
            onJoinWaitlist={() => setIsCartOpen(true)}
          />
        </main>
      )}

      {/* Universal Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Course Detail Modal */}
      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onEnroll={handleAddToCart}
          isSaved={wishlist.includes(selectedCourse.id)}
          onToggleSave={handleToggleWishlist}
        />
      )}

      {/* Central Cart & Checkout Drawer (works across all pages) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onOrderSuccess={(order) => {
          showToast(`Order confirmed for #${order.orderId}!`);
        }}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
