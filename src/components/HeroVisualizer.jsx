import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { useModern } from '../context/ModernContext';

export default function HeroVisualizer() {
  const { openConsultation, currency } = useModern();

  return (
    <section 
      style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        padding: 'clamp(110px, 15vh, 160px) 16px 60px 16px',
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
          width: 'clamp(300px, 80vw, 600px)',
          height: 'clamp(300px, 80vw, 600px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Editorial Badge */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div className="hero-editorial-badge">
            <Sparkles size={14} />
            <span>2026 Next-Gen Architectural Studio</span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 36px auto' }}>
          <h1 className="hero-heading" style={{ fontSize: 'clamp(2.2rem, 6.5vw, 5.2rem)', lineHeight: 1.1, marginBottom: '18px' }}>
            Engineering Modern <br />
            <span className="text-gradient">Architectural Perfection.</span>
          </h1>

          <p className="hero-subtext" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: '400' }}>
            From high-altitude penthouse sky villas in Tribeca & Worli to minimalist coastal havens — Arch crafts bespoke spatial experiences designed for timeless elegance.
          </p>
        </div>

        {/* Interactive Before/After Renovation Slider Widget */}
        <div style={{ marginBottom: '48px' }}>
          <BeforeAfterSlider />
          <div style={{ textAlign: 'center', marginTop: '12px', color: 'var(--text-muted)', fontSize: '0.85rem', padding: '0 8px' }}>
            💡 <strong style={{ color: 'var(--accent-gold)' }}>Interactive Visualizer:</strong> Drag the center handle left/right to reveal spatial transformation
          </div>
        </div>

        {/* Action CTAs & Quick Metrics */}
        <div className="hero-actions">
          <button className="btn-gold hero-btn" onClick={() => openConsultation()}>
            <span>Book Private Consultation</span>
            <ArrowRight size={18} />
          </button>

          <a href="#calculator" className="btn-outline-gold hero-btn" style={{ textDecoration: 'none' }}>
            <span>Calculate Project Cost ({currency === 'USD' ? '$' : '₹'})</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="glass-panel hero-stats-grid">
          <div className="stat-card">
            <div className="stat-number">140+</div>
            <div className="stat-label">Bespoke Spaces Completed</div>
          </div>

          <div className="stat-card stat-card-border">
            <div className="stat-number">{currency === 'USD' ? '$95M+' : '₹750 Cr+'}</div>
            <div className="stat-label">Real Estate Value Enhanced</div>
          </div>

          <div className="stat-card stat-card-border">
            <div className="stat-number">18</div>
            <div className="stat-label">International Design Awards</div>
          </div>
        </div>

      </div>
    </section>
  );
}
