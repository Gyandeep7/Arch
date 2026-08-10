import React from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck, Layers } from 'lucide-react';

export default function HeroSection({ onOpenBooking }) {
  return (
    <section 
      style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '140px 24px 80px 24px',
        overflow: 'hidden'
      }}
    >
      {/* Background Graphic Overlay & Hero Image */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(to right, var(--bg-primary) 30%, rgba(10, 12, 15, 0.4) 100%), url('/images/arch_hero_interior.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.85,
          zIndex: 1
        }}
      />

      {/* Decorative Glow Orb */}
      <div 
        style={{
          position: 'absolute',
          top: '25%',
          left: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(50px)',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      <div 
        style={{ 
          maxWidth: '1300px', 
          margin: '0 auto', 
          width: '100%', 
          position: 'relative', 
          zIndex: 10 
        }}
      >
        <div style={{ maxWidth: '780px' }}>
          
          {/* Badge */}
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--accent-gold-glow)',
              border: '1px solid var(--border-active)',
              color: 'var(--accent-gold)',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginBottom: '24px',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}
          >
            <Sparkles size={16} />
            <span>Award-Winning Interior Architecture Studio</span>
          </div>

          {/* Main Title */}
          <h1 
            style={{ 
              fontSize: 'clamp(2.8rem, 5vw, 4.8rem)', 
              lineHeight: 1.1, 
              color: 'var(--text-primary)',
              marginBottom: '24px'
            }}
          >
            Redefining Modern <span className="text-gradient">Architectural & Interior</span> Grandeur.
          </h1>

          {/* Subtitle */}
          <p 
            style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-secondary)', 
              lineHeight: 1.7,
              marginBottom: '40px',
              fontWeight: '400'
            }}
          >
            From minimalist luxury residences in Worli & Jubilee Hills to high-end executive studio environments — Arch crafts bespoke spatial experiences designed for timeless elegance.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', marginBottom: '64px' }}>
            <a href="#portfolio" className="btn-primary" style={{ textDecoration: 'none', fontSize: '1rem', padding: '16px 36px' }}>
              <span>View Signature Projects</span>
              <ArrowRight size={20} />
            </a>
            
            <a href="#calculator" className="btn-secondary" style={{ textDecoration: 'none', fontSize: '1rem', padding: '16px 36px' }}>
              <span>Calculate Project Cost (₹)</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div 
            className="glass-panel" 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
              gap: '24px', 
              padding: '28px 32px' 
            }}
          >
            <div>
              <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', fontWeight: '700' }}>
                140+
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                Luxurious Spaces Completed
              </div>
            </div>

            <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '24px' }}>
              <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', fontWeight: '700' }}>
                ₹750 Cr+
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                Real Estate Value Enhanced
              </div>
            </div>

            <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '24px' }}>
              <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', fontWeight: '700' }}>
                18
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                International Excellence Awards
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
