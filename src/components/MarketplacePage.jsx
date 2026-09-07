import React, { useEffect, useState, useMemo } from 'react';
import { courseApi } from '../api/courseApi';
import { ArrowLeft, ShoppingBag, ShieldCheck, Check, Search, Sparkles, X, Truck, Award } from 'lucide-react';

export const MarketplacePage = ({ onAddToCart, onNavigate, cartCount, onOpenCart }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedArtModal, setSelectedArtModal] = useState(null);
  const [addedIds, setAddedIds] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    courseApi.getMarketplaceItems().then(res => {
      if (res.success) setItems(res.data);
      setLoading(false);
    });
  }, []);

  const categories = ['All', 'Paintings', 'Prints & Editions', 'Drawings & Charcoal', 'Sculpture & Objects'];

  const filteredItems = useMemo(() => {
    let list = [...items];

    if (selectedCategory !== 'All') {
      list = list.filter(item => item.category === selectedCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.artist.toLowerCase().includes(q) ||
        item.medium.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q))
      );
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'title') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  }, [items, selectedCategory, searchQuery, sortBy]);

  const handleAdd = (item, e) => {
    if (e) e.stopPropagation();
    onAddToCart({
      id: item.id,
      title: item.title,
      artist: item.artist,
      price: item.price,
      image: item.image,
      medium: item.medium,
      category: 'Marketplace Original',
      dimensions: item.dimensions,
      edition: item.edition
    });
    setAddedIds(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', position: 'relative' }}>
      {/* Top Banner / Breadcrumb */}
      <div style={{ borderBottom: '1px solid var(--border-light)', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            onClick={() => onNavigate('overview')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              fontWeight: '600',
              color: 'var(--ink-secondary)',
              transition: 'color var(--transition-fast)'
            }}
            className="back-btn"
          >
            <ArrowLeft size={16} />
            <span>Back to Overview</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--aurora-coral)', fontWeight: '700' }}>
              AYA+ CURATED FINE ART GALLERY
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header with subtle aurora glow */}
      <section style={{ padding: '64px 0 44px', borderBottom: '1px solid var(--border-light)', backgroundColor: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        {/* Soft Background Aurora */}
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '600px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(233, 59, 129, 0.15) 0%, rgba(255, 171, 46, 0.12) 50%, transparent 75%)',
            filter: 'blur(70px)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '820px' }}>
            <div style={{ marginBottom: '10px' }}>
              <span className="status-pill">
                <span className="status-dot" style={{ backgroundColor: 'var(--aurora-pink)' }} />
                <span>INDEPENDENT ARTIST MARKETPLACE</span>
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4.4vw, 3.6rem)', fontWeight: '800', letterSpacing: '-0.04em', color: 'var(--ink-primary)', marginTop: '8px', marginBottom: '14px', lineHeight: '1.08' }}>
              Original artworks, straight from the atelier.
            </h1>
            <p style={{ fontSize: '16px', color: 'var(--ink-secondary)', lineHeight: '1.6', maxWidth: '640px' }}>
              Crafted by faculty instructors, guest masters, and verified atelier fellows. Hand-signed with an archival certificate of provenance.
            </p>
          </div>

          {/* Filter / Search Bar */}
          <div
            style={{
              marginTop: '36px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            {/* Category tabs */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '12.5px',
                    fontWeight: '600',
                    border: '1px solid',
                    borderColor: selectedCategory === cat ? 'var(--ink-primary)' : 'var(--border-light)',
                    backgroundColor: selectedCategory === cat ? 'var(--ink-primary)' : 'var(--bg-surface-subtle)',
                    color: selectedCategory === cat ? '#FFFFFF' : 'var(--ink-secondary)',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search & Sort Controls */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', minWidth: '220px' }}>
                <Search size={14} color="var(--ink-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  placeholder="Search artworks, artists..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '9px 14px 9px 36px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--border-light)',
                    fontSize: '13px',
                    backgroundColor: 'var(--bg-surface-subtle)',
                    color: 'var(--ink-primary)',
                    outline: 'none'
                  }}
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '9px 16px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-light)',
                  fontSize: '12.5px',
                  backgroundColor: 'var(--bg-surface-subtle)',
                  color: 'var(--ink-primary)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="title">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section style={{ padding: '60px 0 90px' }}>
        <div className="container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--ink-muted)' }}>
              Loading curated collection...
            </div>
          ) : filteredItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--ink-primary)', marginBottom: '8px' }}>
                No matching artworks found
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--ink-secondary)', marginBottom: '20px' }}>
                Try adjusting your search query or selecting a different category filter.
              </p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="btn-secondary"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '32px'
              }}
            >
              {filteredItems.map(item => {
                const isAdded = addedIds[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedArtModal(item)}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--border-light)',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'all var(--transition-smooth)'
                    }}
                    className="market-art-card"
                  >
                    {/* Image Box */}
                    <div
                      style={{
                        position: 'relative',
                        aspectRatio: '4/4.5',
                        backgroundColor: '#161616',
                        overflow: 'hidden'
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80';
                        }}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                        className="market-art-img"
                      />
                      {item.edition && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '14px',
                            left: '14px',
                            backgroundColor: 'rgba(12, 12, 14, 0.85)',
                            backdropFilter: 'blur(8px)',
                            color: '#FFFFFF',
                            fontSize: '10px',
                            fontFamily: 'var(--font-mono)',
                            padding: '4px 10px',
                            borderRadius: 'var(--radius-full)',
                            fontWeight: '700',
                            letterSpacing: '0.04em'
                          }}
                        >
                          {item.edition}
                        </div>
                      )}
                    </div>

                    {/* Card Body */}
                    <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px', marginBottom: '6px' }}>
                          <h3 style={{ fontSize: '16.5px', fontWeight: '800', color: 'var(--ink-primary)', letterSpacing: '-0.02em' }}>
                            {item.title}
                          </h3>
                          <span style={{ fontSize: '17px', fontWeight: '800', color: 'var(--ink-primary)', fontFamily: 'var(--font-mono)' }}>
                            ${item.price}
                          </span>
                        </div>

                        <div style={{ fontSize: '13.5px', fontWeight: '600', color: 'var(--ink-secondary)', marginBottom: '4px' }}>
                          {item.artist}
                        </div>

                        <div style={{ fontSize: '12px', color: 'var(--ink-muted)', marginBottom: '8px' }}>
                          {item.medium} {item.dimensions ? `• ${item.dimensions}` : ''}
                        </div>
                      </div>

                      <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)' }}>
                          {item.location || 'Studio Verified'}
                        </span>

                        <button
                          onClick={(e) => handleAdd(item, e)}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '7px 16px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '11.5px',
                            fontFamily: 'var(--font-mono)',
                            fontWeight: '700',
                            backgroundColor: isAdded ? 'var(--accent-green)' : 'var(--ink-primary)',
                            color: '#FFFFFF',
                            transition: 'all var(--transition-fast)'
                          }}
                        >
                          {isAdded ? (
                            <>
                              <Check size={12} />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag size={12} />
                              <span>+ Add to Cart</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Guarantee & Studio Provenance Banner */}
          <div
            style={{
              marginTop: '80px',
              padding: '40px',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-light)',
              borderRadius: '24px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '32px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ padding: '10px', borderRadius: '50%', backgroundColor: 'rgba(233, 59, 129, 0.08)', color: 'var(--aurora-pink)' }}>
                <Award size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '14.5px', fontWeight: '800', color: 'var(--ink-primary)', marginBottom: '4px' }}>
                  Certificate of Authenticity
                </h4>
                <p style={{ fontSize: '12.5px', color: 'var(--ink-secondary)', lineHeight: '1.5' }}>
                  Each piece includes an archival certificate signed directly by the creator.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ padding: '10px', borderRadius: '50%', backgroundColor: 'rgba(255, 171, 46, 0.08)', color: 'var(--aurora-amber)' }}>
                <Truck size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '14.5px', fontWeight: '800', color: 'var(--ink-primary)', marginBottom: '4px' }}>
                  Museum-Grade Packaging
                </h4>
                <p style={{ fontSize: '12.5px', color: 'var(--ink-secondary)', lineHeight: '1.5' }}>
                  Reinforced flat-pack or wooden crate shipping with temperature-safe buffering.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ padding: '10px', borderRadius: '50%', backgroundColor: 'rgba(62, 123, 250, 0.08)', color: 'var(--aurora-blue)' }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '14.5px', fontWeight: '800', color: 'var(--ink-primary)', marginBottom: '4px' }}>
                  14-Day Studio Return
                </h4>
                <p style={{ fontSize: '12.5px', color: 'var(--ink-secondary)', lineHeight: '1.5' }}>
                  Experience the piece in your space with complete peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artwork Detail Modal */}
      {selectedArtModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            backgroundColor: 'rgba(12, 12, 14, 0.75)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.2s ease-out'
          }}
          onClick={() => setSelectedArtModal(null)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '28px',
              maxWidth: '840px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
              border: '1px solid var(--border-light)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              position: 'relative',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArtModal(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.92)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#121212',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <X size={18} />
            </button>

            {/* Artwork Big Image */}
            <div style={{ backgroundColor: '#1A1A1A', minHeight: '340px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={selectedArtModal.image}
                alt={selectedArtModal.title}
                style={{ width: '100%', height: '100%', maxHeight: '480px', objectFit: 'cover' }}
              />
            </div>

            {/* Info Side */}
            <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--aurora-coral)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>
                  {selectedArtModal.category || 'Curated Artwork'}
                </div>

                <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--ink-primary)', letterSpacing: '-0.03em', marginBottom: '8px' }}>
                  {selectedArtModal.title}
                </h2>

                <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ink-secondary)', marginBottom: '16px' }}>
                  Artist: {selectedArtModal.artist} {selectedArtModal.location ? `(${selectedArtModal.location})` : ''}
                </div>

                <p style={{ fontSize: '13.5px', color: 'var(--ink-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
                  {selectedArtModal.description || 'Archival fine art piece created as part of the aya+ atelier master collection.'}
                </p>

                <div style={{ backgroundColor: 'var(--bg-surface-subtle)', padding: '16px', borderRadius: '14px', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--ink-muted)' }}>Medium</span>
                    <span style={{ fontWeight: '600', color: 'var(--ink-primary)' }}>{selectedArtModal.medium}</span>
                  </div>
                  {selectedArtModal.dimensions && (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--ink-muted)' }}>Dimensions</span>
                      <span style={{ fontWeight: '600', color: 'var(--ink-primary)' }}>{selectedArtModal.dimensions}</span>
                    </div>
                  )}
                  {selectedArtModal.edition && (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--ink-muted)' }}>Edition</span>
                      <span style={{ fontWeight: '600', color: 'var(--ink-primary)' }}>{selectedArtModal.edition}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '13px', color: 'var(--ink-muted)' }}>Purchase Price</span>
                  <span style={{ fontSize: '24px', fontWeight: '800', color: 'var(--ink-primary)', fontFamily: 'var(--font-mono)' }}>
                    ${selectedArtModal.price}
                  </span>
                </div>

                <button
                  onClick={() => {
                    handleAdd(selectedArtModal);
                    setSelectedArtModal(null);
                  }}
                  className="btn-pill-solid"
                  style={{ width: '100%', justifyContent: 'center', padding: '13px' }}
                >
                  <ShoppingBag size={15} />
                  <span>Add to Cart • ${selectedArtModal.price}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .back-btn:hover {
          color: var(--ink-primary) !important;
        }
        .market-art-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(12, 12, 14, 0.1), 0 0 20px rgba(233, 59, 129, 0.08);
          border-color: rgba(233, 59, 129, 0.3);
        }
        .market-art-card:hover .market-art-img {
          transform: scale(1.04);
        }
      `}</style>
    </div>
  );
};
