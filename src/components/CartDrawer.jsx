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
    setCustomer({ name: '', email: '' });
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
        backgroundColor: 'rgba(12, 12, 14, 0.65)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '480px',
          height: '100%',
          backgroundColor: '#FFFFFF',
          boxShadow: 'var(--shadow-drawer)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '24px 28px',
            borderBottom: '1px solid var(--border-light)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            backgroundColor: '#FFFFFF',
            zIndex: 10
          }}
        >
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--ink-primary)' }}>
              Your Atelier Cart
            </h2>
            <div style={{ fontSize: '12px', color: 'var(--ink-muted)', marginTop: '2px' }}>
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-surface-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--ink-primary)'
            }}
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {/* Confirmation Screen */}
        {orderConfirmation ? (
          <div style={{ padding: '40px 28px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--ink-primary)' }}>
              Enrollment Confirmed!
            </h3>

            <p style={{ fontSize: '13.5px', color: 'var(--ink-secondary)', lineHeight: '1.6' }}>
              Welcome to the cohort, <strong>{orderConfirmation.customer.name}</strong>. Access credentials and receipt have been dispatched to <strong>{orderConfirmation.customer.email}</strong>.
            </p>

            <div style={{ padding: '14px 20px', backgroundColor: 'var(--bg-surface-subtle)', borderRadius: '12px', width: '100%', fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--ink-primary)' }}>
              ORDER ID: #{orderConfirmation.orderId}
            </div>

            <button
              onClick={resetDrawer}
              className="btn-pill-solid"
              style={{ width: '100%', justifyContent: 'center', marginTop: '16px', padding: '12px' }}
            >
              Continue Exploring
            </button>
          </div>
        ) : (
          /* Normal Cart Body */
          <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
            {cartItems.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--ink-muted)' }}>
                <p style={{ fontSize: '14px', marginBottom: '20px' }}>Your cart is empty.</p>
                <button onClick={onClose} className="btn-pill-cta">
                  Explore Masterclasses
                </button>
              </div>
            ) : (
              <div>
                {/* Cart Items List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  {cartItems.map(item => (
                    <div
                      key={item.id}
                      style={{
                        display: 'flex',
                        gap: '14px',
                        alignItems: 'center',
                        padding: '14px',
                        border: '1px solid var(--border-light)',
                        borderRadius: '16px',
                        backgroundColor: '#FFFFFF'
                      }}
                    >
                      {(item.image || item.coverImage) && (
                        <div style={{ width: '54px', height: '54px', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#1A1A1A', flexShrink: 0 }}>
                          <img
                            src={item.image || item.coverImage}
                            alt={item.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                      )}

                      <div style={{ flexGrow: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--aurora-coral)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          {item.category || (item.medium ? 'Marketplace Artwork' : 'Curated Item')}
                        </div>
                        <div style={{ fontSize: '13.5px', fontWeight: '800', color: 'var(--ink-primary)', margin: '2px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: '11.5px', color: 'var(--ink-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {item.instructor?.name ? `Instructor: ${item.instructor.name}` : item.artist ? `Artist: ${item.artist}` : item.medium || item.subtitle || 'aya+ Verified'}
                        </div>
                      </div>

                      <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px', flexShrink: 0 }}>
                        <span style={{ fontSize: '14.5px', fontWeight: '800', color: 'var(--ink-primary)', fontFamily: 'var(--font-mono)' }}>
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
                        placeholder="Try AYAPLUS20 or AYA50"
                        value={promoCode}
                        onChange={e => setPromoCode(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 12px 10px 34px',
                          border: '1px solid var(--border-light)',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '12px',
                          fontFamily: 'var(--font-mono)',
                          textTransform: 'uppercase',
                          outline: 'none',
                          backgroundColor: 'var(--bg-surface-subtle)'
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={applyingPromo || !promoCode.trim()}
                      className="btn-pill-cta"
                      style={{ padding: '8px 16px', fontSize: '11px' }}
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
                    <div style={{ fontSize: '12px', color: 'var(--aurora-coral)', marginTop: '6px' }}>
                      ✕ {promoError}
                    </div>
                  )}
                </form>

                {/* Checkout Form */}
                <form onSubmit={handleCheckout} style={{ borderTop: '1px solid var(--border-light)', paddingTop: '20px' }}>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--ink-primary)', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Participant Information
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
                    <input
                      type="text"
                      required
                      placeholder="Full Name (for certificate)"
                      value={customer.name}
                      onChange={e => setCustomer({ ...customer, name: e.target.value })}
                      style={{
                        padding: '11px 14px',
                        border: '1px solid var(--border-light)',
                        borderRadius: '12px',
                        fontSize: '13px',
                        outline: 'none',
                        backgroundColor: 'var(--bg-surface-subtle)'
                      }}
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={customer.email}
                      onChange={e => setCustomer({ ...customer, email: e.target.value })}
                      style={{
                        padding: '11px 14px',
                        border: '1px solid var(--border-light)',
                        borderRadius: '12px',
                        fontSize: '13px',
                        outline: 'none',
                        backgroundColor: 'var(--bg-surface-subtle)'
                      }}
                    />
                  </div>

                  {/* Pricing Summary */}
                  <div style={{ backgroundColor: 'var(--bg-surface-subtle)', padding: '16px', borderRadius: '16px', marginBottom: '20px' }}>
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

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: '800', color: 'var(--ink-primary)', borderTop: '1px solid var(--border-light)', paddingTop: '8px', marginTop: '6px' }}>
                      <span>Total Due</span>
                      <span>${finalTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-pill-solid"
                    style={{ width: '100%', justifyContent: 'center', padding: '13px', fontSize: '13px' }}
                  >
                    <Lock size={14} />
                    <span>{submitting ? 'Confirming Seat...' : `Checkout • $${finalTotal.toFixed(2)}`}</span>
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '11px', color: 'var(--ink-muted)', marginTop: '12px' }}>
                    <ShieldCheck size={14} />
                    <span>Archival guarantee • Direct studio access</span>
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
