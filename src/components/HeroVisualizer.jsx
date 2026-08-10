import React from 'react';
import { ArrowRight, Sparkles, Award } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { useModern } from '../context/ModernContext';

export default function HeroVisualizer() {
  const { openConsultation, currency } = useModern();

  return (
    <section 
      style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        padding: '160px 24px 80px 24px',
        overflow: 'hidden'
      }}
    >
      {/* Glow Orbs */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Editorial Badge */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--accent-gold-glow)',
              border: '1px solid var(--border-gold)',
              color: 'var(--accent-gold)',
              fontSize: '0.85rem',
              fontWeight: '600',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}
          >
            <Sparkles size={16} />
            <span>2026 Next-Gen Luxury Architectural Studio</span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 40px auto' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 5.5vw, 5.2rem)', lineHeight: 1.08, marginBottom: '20px' }}>
            Engineering Modern <br />
            <span className="text-gradient">Architectural Perfection.</span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: '400' }}>
            From high-altitude penthouse sky villas in Tribeca & Worli to minimalist coastal havens — Arch crafts bespoke spatial experiences designed for timeless elegance.
          </p>
        </div>

        {/* Interactive Before/After Renovation Slider Widget */}
        <div style={{ marginBottom: '56px' }}>
          <BeforeAfterSlider />
          <div style={{ textAlign: 'center', marginTop: '12px', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
            💡 <strong style={{ color: 'var(--accent-gold)' }}>Interactive Visualizer:</strong> Drag the center handle left/right to reveal spatial transformation
          </div>
        </div>

        {/* Action CTAs & Quick Metrics */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '64px' }}>
          <button className="btn-gold" onClick={() => openConsultation()} style={{ padding: '16px 36px', fontSize: '1rem' }}>
            <span>Book Private Consultation</span>
            <ArrowRight size={20} />
          </button>

          <a href="#calculator" className="btn-outline-gold" style={{ padding: '16px 36px', fontSize: '1rem', textDecoration: 'none' }}>
            <span>Calculate Project Cost ({currency === 'USD' ? '$' : '₹'})</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div 
          className="glass-panel" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '24px', 
            padding: '32px 40px',
            textAlign: 'center'
          }}
        >
          <div>
            <div style={{ fontSize: '2.4rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', fontWeight: '700' }}>
              140+
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Bespoke Spaces Completed
            </div>
          </div>

          <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '24px' }}>
            <div style={{ fontSize: '2.4rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', fontWeight: '700' }}>
              {currency === 'USD' ? '$95M+' : '₹750 Cr+'}
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Real Estate Value Enhanced
            </div>
          </div>

          <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '24px' }}>
            <div style={{ fontSize: '2.4rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', fontWeight: '700' }}>
              18
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              International Design Awards
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
