import React, { useState, useEffect } from 'react';
import { Star, MapPin, Maximize2, X, CheckCircle, ExternalLink, Calendar } from 'lucide-react';

export default function Portfolio({ onOpenBooking }) {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Living Room', 'Kitchen & Dining', 'Master Bedroom', 'Commercial & Studio'];

  useEffect(() => {
    fetchProjects(activeCategory);
  }, [activeCategory]);

  const fetchProjects = async (category) => {
    setLoading(true);
    try {
      const url = category === 'All' ? '/api/projects' : `/api/projects?category=${encodeURIComponent(category)}`;
      const res = await fetch(url);
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error('Failed to load portfolio projects', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="portfolio" style={{ padding: '120px 24px', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px auto' }}>
          <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Portfolio Showcase
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', color: 'var(--text-primary)', marginTop: '8px', marginBottom: '16px' }}>
            Featured Masterpieces
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Explore curated architectural transformations spanning ultra-luxury penthouses, minimalist havens, and ergonomic workspaces.
          </p>
        </div>

        {/* Category Filter Tabs */}
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
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>
            Loading exquisite projects...
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '32px' }}>
            {projects.map((project) => (
              <div 
                key={project._id} 
                className="glass-card"
                style={{ overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Showcase Container */}
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
                      background: 'rgba(10, 12, 15, 0.75)', 
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
                      color: '#0A0C0F', 
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

                {/* Project Details Content */}
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

                  {/* Footer Info Row */}
                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                    <div>
                      <span style={{ color: 'var(--text-secondary)', display: 'block' }}>Area</span>
                      <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{project.areaSqFt} sq.ft</span>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-secondary)', display: 'block' }}>Est. Investment</span>
                      <span style={{ fontWeight: '600', color: 'var(--accent-gold)' }}>{project.estimatedCost}</span>
                    </div>
                    <div style={{ background: 'var(--accent-gold-glow)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Maximize2 size={16} color="var(--accent-gold)" />
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
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
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Project Value</div>
                <div style={{ fontSize: '1.6rem', color: 'var(--accent-gold)', fontFamily: 'var(--font-serif)', fontWeight: '700' }}>
                  {selectedProject.estimatedCost}
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
              {selectedProject.features?.map((feat, i) => (
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
                className="btn-primary" 
                onClick={() => {
                  setSelectedProject(null);
                  onOpenBooking();
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
