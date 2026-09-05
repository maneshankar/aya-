/**
 * API Service Layer for aya+ Education Platform.
 * All data fetching, course querying, marketplace items, gear, mentors,
 * and enrollment transactions are centralized here.
 */

import {
  COURSES,
  CATEGORIES,
  STATS,
  TRUST_TICKERS,
  WHATS_IN_THE_BOX,
  MARKETPLACE_ITEMS,
  PHYSICAL_GEAR,
  MENTORS,
  ARTICLES
} from './mockData.js';

// Simulated network latency helper
const delay = (ms = 120) => new Promise(resolve => setTimeout(resolve, ms));

export const courseApi = {
  /**
   * Fetch courses with optional category filtering and search query
   */
  async getCourses({ category = 'all', query = '' } = {}) {
    await delay(100);
    let result = [...COURSES];

    if (category && category !== 'all') {
      result = result.filter(c => c.categoryId === category);
    }

    if (query && query.trim() !== '') {
      const q = query.toLowerCase().trim();
      result = result.filter(
        c =>
          c.title.toLowerCase().includes(q) ||
          c.tagline.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.instructor.name.toLowerCase().includes(q)
      );
    }

    return { data: result, total: result.length, success: true };
  },

  async getCategories() {
    await delay(60);
    return { data: CATEGORIES, success: true };
  },

  async getStats() {
    await delay(60);
    return { data: STATS, success: true };
  },

  async getTrustTickers() {
    await delay(60);
    return { data: TRUST_TICKERS, success: true };
  },

  async getWhatsInTheBox() {
    await delay(60);
    return { data: WHATS_IN_THE_BOX, success: true };
  },

  async getMarketplaceItems() {
    await delay(80);
    return { data: MARKETPLACE_ITEMS, success: true };
  },

  async getPhysicalGear() {
    await delay(80);
    return { data: PHYSICAL_GEAR, success: true };
  },

  async getMentors() {
    await delay(60);
    return { data: MENTORS, success: true };
  },

  async getArticles() {
    await delay(60);
    return { data: ARTICLES, success: true };
  },

  async applyPromoCode(code) {
    await delay(150);
    const validCodes = {
      'AYAPLUS20': { discount: 0.2, label: '20% Cohort Discount' },
      'AYA50': { discount: 0.5, label: '50% Early Bird' },
      'CREATOR': { discount: 0.15, label: '15% Creator Pass' }
    };

    const promo = validCodes[code.toUpperCase().trim()];
    if (promo) {
      return { success: true, discountRate: promo.discount, label: promo.label };
    }
    return { success: false, error: 'Invalid or expired promotional code' };
  },

  async submitEnrollment({ items, customer, paymentMethod }) {
    await delay(300);
    if (!customer?.email || !customer?.name) {
      throw new Error('Please provide valid name and email address.');
    }

    const orderId = 'AYA-' + Math.random().toString(36).substring(2, 9).toUpperCase();
    const enrolledDate = new Date().toISOString();

    const previousOrders = JSON.parse(localStorage.getItem('ayaplus_orders') || '[]');
    const newOrder = {
      orderId,
      items,
      customer,
      paymentMethod,
      enrolledDate,
      status: 'CONFIRMED'
    };
    localStorage.setItem('ayaplus_orders', JSON.stringify([...previousOrders, newOrder]));

    return {
      success: true,
      order: newOrder,
      message: 'Enrollment confirmed! Your onboarding credentials have been sent to your email.'
    };
  },

  getWishlist() {
    try {
      return JSON.parse(localStorage.getItem('ayaplus_wishlist') || '[]');
    } catch {
      return [];
    }
  },

  toggleWishlist(courseId) {
    const list = this.getWishlist();
    const exists = list.includes(courseId);
    const updated = exists ? list.filter(id => id !== courseId) : [...list, courseId];
    localStorage.setItem('ayaplus_wishlist', JSON.stringify(updated));
    return { wishlist: updated, isSaved: !exists };
  }
};
