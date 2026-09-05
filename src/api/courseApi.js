/**
 * API Service Layer for Atelier Education Platform.
 * All data fetching, course querying, syllabus retrieval,
 * and enrollment transactions are centralized here.
 */

import {
  COURSES,
  CATEGORIES,
  STATS,
  TRUST_PARTNERS,
  PILLARS,
  TESTIMONIAL,
  FAQ_ITEMS
} from './mockData.js';

// Simulated network latency helper
const delay = (ms = 180) => new Promise(resolve => setTimeout(resolve, ms));

export const courseApi = {
  /**
   * Fetch all courses with optional category filtering and search query
   */
  async getCourses({ category = 'all', query = '', sort = 'featured' } = {}) {
    await delay(120);
    let result = [...COURSES];

    // Filter by category
    if (category && category !== 'all') {
      result = result.filter(course => course.categoryId === category);
    }

    // Filter by search query
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

    // Sort
    if (sort === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'featured') {
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return {
      data: result,
      total: result.length,
      success: true
    };
  },

  /**
   * Fetch a single course by its ID
   */
  async getCourseById(courseId) {
    await delay(150);
    const course = COURSES.find(c => c.id === courseId);
    if (!course) {
      throw new Error(`Course not found with id: ${courseId}`);
    }
    return {
      data: course,
      success: true
    };
  },

  /**
   * Fetch all course categories
   */
  async getCategories() {
    await delay(80);
    return {
      data: CATEGORIES,
      success: true
    };
  },

  /**
   * Fetch platform statistics
   */
  async getStats() {
    await delay(100);
    return {
      data: STATS,
      success: true
    };
  },

  /**
   * Fetch trust partners & logos
   */
  async getTrustPartners() {
    await delay(80);
    return {
      data: TRUST_PARTNERS,
      success: true
    };
  },

  /**
   * Fetch learning pillars
   */
  async getPillars() {
    await delay(100);
    return {
      data: PILLARS,
      success: true
    };
  },

  /**
   * Fetch editorial testimonial
   */
  async getTestimonial() {
    await delay(80);
    return {
      data: TESTIMONIAL,
      success: true
    };
  },

  /**
   * Fetch FAQs
   */
  async getFaq() {
    await delay(100);
    return {
      data: FAQ_ITEMS,
      success: true
    };
  },

  /**
   * Validate discount code
   */
  async applyPromoCode(code) {
    await delay(200);
    const validCodes = {
      'ATELIER20': { discount: 0.2, label: '20% Cohort Discount' },
      'STUDIO50': { discount: 0.5, label: '50% Early Bird' },
      'CREATOR': { discount: 0.15, label: '15% Creator Pass' }
    };

    const promo = validCodes[code.toUpperCase().trim()];
    if (promo) {
      return { success: true, discountRate: promo.discount, label: promo.label };
    }
    return { success: false, error: 'Invalid or expired promotional code' };
  },

  /**
   * Process simulated enrollment and checkout
   */
  async submitEnrollment({ items, customer, paymentMethod }) {
    await delay(400);

    if (!customer?.email || !customer?.name) {
      throw new Error('Please provide valid name and email address.');
    }

    const orderId = 'ORD-' + Math.random().toString(36).substring(2, 9).toUpperCase();
    const enrolledDate = new Date().toISOString();

    // Store in local storage for persistent access
    const previousOrders = JSON.parse(localStorage.getItem('atelier_orders') || '[]');
    const newOrder = {
      orderId,
      items,
      customer,
      paymentMethod,
      enrolledDate,
      status: 'CONFIRMED'
    };
    localStorage.setItem('atelier_orders', JSON.stringify([...previousOrders, newOrder]));

    return {
      success: true,
      order: newOrder,
      message: 'Enrollment confirmed! Your onboarding credentials have been sent to your email.'
    };
  },

  /**
   * Wishlist persistence
   */
  getWishlist() {
    try {
      return JSON.parse(localStorage.getItem('atelier_wishlist') || '[]');
    } catch {
      return [];
    }
  },

  toggleWishlist(courseId) {
    const list = this.getWishlist();
    const exists = list.includes(courseId);
    const updated = exists ? list.filter(id => id !== courseId) : [...list, courseId];
    localStorage.setItem('atelier_wishlist', JSON.stringify(updated));
    return { wishlist: updated, isSaved: !exists };
  }
};
