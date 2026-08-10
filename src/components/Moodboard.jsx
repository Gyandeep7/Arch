import React, { useState } from 'react';
import { Layers, Sparkles, Eye, Check } from 'lucide-react';

export default function Moodboard() {
  const [activeBoard, setActiveBoard] = useState(0);

  const moodboards = [
    {
      title: 'Warm Japandi Organic',
      subtitle: 'Natural textures & calm minimalist tones',
      image: '/images/arch_kitchen.jpg',
      materials: [
        { name: 'Fluted White Oak', type: 'Wood Millwork', color: '#D4C4B7' },
        { name: 'Taj Mahal Quartzite', type: 'Stone Island', color: '#E8E2D9' },
        { name: 'Brushed Champagne Gold', type: 'Metal Fixtures', color: '#D4AF37' },
        { name: 'Custom Textured Plaster', type: 'Wall Finish', color: '#F2EFE9' }
      ]
    },
    {
      title: 'Monolithic Penthouse',
      subtitle: 'Obsidian elegance & smoked architectural glass',
      image: '/images/arch_hero_interior.jpg',
      materials: [
        { name: 'Nero Marquina Marble', type: 'Fireplace Surround', color: '#1B1E23' },
        { name: 'Smoked Grey Glass', type: 'Partitioning', color: '#4A505C' },
        { name: 'Italian Saddle Leather', type: 'Custom Seating', color: '#8C5A3C' },
        { name: 'Linear Architectural LED', type: 'Ambient Cove', color: '#FFF8E7' }
      ]
    },
    {
      title: 'Serene Sanctuary Suite',
      subtitle: 'Tactile suede, plush acoustic fabric & soft glow',
      image: '/images/arch_bedroom.jpg',
      materials: [
        { name: 'Acoustic Plush Suede', type: 'Headboard Wall', color: '#9B9085' },
        { name: 'Natural Grain Walnut', type: 'Wardrobe Cabinetry', color: '#5C4033' },
        { name: 'Muted Brass Accents', type: 'Hardware', color: '#C5A059' },
        { name: 'Silk Wool Sheer Drapery', type: 'Window Treatment', color: '#FAF7F2' }
      ]
    }
  ];

  return (
    <section id="moodboard" style={{ padding: '120px 24px', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px auto' }}>
          <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <Layers size={18} />
            <span>Material & Texture Atelier</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', color: 'var(--text-primary)', marginTop: '8px', marginBottom: '16px' }}>
            Interactive Material Palettes
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Immerse yourself in carefully curated material compositions sourced from premier Italian and Nordic stone quarries and timber artisans.
          </p>
        </div>

        {/* Board Selection Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {moodboards.map((board, index) => (
            <button
              key={index}
              onClick={() => setActiveBoard(index)}
              className={`pill-tab ${activeBoard === index ? 'active' : ''}`}
            >
              {board.title}
            </button>
          ))}
        </div>

        {/* Active Board Display Grid */}
        <div className="glass-panel" style={{ padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '36px', alignItems: 'center' }}>
          
          {/* Visual Showcase Image */}
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '380px', position: 'relative' }}>
            <img 
              src={moodboards[activeBoard].image} 
              alt={moodboards[activeBoard].title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px', background: 'linear-gradient(to top, rgba(10,12,15,0.9), transparent)' }}>
              <span style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase' }}>
                Architectural Composition
              </span>
              <h3 style={{ fontSize: '1.6rem', color: '#FFF', marginTop: '2px' }}>
                {moodboards[activeBoard].title}
              </h3>
            </div>
          </div>

          {/* Material Swatches List */}
          <div>
            <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>
              Swatches & Finishes
            </span>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '24px' }}>
              {moodboards[activeBoard].subtitle}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {moodboards[activeBoard].materials.map((mat, i) => (
                <div 
                  key={i} 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div 
                      style={{ 
                        width: '42px', 
                        height: '42px', 
                        borderRadius: '8px', 
                        background: mat.color, 
                        border: '1px solid var(--border-color)',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                      }} 
                    />
                    <div>
                      <div style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '1rem' }}>
                        {mat.name}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        {mat.type}
                      </div>
                    </div>
                  </div>

                  <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--accent-gold)', background: 'var(--accent-gold-glow)', padding: '4px 10px', borderRadius: '4px' }}>
                    {mat.color}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
