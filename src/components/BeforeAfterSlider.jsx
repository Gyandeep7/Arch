import React, { useState, useRef } from 'react';
import { MoveHorizontal, Sparkles } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) handleMove(e.touches[0].clientX);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      style={{
        position: 'relative',
        width: '100%',
        height: '480px',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid var(--border-gold)',
        boxShadow: 'var(--shadow-main)',
        cursor: 'ew-resize',
        userSelect: 'none'
      }}
    >
      {/* "AFTER" Image (Full background) */}
      <img 
        src="/images/arch_after.jpg" 
        alt="Arch Transformed Luxury Penthouse"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div 
        style={{ 
          position: 'absolute', 
          top: '20px', 
          right: '20px', 
          background: 'rgba(7, 8, 10, 0.85)', 
          backdropFilter: 'blur(8px)', 
          padding: '6px 16px', 
          borderRadius: 'var(--radius-full)', 
          color: 'var(--accent-gold)', 
          fontSize: '0.8rem', 
          fontWeight: '700', 
          letterSpacing: '1px',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}
      >
        <Sparkles size={14} />
        <span>AFTER: ARCH BESPOKE TRANSFORMATION</span>
      </div>

      {/* "BEFORE" Image (Clipped overlay) */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: `${sliderPos}%`,
          overflow: 'hidden',
          borderRight: '2px solid var(--accent-gold)'
        }}
      >
        <img 
          src="/images/arch_before.jpg" 
          alt="Raw Unfinished Spatial Blueprint"
          style={{ width: '100%', height: '100%', objectFit: 'cover', maxWidth: 'none' }}
        />
        <div 
          style={{ 
            position: 'absolute', 
            top: '20px', 
            left: '20px', 
            background: 'rgba(7, 8, 10, 0.85)', 
            backdropFilter: 'blur(8px)', 
            padding: '6px 16px', 
            borderRadius: 'var(--radius-full)', 
            color: '#FFFFFF', 
            fontSize: '0.8rem', 
            fontWeight: '700', 
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}
        >
          BEFORE: RAW SPATIAL CANVAS
        </div>
      </div>

      {/* Drag Divider Handle */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${sliderPos}%`,
          transform: 'translateX(-50%)',
          width: '4px',
          background: 'var(--accent-gold)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10
        }}
      >
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'var(--accent-gold)',
            color: '#07080A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)'
          }}
        >
          <MoveHorizontal size={20} strokeWidth={2.5} />
        </div>
      </div>

    </div>
  );
}
