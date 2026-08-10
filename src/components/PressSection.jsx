import React from 'react';

export default function PressSection() {
  const mediaFeatures = [
    { outlet: 'Architectural Digest', quote: 'Amber Lewis has redefined California casual design with her lived-in, earthy aesthetic.', tag: 'AD100 Top Designer' },
    { outlet: 'ELLE Decor', quote: 'Masterful layering of vintage textiles, aged brass, and soft neutral palettes.', tag: 'A-List Designer' },
    { outlet: 'Vogue Living', quote: 'The go-to interior designer for high-end residential sanctuaries with authentic soul.', tag: 'Cover Story Feature' },
    { outlet: 'House Beautiful', quote: 'Seamless blend of custom furniture fabrication and rare global antiques.', tag: 'Best Whole Home Design' }
  ];

  return (
    <section id="press" style={{ padding: '100px 24px', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent-amber)', fontWeight: '600', display: 'block' }}>
            Press & Media Accolades
          </span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '6px' }}>Featured In</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
          {mediaFeatures.map((item, idx) => (
            <div 
              key={idx}
              style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                padding: '36px 28px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent-amber)', fontWeight: '600', display: 'block', marginBottom: '12px' }}>
                  {item.tag}
                </span>

                <h3 style={{ fontSize: '1.7rem', fontFamily: 'var(--font-serif)', marginBottom: '16px' }}>
                  {item.outlet}
                </h3>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.6 }}>
                  "{item.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
