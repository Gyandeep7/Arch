import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal, Sparkles } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

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
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="before-after-container"
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(320px, 50vh, 480px)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid var(--border-gold)',
        boxShadow: 'var(--shadow-main)',
        cursor: 'ew-resize',
        userSelect: 'none',
        touchAction: 'none'
      }}
    >
      {/* "AFTER" Image (Full background) */}
      <img 
        src="/images/arch_after.jpg" 
        alt="Arch Transformed Luxury Penthouse"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      <div className="slider-badge slider-badge-after">
        <Sparkles size={14} />
        <span className="badge-full-text">AFTER: ARCH BESPOKE</span>
        <span className="badge-short-text">AFTER</span>
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
          style={{ 
            width: containerWidth ? `${containerWidth}px` : '100vw', 
            height: '100%', 
            objectFit: 'cover', 
            maxWidth: 'none' 
          }}
        />
        <div className="slider-badge slider-badge-before">
          <span className="badge-full-text">BEFORE: RAW CANVAS</span>
          <span className="badge-short-text">BEFORE</span>
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
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--accent-gold)',
            color: '#07080A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)'
          }}
        >
          <MoveHorizontal size={18} strokeWidth={2.5} />
        </div>
      </div>

    </div>
  );
}
