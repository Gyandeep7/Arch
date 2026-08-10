import React, { useState } from 'react';
import { ArrowUpRight, X, Check, MapPin } from 'lucide-react';
import { useAmber } from '../context/AmberContext';

export default function ProjectsGrid() {
  const { setIsInquiryOpen } = useAmber();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'p1',
      title: 'Oak Haven Residence',
      category: 'Estate',
      location: 'California Coast',
      year: '2025',
      image: '/images/amber_hero.jpg',
      description: 'A full-scale interior architecture transformation featuring raw exposed timber ceiling beams, custom slipcovered Belgian linen sofas, honed travertine fireplaces, and distressed vintage rugs.',
      details: [
        'Custom White Oak Millwork throughout kitchen and library',
        'Hand-plastered walls in warm off-white linen tones',
        'Curated 19th-century vintage Turkish runners and antique ceramics',
        'Custom Shoppe Arch Interiors seating and lighting'
      ]
    },
    {
      id: 'p2',
      title: 'Canyon Cool Retreat',
      category: 'Ranch & Mountain',
      location: 'Ojai Valley, CA',
      year: '2024',
      image: '/images/amber_ojai.jpg',
      description: 'Embracing rusticity and organic warmth with terracotta tile flooring, soapstone kitchen countertops, unlacquered brass hardware, and hand-forged lighting pendants.',
      details: [
        'Custom soapstone culinary island with open oak shelving',
        'Reclaimed vintage timber dining table and bentwood chairs',
        'Terracotta tile patio seamlessly connecting indoors and outdoor mountain views',
        'Linen drapery in earthy taupe and olive hues'
      ]
    },
    {
      id: 'p3',
      title: 'Pacific Palisades Estate',
      category: 'Coastal',
      location: 'Pacific Palisades, CA',
      year: '2025',
      image: '/images/amber_hero.jpg',
      description: 'A serene master bedroom suite and open living pavilion designed with plush acoustic suede headboard paneling, natural wool textiles, and floor-to-ceiling glass.',
      details: [
        'Custom wool upholstered bed frame with vintage accent pillows',
        'En-suite bath featuring honed Calacatta marble and aged bronze fixtures',
        'Custom built-in oak desk and reading nook',
        'Integrated ambient lighting creating a golden evening glow'
      ]
    },
    {
      id: 'p4',
      title: 'Montecito Haven',
      category: 'Coastal',
      location: 'Montecito, CA',
      year: '2024',
      image: '/images/amber_ojai.jpg',
      description: 'Combining clean modern lines with Arch signature lived-in comfort. Monolithic stone fireplaces paired with plush mohair armchairs and antique pottery.',
      details: [
        'Monolithic limestone fireplace surround',
        'Custom mohair and leather seating arrangements',
        'Architectural steel-framed glass doors',
        'Curated vintage art gallery wall'
      ]
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" style={{ padding: '120px 24px', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 64px auto' }}>
          <span style={{ fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent-amber)', fontWeight: '600', display: 'block', marginBottom: '12px' }}>
            Portfolio of Work
          </span>
          <h2 style={{ marginBottom: '16px' }}>
            Selected Residential Work
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            Explore our portfolio of full-service interior design projects across coastal California, mountain ranches, and private estates.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {['All', 'Coastal', 'Ranch & Mountain', 'Estate'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? 'var(--text-primary)' : 'transparent',
                color: activeCategory === cat ? 'var(--bg-primary)' : 'var(--text-primary)',
                border: '1px solid var(--text-primary)',
                padding: '10px 24px',
                fontSize: '0.78rem',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(440px, 1fr))', gap: '40px' }}>
          {filteredProjects.map(proj => (
            <div 
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              style={{
                cursor: 'pointer',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                overflow: 'hidden',
                transition: 'all var(--transition-smooth)'
              }}
            >
              <div style={{ height: '360px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'var(--bg-primary)', padding: '6px 14px', fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '600' }}>
                  {proj.category}
                </div>
              </div>

              <div style={{ padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '1.8rem' }}>{proj.title}</h3>
                  <ArrowUpRight size={22} color="var(--accent-amber)" />
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '14px' }}>
                  <MapPin size={15} color="var(--accent-amber)" />
                  <span>{proj.location}</span>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineClamp: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {proj.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Lightbox Modal */}
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
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={20} />
            </button>

            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              style={{ width: '100%', height: '380px', objectFit: 'cover', marginBottom: '28px' }}
            />

            <span style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent-amber)', fontWeight: '600' }}>
              {selectedProject.category} • Completed {selectedProject.year}
            </span>
            
            <h2 style={{ fontSize: '2.4rem', marginTop: '4px', marginBottom: '12px' }}>
              {selectedProject.title}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              <MapPin size={16} color="var(--accent-amber)" />
              <span>{selectedProject.location}</span>
            </div>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '28px' }}>
              {selectedProject.description}
            </p>

            <h4 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Key Architectural & Styling Features</h4>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px', marginBottom: '36px' }}>
              {selectedProject.details.map((detail, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: 'var(--bg-secondary)', padding: '14px 18px', border: '1px solid var(--border-color)' }}>
                  <Check size={18} color="var(--accent-amber)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{detail}</span>
                </div>
              ))}
            </div>

            <button 
              className="btn-amber" 
              onClick={() => {
                setSelectedProject(null);
                setIsInquiryOpen(true);
              }}
            >
              <span>Inquire About A Similar Design</span>
            </button>

          </div>
        </div>
      )}

    </section>
  );
}
