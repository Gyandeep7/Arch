import React from 'react';
import { Compass, Pencil, PackageCheck, Home, ArrowRight } from 'lucide-react';
import { useAmber } from '../context/AmberContext';

export default function StudioProcess() {
  const { setIsInquiryOpen } = useAmber();

  const steps = [
    {
      num: '01',
      title: 'Discovery & Spatial Architecture',
      desc: 'We begin by conducting thorough architectural site surveys, establishing spatial layouts, and aligning on budget and lifestyle priorities.',
      icon: Compass
    },
    {
      num: '02',
      title: 'Material Palette & Millwork Blueprint',
      desc: 'Detailed architectural drawings, custom cabinetry elevations, and stone/timber selections crafted to establish a cohesive California casual aesthetic.',
      icon: Pencil
    },
    {
      num: '03',
      title: 'Custom Procurement & Vintage Curation',
      desc: 'Fabrication of bespoke furniture pieces alongside hand-selected antique textiles, rare ceramics, and heirloom vintage rugs from global artisans.',
      icon: PackageCheck
    },
    {
      num: '04',
      title: 'White-Glove Turnkey Installation',
      desc: 'Our team manages complete logistics, art placement, furniture placement, and styling — delivering a fully lived-in sanctuary.',
      icon: Home
    }
  ];

  return (
    <section id="process" style={{ padding: '120px 24px', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 72px auto' }}>
          <span style={{ fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent-amber)', fontWeight: '600', display: 'block', marginBottom: '12px' }}>
            Full-Service Design Studio
          </span>
          <h2 style={{ marginBottom: '16px' }}>
            Our Design Process
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            From initial architectural concept to final accessory styling, we oversee every detail of your residential transformation.
          </p>
        </div>

        {/* 4 Step Process Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '64px' }}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  padding: '40px 32px',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--accent-amber)', fontStyle: 'italic' }}>
                    {step.num}
                  </span>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                    <Icon size={22} />
                  </div>
                </div>

                <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div style={{ background: 'var(--bg-dark)', color: 'var(--text-light)', padding: '56px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '28px' }}>
          <div>
            <span style={{ fontSize: '0.78rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '6px' }}>
              Have A Residential Project In Mind?
            </span>
            <h3 style={{ fontSize: '2rem', color: '#FFFFFF' }}>
              Work With Amber Interior Design Studio
            </h3>
          </div>

          <button className="btn-amber" onClick={() => setIsInquiryOpen(true)} style={{ background: 'var(--accent-amber)', borderColor: 'var(--accent-amber)' }}>
            <span>Start Your Inquiry</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
