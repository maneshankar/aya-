import React, { useState } from 'react';
import { X, Trash2, Tag, ShieldCheck, ArrowRight, CheckCircle2, Lock } from 'lucide-react';
import { courseApi } from '../api/courseApi';

export const CartDrawer = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onClearCart,
  onOrderSuccess
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountInfo, setDiscountInfo] = useState(null);
  const [promoError, setPromoError] = useState('');
  const [applyingPromo, setApplyingPromo] = useState(false);

  // Form State
  const [customer, setCustomer] = useState({ name: '', email: '' });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [submitting, setSubmitting] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(null);

  if (!isOpen) return null;

  // Calculate pricing
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const discountAmount = discountInfo ? subtotal * discountInfo.discountRate : 0;
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = async (e) => {
    e.preventDefault();
    if (!promoCode.trim()) return;
    setApplyingPromo(true);
    setPromoError('');
    try {
      const res = await courseApi.applyPromoCode(promoCode);
      if (res.success) {
        setDiscountInfo(res);
        setPromoError('');
      } else {
        setPromoError(res.error || 'Invalid code');
        setDiscountInfo(null);
      }
    } catch {
      setPromoError('Failed to apply discount');
    } finally {
      setApplyingPromo(false);
    }
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    if (!customer.name || !customer.email) {
      alert('Please enter your full name and email address.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await courseApi.submitEnrollment({
        items: cartItems,
        customer,
        paymentMethod
      });

      if (res.success) {
        setOrderConfirmation(res.order);
        onClearCart();
        if (onOrderSuccess) onOrderSuccess(res.order);
      }
    } catch (err) {
      alert(err.message || 'Enrollment failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const resetDrawer = () => {
    setOrderConfirmation(null);
    setDiscountInfo(null);
    setPromoCode('');
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 250,
        backgroundColor: 'rgba(18, 18, 18, 0.65)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'modalBackdropFade 0.2s ease-out'
      }}
      onClick={resetDrawer}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '480px',
          height: '100%',
          backgroundColor: 'var(--bg-surface)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-drawer)',
          animation: 'drawerSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '22px 24px',
            borderBottom: '1px solid var(--border-light)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '16px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--ink-primary)' }}>
              {orderConfirmation ? 'Enrollment Confirmed' : `Cohort Cart (${cartItems.length})`}
            </span>
          </div>
          <button
            onClick={resetDrawer}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--bg-surface-subtle)',
              color: 'var(--ink-primary)'
            }}
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {/* Confirmation Screen */}
        {orderConfirmation ? (
          <div style={{ padding: '36px 28px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', flexGrow: 1, justifyContent: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--accent-terracotta-soft)', color: 'var(--accent-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--ink-primary)' }}>
              Welcome to the Cohort!
            </h3>

            <p style={{ fontSize: '13.5px', color: 'var(--ink-secondary)', lineHeight: '1.6', maxWidth: '360px' }}>
              Your seat is secured for Order <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--ink-primary)' }}>{orderConfirmation.orderId}</strong>. Onboarding details and repo access have been dispatched to <strong style={{ color: 'var(--ink-primary)' }}>{orderConfirmation.customer.email}</strong>.
            </p>

            <div style={{ width: '100%', padding: '16px', backgroundColor: 'var(--bg-surface-subtle)', borderRadius: 'var(--radius-sm)', textAlign: 'left', marginTop: '12px' }}>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                Enrolled Masterclasses:
              </div>
              {orderConfirmation.items.map((it, idx) => (
                <div key={idx} style={{ fontSize: '12.5px', fontWeight: '600', color: 'var(--ink-primary)', padding: '4px 0' }}>
                  • {it.title}
                </div>
              ))}
            </div>

            <button
              onClick={resetDrawer}
              className="btn-primary"
              style={{ width: '100%', marginTop: '20px' }}
            >
              <span>Done & Return to Catalog</span>
            </button>
          </div>
        ) : (
          /* Normal Cart Body */
          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
            {cartItems.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--ink-muted)' }}>
                <p style={{ fontSize: '14px', marginBottom: '16px' }}>Your cohort cart is empty.</p>
                <button onClick={onClose} className="btn-secondary">
                  Explore Masterclasses
                </button>
              </div>
            ) : (
              <div>
                {/* Cart Items List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                  {cartItems.map(item => (
                    <div
                      key={item.id}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        padding: '14px',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--bg-surface)'
                      }}
                    >
                      <div style={{ flexGrow: 1, paddingRight: '12px' }}>
                        <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--accent-terracotta)', fontWeight: '700', textTransform: 'uppercase' }}>
                          {item.category}
                        </div>
                        <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink-primary)', margin: '2px 0 4px' }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: '11.5px', color: 'var(--ink-muted)' }}>
                          Instructor: {item.instructor.name}
                        </div>
                      </div>

                      <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                        <span style={{ fontSize: '14px', fontWeight: '800', color: 'var(--ink-primary)' }}>
                          ${item.price}
                        </span>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          style={{ color: 'var(--ink-muted)', padding: '2px' }}
                          title="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{ position: 'relative', flexGrow: 1 }}>
                      <Tag size={14} color="var(--ink-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                      <input
                        type="text"
                        placeholder="Try code ATELIER20 or STUDIO50"
                        value={promoCode}
                        onChange={e => setPromoCode(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '9px 12px 9px 34px',
                          border: '1px solid var(--border-medium)',
                          borderRadius: 'var(--radius-xs)',
                          fontSize: '12.5px',
                          fontFamily: 'var(--font-mono)',
                          textTransform: 'uppercase'
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={applyingPromo || !promoCode.trim()}
                      className="btn-secondary"
                      style={{ padding: '9px 16px', fontSize: '12.5px' }}
                    >
                      {applyingPromo ? '...' : 'Apply'}
                    </button>
                  </div>

                  {discountInfo && (
                    <div style={{ fontSize: '12px', color: 'var(--accent-green)', fontWeight: '600', marginTop: '6px' }}>
                      ✓ Applied: {discountInfo.label} (-{discountInfo.discountRate * 100}%)
                    </div>
                  )}
                  {promoError && (
                    <div style={{ fontSize: '12px', color: 'var(--accent-terracotta)', marginTop: '6px' }}>
                      ✕ {promoError}
                    </div>
                  )}
                </form>

                {/* Checkout Form */}
                <form onSubmit={handleCheckout} style={{ borderTop: '1px solid var(--border-light)', paddingTop: '20px' }}>
                  <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--ink-primary)', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Student Information
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
                    <input
                      type="text"
                      required
                      placeholder="Full Name (for certificate & repo access)"
                      value={customer.name}
                      onChange={e => setCustomer({ ...customer, name: e.target.value })}
                      style={{
                        padding: '10px 12px',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-xs)',
                        fontSize: '13px'
                      }}
                    />
                    <input
                      type="email"
                      required
                      placeholder="Work or Personal Email"
                      value={customer.email}
                      onChange={e => setCustomer({ ...customer, email: e.target.value })}
                      style={{
                        padding: '10px 12px',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-xs)',
                        fontSize: '13px'
                      }}
                    />
                  </div>

                  {/* Pricing Summary */}
                  <div style={{ backgroundColor: 'var(--bg-surface-subtle)', padding: '14px', borderRadius: 'var(--radius-sm)', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', color: 'var(--ink-secondary)', marginBottom: '6px' }}>
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>

                    {discountAmount > 0 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', color: 'var(--accent-green)', fontWeight: '600', marginBottom: '6px' }}>
                        <span>Discount ({discountInfo?.label})</span>
                        <span>-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: '800', color: 'var(--ink-primary)', borderTop: '1px solid var(--border-medium)', paddingTop: '8px', marginTop: '6px' }}>
                      <span>Total Due</span>
                      <span>${finalTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary"
                    style={{ width: '100%', padding: '13px', fontSize: '14px' }}
                  >
                    <Lock size={14} />
                    <span>{submitting ? 'Confirming Cohort Seat...' : `Pay $${finalTotal.toFixed(2)} & Begin`}</span>
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '11px', color: 'var(--ink-muted)', marginTop: '12px' }}>
                    <ShieldCheck size={14} />
                    <span>14-day 100% money-back guarantee • Instant repo access</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
