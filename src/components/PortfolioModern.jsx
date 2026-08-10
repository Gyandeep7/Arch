import React, { useState } from 'react';
import { Star, MapPin, Maximize2, X, CheckCircle, Calendar } from 'lucide-react';
import { useModern } from '../context/ModernContext';

export default function PortfolioModern() {
  const { openConsultation, formatPrice } = useModern();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'proj_1',
      title: 'The Lumin Sky Villa',
      category: 'Living Room',
      location: 'Tribeca, New York',
      year: 2025,
      areaSqFt: 3400,
      baseCostUSD: 240000,
      description: 'A seamless blend of floor-to-ceiling glass paneling, smoked oak woodwork, and bespoke Italian minimalist furnishings designed for high-altitude urban luxury.',
      heroImage: '/images/arch_after.jpg',
      features: ['Custom Marble Fireplace', 'Motorized Solar Shading', 'Integrated Ambient LED Systems', 'Sub-Zero & Wolf Kitchen Suite'],
      designer: 'Elena Vance - Principal Architect',
      rating: 5.0
    },
    {
      id: 'proj_2',
      title: 'Obsidian Culinary Pavilion',
      category: 'Kitchen & Dining',
      location: 'Beverly Hills, CA',
      year: 2025,
      areaSqFt: 1800,
      baseCostUSD: 165000,
      description: 'Dark charcoal oak cabinetry harmonized with waterfall quartzite islands, brushed brass hardware, and concealed architectural ambient cove lighting.',
      heroImage: '/images/arch_kitchen.jpg',
      features: ['Monolithic Quartzite Island', 'Hand-Crafted Brass Accents', 'Hidden Pantry Vault', 'Climate-Controlled Wine Display'],
      designer: 'Marcus Chen - Master Kitchen Lead',
      rating: 4.9
    },
    {
      id: 'proj_3',
      title: 'Sanctuary Master Suite',
      category: 'Master Bedroom',
      location: 'Aspen, Colorado',
      year: 2024,
      areaSqFt: 2200,
      baseCostUSD: 190000,
      description: 'An oasis of serenity incorporating acoustic plush wall panels, warm concealed glow lighting, natural walnut fluting, and dynamic panoramic glass accents.',
      heroImage: '/images/arch_bedroom.jpg',
      features: ['Sound-Dampening Suede Headboard Wall', 'Frameless Glass Balcony View', 'En-Suite Spa Bath', 'Custom Walk-In Wardrobe'],
      designer: 'Sophia Al-Mansoor - Residential Lead',
      rating: 5.0
    },
    {
      id: 'proj_4',
      title: 'Apex Financial Penthouse',
      category: 'Commercial & Studio',
      location: 'Miami, Florida',
      year: 2025,
      areaSqFt: 5500,
      baseCostUSD: 420000,
      description: 'High-performance executive suites featuring glass partition walls, ergonomic Italian leather seating, and biophilic acoustic green installations.',
      heroImage: '/images/arch_after.jpg',
      features: ['Biophilic Acoustic Living Walls', 'Smart Glass Privacy Tinting', 'Custom Walnut Conference Table', 'Full Lutron Lighting Integration'],
      designer: 'David Ross - Workspace Lead',
      rating: 4.8
    }
  ];

  const categories = ['All', 'Living Room', 'Kitchen & Dining', 'Master Bedroom', 'Commercial & Studio'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" style={{ padding: '120px 24px', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px auto' }}>
          <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Portfolio Showcase
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', color: 'var(--text-primary)', marginTop: '8px', marginBottom: '16px' }}>
            Featured Masterpieces
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Explore curated architectural transformations spanning ultra-luxury penthouses, minimalist havens, and executive studios.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '48px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pill-tab ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '32px' }}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="glass-card"
              style={{ overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container */}
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img 
                  src={project.heroImage} 
                  alt={project.title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' 
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />

                <div 
                  style={{ 
                    position: 'absolute', 
                    top: '16px', 
                    right: '16px', 
                    background: 'rgba(7, 8, 10, 0.8)', 
                    backdropFilter: 'blur(8px)', 
                    padding: '6px 14px', 
                    borderRadius: 'var(--radius-full)', 
                    fontSize: '0.8rem', 
                    color: 'var(--accent-gold)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px',
                    fontWeight: '600'
                  }}
                >
                  <Star size={14} fill="var(--accent-gold)" />
                  <span>{project.rating}</span>
                </div>

                <div 
                  style={{ 
                    position: 'absolute', 
                    bottom: '16px', 
                    left: '16px', 
                    background: 'var(--accent-gold)', 
                    color: '#07080A', 
                    padding: '4px 12px', 
                    borderRadius: '4px', 
                    fontSize: '0.75rem', 
                    fontWeight: '700',
                    textTransform: 'uppercase'
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                    {project.title}
                  </h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '14px' }}>
                    <MapPin size={15} color="var(--accent-gold)" />
                    <span>{project.location}</span>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineClamp: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '20px' }}>
                    {project.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                  <div>
                    <span style={{ color: 'var(--text-secondary)', display: 'block' }}>Area</span>
                    <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{project.areaSqFt} sq.ft</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-secondary)', display: 'block' }}>Est. Investment</span>
                    <span style={{ fontWeight: '600', color: 'var(--accent-gold)' }}>{formatPrice(project.baseCostUSD)}</span>
                  </div>
                  <div style={{ background: 'var(--accent-gold-glow)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Maximize2 size={16} color="var(--accent-gold)" />
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Lightbox Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '850px' }}>
            
            <button 
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>

            <img 
              src={selectedProject.heroImage} 
              alt={selectedProject.title}
              style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '24px' }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
              <div>
                <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>
                  {selectedProject.category} • Completed {selectedProject.year}
                </span>
                <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginTop: '4px' }}>
                  {selectedProject.title}
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', marginTop: '6px' }}>
                  <MapPin size={16} color="var(--accent-gold)" />
                  <span>{selectedProject.location}</span>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Project Investment</div>
                <div style={{ fontSize: '1.6rem', color: 'var(--accent-gold)', fontFamily: 'var(--font-serif)', fontWeight: '700' }}>
                  {formatPrice(selectedProject.baseCostUSD)}
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px', fontSize: '1.02rem' }}>
              {selectedProject.description}
            </p>

            <h4 style={{ color: 'var(--text-primary)', marginBottom: '14px', fontSize: '1.1rem' }}>
              Architectural & Interior Highlights
            </h4>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px', marginBottom: '32px' }}>
              {selectedProject.features.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--bg-primary)', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <CheckCircle size={18} color="var(--accent-gold)" />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{feat}</span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>Lead Architectural Designer</span>
                <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{selectedProject.designer}</span>
              </div>

              <button 
                className="btn-gold" 
                onClick={() => {
                  setSelectedProject(null);
                  openConsultation({ projectType: selectedProject.title });
                }}
              >
                <Calendar size={18} />
                <span>Request Similar Design</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
