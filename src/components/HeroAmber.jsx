import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useAmber } from '../context/AmberContext';

export default function HeroAmber() {
  const { setIsInquiryOpen } = useAmber();

  return (
    <section 
      style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '160px 24px 80px 24px',
        background: 'var(--bg-primary)'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '64px', alignItems: 'center' }}>
        
        {/* Left Editorial Intro */}
        <div>
          <span 
            style={{ 
              fontSize: '0.8rem', 
              letterSpacing: '3px', 
              textTransform: 'uppercase', 
              color: 'var(--accent-amber)', 
              fontWeight: '600',
              display: 'block',
              marginBottom: '16px'
            }}
          >
            Arch Interior Design Studio • California & Worldwide
          </span>

          <h1 style={{ marginBottom: '28px' }}>
            California Casual <br />
            <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Lived-In Luxury.</span>
          </h1>

          <blockquote 
            style={{ 
              borderLeft: '2px solid var(--accent-amber)', 
              paddingLeft: '20px', 
              marginBottom: '32px',
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              fontStyle: 'italic',
              lineHeight: 1.6
            }}
          >
            "We believe a home should be lived in, loved, and filled with pieces that tell a story. Arch creates spaces that feel refined, timeless, and effortlessly authentic."
            <footer style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontSize: '0.82rem', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '10px', color: 'var(--text-primary)', fontWeight: '600' }}>
              — Arch Studio Principal Designer
            </footer>
          </blockquote>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '40px' }}>
            Arch Interior Design is a full-service interior architecture and design firm serving clients worldwide. From ground-up residential builds to bespoke furniture curation, we bring spaces to life with organic textures, vintage heirlooms, and warm neutral tones.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px' }}>
            <a href="#projects" className="btn-amber">
              <span>View Residential Work</span>
              <ArrowRight size={16} />
            </a>

            <button className="btn-outline-amber" onClick={() => setIsInquiryOpen(true)}>
              <span>Inquire For Full Service Design</span>
            </button>
          </div>

        </div>

        {/* Right Editorial Image Frame */}
        <div style={{ position: 'relative' }}>
          <div 
            style={{ 
              borderRadius: 'var(--radius-sm)', 
              overflow: 'hidden', 
              boxShadow: 'var(--shadow-elevated)',
              position: 'relative',
              height: '580px'
            }}
          >
            <img 
              src="/images/amber_hero.jpg" 
              alt="Arch Interior Design Pacific Palisades Estate" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div 
              style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                padding: '24px 32px', 
                background: 'linear-gradient(to top, rgba(38,35,33,0.85), transparent)', 
                color: '#FFFFFF' 
              }}
            >
              <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                Featured Project
              </span>
              <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginTop: '2px' }}>
                Pacific Palisades Coastal Estate
              </h3>
            </div>
          </div>

          {/* AD100 Badge */}
          <div 
            style={{ 
              position: 'absolute', 
              top: '-24px', 
              right: '-24px', 
              background: 'var(--bg-secondary)', 
              border: '1px solid var(--border-color)', 
              padding: '20px', 
              maxWidth: '180px',
              textAlign: 'center',
              boxShadow: 'var(--shadow-subtle)'
            }}
            className="desktop-nav"
          >
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--accent-amber)', display: 'block', lineHeight: 1 }}>
              AD100
            </span>
            <span style={{ fontSize: '0.72rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginTop: '6px' }}>
              Architectural Digest Top Studio
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
