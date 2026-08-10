import React, { useState } from 'react';
import { Layers, Check, Sparkles } from 'lucide-react';

export default function MaterialVisualizer() {
  const [activeBoard, setActiveBoard] = useState(0);

  const moodboards = [
    {
      title: 'Monolithic Penthouse',
      subtitle: 'Obsidian elegance & smoked architectural glass',
      image: '/images/arch_after.jpg',
      materials: [
        { name: 'Nero Marquina Marble', type: 'Fireplace Surround', color: '#16191E' },
        { name: 'Smoked Grey Glass', type: 'Partitioning', color: '#444B57' },
        { name: 'Italian Saddle Leather', type: 'Custom Seating', color: '#804E32' },
        { name: 'Champagne Brass Trim', type: 'Hardware Accents', color: '#D4AF37' }
      ]
    },
    {
      title: 'Warm Japandi Organic',
      subtitle: 'Natural white oak textures & calm minimalist tones',
      image: '/images/arch_kitchen.jpg',
      materials: [
        { name: 'Fluted White Oak', type: 'Wood Millwork', color: '#C8B9AA' },
        { name: 'Taj Mahal Quartzite', type: 'Stone Island', color: '#DFD8CC' },
        { name: 'Brushed Champagne Gold', type: 'Metal Fixtures', color: '#D4AF37' },
        { name: 'Custom Textured Plaster', type: 'Wall Finish', color: '#ECE8E1' }
      ]
    },
    {
      title: 'Serene Sanctuary Suite',
      subtitle: 'Tactile suede, plush acoustic fabric & soft glow',
      image: '/images/arch_bedroom.jpg',
      materials: [
        { name: 'Acoustic Plush Suede', type: 'Headboard Wall', color: '#8F847A' },
        { name: 'Natural Grain Walnut', type: 'Wardrobe Cabinetry', color: '#4E362B' },
        { name: 'Muted Brass Accents', type: 'Hardware', color: '#BBA052' },
        { name: 'Silk Wool Sheer Drapery', type: 'Window Treatment', color: '#F3EFE9' }
      ]
    }
  ];

  return (
    <section id="materials" style={{ padding: '120px 24px', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px auto' }}>
          <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Layers size={18} />
            <span>3D Material & Surface Atelier</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', color: 'var(--text-primary)', marginTop: '8px', marginBottom: '16px' }}>
            Interactive Material Palettes
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Immerse yourself in carefully curated material compositions sourced from premier Italian stone quarries and Nordic timber artisans.
          </p>
        </div>

        {/* Board Switcher Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
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

        {/* Active Board Display */}
        <div className="glass-panel" style={{ padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '36px', alignItems: 'center' }}>
          
          {/* Image Visualizer */}
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '380px', position: 'relative' }}>
            <img 
              src={moodboards[activeBoard].image} 
              alt={moodboards[activeBoard].title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px', background: 'linear-gradient(to top, rgba(7,8,10,0.9), transparent)' }}>
              <span style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase' }}>
                Architectural Composition
              </span>
              <h3 style={{ fontSize: '1.6rem', color: '#FFF', marginTop: '2px' }}>
                {moodboards[activeBoard].title}
              </h3>
            </div>
          </div>

          {/* Swatches List */}
          <div>
            <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>
              Swatches & Surface Finishes
            </span>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '24px' }}>
              {moodboards[activeBoard].subtitle}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
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
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
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
