import React, { useState, useMemo } from 'react';
import { Calculator, Check, ShieldCheck, ArrowRight, Download, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function CostCalculator({ onOpenBooking }) {
  const { showToast } = useTheme();
  
  const [sqft, setSqft] = useState(2500);
  const [rooms, setRooms] = useState(4);
  const [tier, setTier] = useState('luxury'); // essential, luxury, bespoke
  const [selectedServices, setSelectedServices] = useState([
    'lighting',
    'millwork'
  ]);

  // Rates in INR per sq.ft
  const TIER_RATES = {
    essential: 2500,
    luxury: 4800,
    bespoke: 8500
  };

  const SERVICE_PRICES = {
    lighting: 450000,
    millwork: 1250000,
    automation: 750000,
    biophilic: 500000
  };

  // Real-time INR calculation engine
  const calculation = useMemo(() => {
    const baseRate = TIER_RATES[tier] || 4800;
    const baseCost = sqft * baseRate + (rooms * 150000);
    
    let servicesAddon = 0;
    selectedServices.forEach(srv => {
      servicesAddon += SERVICE_PRICES[srv] || 0;
    });

    const subtotal = baseCost + servicesAddon;
    const designFee = Math.round(subtotal * 0.12);
    const materials = Math.round(subtotal * 0.44);
    const labor = Math.round(subtotal * 0.26);
    const furnishings = Math.round(subtotal * 0.18);
    const totalEstimate = subtotal + designFee;

    return {
      designFee,
      materials,
      labor,
      furnishings,
      totalEstimate
    };
  }, [sqft, rooms, tier, selectedServices]);

  const formatINR = (num) => {
    return '₹' + num.toLocaleString('en-IN');
  };

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(s => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleSaveEstimate = async () => {
    try {
      const res = await fetch('/api/estimates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sqft,
          rooms,
          finishTier: tier,
          services: selectedServices,
          totalEstimate: calculation.totalEstimate,
          breakdown: {
            designFee: calculation.designFee,
            materials: calculation.materials,
            labor: calculation.labor,
            furnishings: calculation.furnishings
          }
        })
      });

      if (res.ok) {
        showToast('Estimate saved successfully! Opening consultation booking...');
        onOpenBooking({
          projectType: `${tier.toUpperCase()} Interior - ${sqft} sq.ft (${rooms} Rooms)`,
          estimatedBudget: formatINR(calculation.totalEstimate)
        });
      }
    } catch (err) {
      showToast('Error saving estimate', 'error');
    }
  };

  return (
    <section id="calculator" style={{ padding: '120px 24px', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 64px auto' }}>
          <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <Calculator size={18} />
            <span>Interactive INR Investment Calculator</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', color: 'var(--text-primary)', marginTop: '8px', marginBottom: '16px' }}>
            Estimate Your Interior Transformation
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Adjust square footage, room count, and finishing tiers for instant transparent pricing in Indian Rupees (₹).
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', alignItems: 'start' }}>
          
          {/* Controls Panel */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            
            {/* Square Footage Slider */}
            <div style={{ marginBottom: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <label style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Total Area (Square Feet)</label>
                <span style={{ color: 'var(--accent-gold)', fontWeight: '700', fontSize: '1.2rem' }}>
                  {sqft.toLocaleString('en-IN')} sq.ft
                </span>
              </div>
              <input 
                type="range" 
                min="500" 
                max="10000" 
                step="100" 
                value={sqft} 
                onChange={(e) => setSqft(Number(e.target.value))} 
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                <span>500 sq.ft</span>
                <span>5,000 sq.ft</span>
                <span>10,000+ sq.ft</span>
              </div>
            </div>

            {/* Room Count Slider */}
            <div style={{ marginBottom: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <label style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Number of Rooms / Spaces</label>
                <span style={{ color: 'var(--accent-gold)', fontWeight: '700', fontSize: '1.2rem' }}>
                  {rooms} {rooms === 1 ? 'Room' : 'Rooms'}
                </span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="12" 
                step="1" 
                value={rooms} 
                onChange={(e) => setRooms(Number(e.target.value))} 
              />
            </div>

            {/* Finish Tier Selector */}
            <div style={{ marginBottom: '36px' }}>
              <label style={{ fontWeight: '600', color: 'var(--text-primary)', display: 'block', marginBottom: '14px' }}>
                Finish Quality & Material Standard
              </label>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                
                <button
                  type="button"
                  onClick={() => setTier('essential')}
                  style={{
                    padding: '14px 10px',
                    borderRadius: 'var(--radius-sm)',
                    background: tier === 'essential' ? 'var(--accent-gold-glow)' : 'var(--bg-secondary)',
                    border: `1px solid ${tier === 'essential' ? 'var(--accent-gold)' : 'var(--border-color)'}`,
                    color: tier === 'essential' ? 'var(--accent-gold)' : 'var(--text-primary)',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '0.82rem'
                  }}
                >
                  Essential (₹2.5K/sqft)
                </button>

                <button
                  type="button"
                  onClick={() => setTier('luxury')}
                  style={{
                    padding: '14px 10px',
                    borderRadius: 'var(--radius-sm)',
                    background: tier === 'luxury' ? 'var(--accent-gold-glow)' : 'var(--bg-secondary)',
                    border: `1px solid ${tier === 'luxury' ? 'var(--accent-gold)' : 'var(--border-color)'}`,
                    color: tier === 'luxury' ? 'var(--accent-gold)' : 'var(--text-primary)',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '0.82rem'
                  }}
                >
                  Luxury (₹4.8K/sqft)
                </button>

                <button
                  type="button"
                  onClick={() => setTier('bespoke')}
                  style={{
                    padding: '14px 10px',
                    borderRadius: 'var(--radius-sm)',
                    background: tier === 'bespoke' ? 'var(--accent-gold-glow)' : 'var(--bg-secondary)',
                    border: `1px solid ${tier === 'bespoke' ? 'var(--accent-gold)' : 'var(--border-color)'}`,
                    color: tier === 'bespoke' ? 'var(--accent-gold)' : 'var(--text-primary)',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '0.82rem'
                  }}
                >
                  Bespoke (₹8.5K/sqft)
                </button>

              </div>
            </div>

            {/* Additional Services Checkboxes */}
            <div>
              <label style={{ fontWeight: '600', color: 'var(--text-primary)', display: 'block', marginBottom: '14px' }}>
                Bespoke Architectural Additions
              </label>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                
                {[
                  { id: 'lighting', name: 'Architectural Ambient Lighting System', price: '+₹4,50,000' },
                  { id: 'millwork', name: 'Custom Italian Millwork & Cabinetry', price: '+₹12,50,000' },
                  { id: 'automation', name: 'Lutron Smart Automation & Motorized Shading', price: '+₹7,50,000' },
                  { id: 'biophilic', name: 'Biophilic Acoustic Living Wall', price: '+₹5,00,000' },
                ].map(item => (
                  <div
                    key={item.id}
                    onClick={() => toggleService(item.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      background: 'var(--bg-secondary)',
                      border: `1px solid ${selectedServices.includes(item.id) ? 'var(--accent-gold)' : 'var(--border-color)'}`,
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '4px',
                        border: `1px solid ${selectedServices.includes(item.id) ? 'var(--accent-gold)' : 'var(--border-color)'}`,
                        background: selectedServices.includes(item.id) ? 'var(--accent-gold)' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0A0C0F'
                      }}>
                        {selectedServices.includes(item.id) && <Check size={14} strokeWidth={3} />}
                      </div>
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>{item.name}</span>
                    </div>

                    <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: '600' }}>{item.price}</span>
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* Real-time Calculation Summary Breakdown */}
          <div className="glass-panel pulse-accent" style={{ padding: '40px', background: 'var(--bg-secondary)' }}>
            <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '24px' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Estimated Total Investment (INR)
              </span>
              <div style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', fontWeight: '700', marginTop: '4px' }}>
                {formatINR(calculation.totalEstimate)}
              </div>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Includes end-to-end design, project management, & installation
              </span>
            </div>

            {/* Breakdown Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Architectural Design & Blueprinting</span>
                <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{formatINR(calculation.designFee)}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Premium Materials & Finishes</span>
                <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{formatINR(calculation.materials)}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Master Craftsmanship & Installation</span>
                <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{formatINR(calculation.labor)}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Furnishings & Art Curation</span>
                <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{formatINR(calculation.furnishings)}</span>
              </div>

            </div>

            {/* CTA Buttons */}
            <button 
              className="btn-primary" 
              onClick={handleSaveEstimate} 
              style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1.05rem', marginBottom: '14px' }}
            >
              <span>Lock In Estimate & Book Consultation</span>
              <ArrowRight size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
              <ShieldCheck size={16} color="var(--accent-gold)" />
              <span>100% Price Transparency & Fixed Design Contract Guarantee</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
