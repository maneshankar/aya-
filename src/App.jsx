import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { StatementSection } from './components/StatementSection';
import { StatsCounter } from './components/StatsCounter';
import { CourseCatalog } from './components/CourseCatalog';
import { CourseDetailModal } from './components/CourseDetailModal';
import { LearningPillars } from './components/LearningPillars';
import { TestimonialQuote } from './components/TestimonialQuote';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { Toast } from './components/Toast';
import { courseApi } from './api/courseApi';

export function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  const searchInputRef = useRef(null);

  // Initialize wishlist from API storage
  useEffect(() => {
    setWishlist(courseApi.getWishlist());
  }, []);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  const handleToggleWishlist = (courseId) => {
    const result = courseApi.toggleWishlist(courseId);
    setWishlist(result.wishlist);
    showToast(result.isSaved ? 'Masterclass added to wishlist' : 'Removed from wishlist');
  };

  const handleAddToCart = (course) => {
    if (cart.some(c => c.id === course.id)) {
      setIsCartOpen(true);
      return;
    }
    setCart(prev => [...prev, course]);
    setIsCartOpen(true);
  };

  const handleQuickEnroll = (course) => {
    if (!cart.some(c => c.id === course.id)) {
      setCart(prev => [...prev, course]);
    }
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (courseId) => {
    setCart(prev => prev.filter(c => c.id !== courseId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleSearchTrigger = () => {
    const el = document.getElementById('masterclasses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 500);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar
        cartCount={cart.length}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => scrollToSection('masterclasses')}
        onSearchTrigger={handleSearchTrigger}
      />

      {/* Main Content Sections */}
      <main style={{ flexGrow: 1 }}>
        {/* Editorial Hero */}
        <Hero
          onExploreClick={() => scrollToSection('masterclasses')}
          onMethodologyClick={() => scrollToSection('methodology')}
        />

        {/* Trust & Enterprise Ticker */}
        <TrustTicker />

        {/* Editorial Studio Statement & Visual Grid */}
        <StatementSection
          onLearnMore={() => scrollToSection('masterclasses')}
        />

        {/* Verifiable Outcomes & Stats */}
        <StatsCounter />

        {/* Filterable Masterclasses Catalog */}
        <CourseCatalog
          onSelectCourse={(course) => setSelectedCourse(course)}
          onEnroll={handleQuickEnroll}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchInputRef={searchInputRef}
        />

        {/* Capabilities & Methodology Pillars */}
        <LearningPillars />

        {/* Editorial Testimonial */}
        <TestimonialQuote />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Bottom Dark CTA Bar */}
        <CtaBanner
          onEnrollClick={() => scrollToSection('masterclasses')}
          onSyllabusClick={() => scrollToSection('capabilities')}
        />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Course Detail & Syllabus Modal */}
      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onEnroll={handleQuickEnroll}
          isSaved={wishlist.includes(selectedCourse.id)}
          onToggleSave={handleToggleWishlist}
        />
      )}

      {/* Cart & Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onOrderSuccess={(order) => {
          showToast(`Seat confirmed for Order ${order.orderId}!`);
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
