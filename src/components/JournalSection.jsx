import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function JournalSection() {
  const articles = [
    {
      title: 'How to Layer Vintage Rugs with Modern Furniture',
      category: 'Design Advice',
      date: 'July 2026',
      readTime: '5 min read',
      snippet: 'Discover Arch Studio’s secret to sourcing antique Turkish Oushaks and pairing them seamlessly with contemporary Belgian slipcovered armchairs.',
      image: '/images/amber_hero.jpg'
    },
    {
      title: 'The Art of Warm Neutrals: Choosing The Right Off-White',
      category: 'Color & Texture',
      date: 'June 2026',
      readTime: '4 min read',
      snippet: 'Navigating undertones in limewash, roman clay, and hand-plastered walls to create light-filled homes that feel cozy rather than cold.',
      image: '/images/amber_ojai.jpg'
    },
    {
      title: 'Behind the Design: Canyon Cool Master Kitchen',
      category: 'Project Reveal',
      date: 'May 2026',
      readTime: '7 min read',
      snippet: 'A step-by-step walkthrough of how we paired soapstone countertops with natural white oak cabinetry and hand-forged brass pendants.',
      image: '/images/amber_hero.jpg'
    }
  ];

  return (
    <section id="journal" style={{ padding: '120px 24px', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 64px auto' }}>
          <span style={{ fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent-amber)', fontWeight: '600', display: 'block', marginBottom: '12px' }}>
            All Sorts Of by Arch • Design Journal
          </span>
          <h2 style={{ marginBottom: '16px' }}>
            Articles & Design Insights
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            Read Arch Studio’s thoughts on interior architecture, vintage rug sourcing, and creating lived-in luxury.
          </p>
        </div>

        {/* Articles Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px' }}>
          {articles.map((art, idx) => (
            <article 
              key={idx}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ height: '240px', overflow: 'hidden' }}>
                <img 
                  src={art.image} 
                  alt={art.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--accent-amber)', marginBottom: '12px', fontWeight: '600' }}>
                    <span>{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 style={{ fontSize: '1.45rem', marginBottom: '12px', lineHeight: 1.3 }}>
                    {art.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                    {art.snippet}
                  </p>
                </div>

                <a 
                  href="#" 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    color: 'var(--text-primary)', 
                    textDecoration: 'none', 
                    fontSize: '0.85rem', 
                    letterSpacing: '1px', 
                    textTransform: 'uppercase', 
                    fontWeight: '600' 
                  }}
                >
                  <span>Read Article</span>
                  <ArrowUpRight size={16} color="var(--accent-amber)" />
                </a>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
