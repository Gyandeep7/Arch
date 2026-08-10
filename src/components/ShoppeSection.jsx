import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useAmber } from '../context/AmberContext';

export default function ShoppeSection() {
  const { addToCart } = useAmber();
  const [activeTab, setActiveTab] = useState('All');

  const products = [
    {
      id: 'sh_1',
      title: 'Bespoke Oak Slipcovered Armchair',
      category: 'Furniture',
      price: 2450,
      image: '/images/shoppe_chair.jpg',
      description: 'Handcrafted white oak frame with removable Belgian oat linen slipcover. Plush down blend cushion for deep relaxed comfort.'
    },
    {
      id: 'sh_2',
      title: 'Artisanal Distressed Terra Cotta Urn',
      category: 'Vases & Stoneware',
      price: 380,
      image: '/images/shoppe_chair.jpg',
      description: 'Hand-shaped by ceramic artisans with an aged patina finish. Designed to bring organic warmth to shelving or console tables.'
    },
    {
      id: 'sh_3',
      title: 'Vintage Striped Wool Throw Pillow',
      category: 'Textiles',
      price: 165,
      image: '/images/shoppe_chair.jpg',
      description: 'Made from 100% hand-spun vintage sheep wool with natural vegetable dyes and feather-down insert.'
    },
    {
      id: 'sh_4',
      title: 'Travertine Monolith Side Table',
      category: 'Furniture',
      price: 1850,
      image: '/images/shoppe_chair.jpg',
      description: 'Solid honed Roman travertine block table with subtle natural veining and velvet bottom foot pads.'
    }
  ];

  const filteredProducts = activeTab === 'All'
    ? products
    : products.filter(p => p.category === activeTab);

  return (
    <section id="shoppe" style={{ padding: '120px 24px', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 64px auto' }}>
          <span style={{ fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent-amber)', fontWeight: '600', display: 'block', marginBottom: '12px' }}>
            Shoppe Arch Interiors
          </span>
          <h2 style={{ marginBottom: '16px' }}>
            Curated Home Decor & Custom Furniture
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            Shop heirloom-quality furniture, artisanal ceramics, hand-woven textiles, and decor curated by Arch Studio.
          </p>
        </div>

        {/* Filter Badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {['All', 'Furniture', 'Vases & Stoneware', 'Textiles'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab ? 'var(--text-primary)' : 'transparent',
                color: activeTab === tab ? 'var(--bg-primary)' : 'var(--text-primary)',
                border: '1px solid var(--text-primary)',
                padding: '8px 20px',
                fontSize: '0.78rem',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}>
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ position: 'relative', height: '280px', background: '#F8F6F2', overflow: 'hidden' }}>
                <img 
                  src={product.image} 
                  alt={product.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                
                <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'var(--accent-amber)', color: '#FFF', fontSize: '0.72rem', padding: '4px 10px', textTransform: 'uppercase', fontWeight: '600' }}>
                  {product.category}
                </div>
              </div>

              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{product.title}</h3>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--accent-amber)', fontWeight: '600', marginBottom: '16px' }}>
                    ${product.price.toLocaleString()}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button 
                    onClick={() => addToCart(product)}
                    className="btn-amber"
                    style={{ flex: 1, justifyContent: 'center', padding: '10px 14px', fontSize: '0.75rem' }}
                  >
                    <Plus size={16} />
                    <span>Add To Cart</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
