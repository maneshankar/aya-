import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { WhatsInTheBox } from './components/WhatsInTheBox';
import { CourseCatalog } from './components/CourseCatalog';
import { MarketplaceSection } from './components/MarketplaceSection';
import { PhysicalGearSection } from './components/PhysicalGearSection';
import { MentorsSection } from './components/MentorsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { CourseDetailModal } from './components/CourseDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { Toast } from './components/Toast';
import { courseApi } from './api/courseApi';

export function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

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
    showToast(`Added ${item.title} to cart`);
  };

  const handleRemoveFromCart = (itemId) => {
    setCart(prev => prev.filter(c => c.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar with exact links: Overview, Marketplace, Club, Journal */}
      <Navbar
        cartCount={cart.length}
        onOpenCart={() => setIsCartOpen(true)}
        onSearchTrigger={() => scrollToSection('courses')}
      />

      {/* Main Page Layout matching image */}
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

        {/* 5. Free courses from people who make this for a living */}
        <CourseCatalog
          onSelectCourse={(course) => setSelectedCourse(course)}
          onEnroll={handleAddToCart}
        />

        {/* 6. Marketplace: Original work, straight from the artist */}
        <MarketplaceSection
          onAddToCart={handleAddToCart}
        />

        {/* 7. Shop • Physical Gear: Canvas, brushes, paint — the physical kit */}
        <PhysicalGearSection
          onAddToCart={handleAddToCart}
        />

        {/* 8. Mentors • 1:1 Calls: Get unstuck with 1:1 guidance */}
        <MentorsSection
          onBookMentor={(mentor) => {
            showToast(`Opening booking calendar for ${mentor.name}...`);
          }}
        />

        {/* 9. Free Access • Open Source: Articles, references and copyright-free assets */}
        <ArticlesSection
          onSelectArticle={(article) => {
            showToast(`Opening "${article.title}"`);
          }}
        />

        {/* 10. Built for makers, not algorithms banner */}
        <CtaBanner
          onJoinWaitlist={() => setIsCartOpen(true)}
        />
      </main>

      {/* Footer matching exact columns and links */}
      <Footer />

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

      {/* Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
