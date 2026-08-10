import React, { useState } from 'react';
import { Compass, Mail, Phone, MapPin, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { showToast } = useTheme();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast('✨ Thank you for subscribing to Arch Architectural Gazette!');
    setEmail('');
  };

  return (
    <footer style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', padding: '80px 24px 40px 24px' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px', marginBottom: '64px' }}>
          
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ 
                width: '38px', 
                height: '38px', 
                borderRadius: '10px', 
                background: 'linear-gradient(135deg, var(--accent-gold) 0%, #B8860B 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0A0C0F'
              }}>
                <Compass size={22} />
              </div>
              <span style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', fontWeight: '700', letterSpacing: '2px', color: 'var(--text-primary)' }}>
                ARCH
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Pioneering modern architectural luxury, interior design, and bespoke spatial craftsmanship worldwide.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              {[Instagram, Linkedin, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-gold)';
                    e.currentTarget.style.color = 'var(--accent-gold)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '20px' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Portfolio Showcase', href: '#portfolio' },
                { label: 'Cost Estimator', href: '#calculator' },
                { label: 'Design Style Quiz', href: '#style-quiz' },
                { label: 'Material Moodboards', href: '#moodboard' },
                { label: 'Client Reviews', href: '#testimonials' }
              ].map(item => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent-gold)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Global Ateliers */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '20px' }}>
              Global Design Ateliers
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="var(--accent-gold)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>540 Hudson Street, Tribeca, New York, NY 10013</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span>+1 (212) 894-3200</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span>concierge@archstudio.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '12px' }}>
              Architectural Gazette
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '16px' }}>
              Receive exclusive quarterly design insights, architectural trends, and project unveils.
            </p>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
              <input 
                type="email" 
                required 
                placeholder="Enter your email..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
              <button type="submit" className="btn-primary" style={{ padding: '12px 18px' }}>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <div>
            © {new Date().getFullYear()} Arch Architecture & Interior Studio. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Cookie Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
