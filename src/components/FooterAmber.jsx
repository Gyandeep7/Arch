import React, { useState } from 'react';
import { ArrowRight, Instagram, MapPin, Mail } from 'lucide-react';
import { useAmber } from '../context/AmberContext';

export default function FooterAmber() {
  const { showToast } = useAmber();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast('✨ Thank you for subscribing to Arch Design Journal!');
    setEmail('');
  };

  return (
    <footer id="about" style={{ background: 'var(--bg-dark)', color: 'var(--text-light)', padding: '100px 24px 40px 24px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '48px', marginBottom: '80px' }}>
          
          {/* Brand Col */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: '#FFFFFF', letterSpacing: '6px', textTransform: 'uppercase', marginBottom: '16px' }}>
              ARCH
            </h3>

            <p style={{ color: '#A0968E', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '24px' }}>
              Full-service interior architecture and design firm based in California. Serving clients worldwide with California casual lived-in luxury.
            </p>

            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                <Instagram size={18} color="var(--accent-gold)" />
                <span>@archinteriors</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px', fontWeight: '600' }}>
              Studio & Shoppe
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Residential Work', href: '#projects' },
                { label: 'Studio Design Process', href: '#process' },
                { label: 'Shoppe Arch Interiors', href: '#shoppe' },
                { label: 'All Sorts Of Design Blog', href: '#journal' },
                { label: 'Press & AD100 Feature', href: '#press' }
              ].map(link => (
                <a 
                  key={link.label} 
                  href={link.href}
                  style={{ color: '#A0968E', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent-gold)'}
                  onMouseLeave={(e) => e.target.style.color = '#A0968E'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Studios */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px', fontWeight: '600' }}>
              California Studios
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.88rem', color: '#A0968E' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Calabasas Studio & Shoppe Arch<br />23611 Calabasas Rd, Calabasas, CA 91302</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span>inquiries@archstudio.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: '600' }}>
              Join Our Newsletter
            </h4>
            <p style={{ color: '#A0968E', fontSize: '0.88rem', marginBottom: '20px' }}>
              Subscribe for exclusive design journal posts, Shoppe Arch arrivals, and styling inspiration.
            </p>

            <form onSubmit={handleSubscribe} style={{ display: 'flex' }}>
              <input 
                type="email" 
                required 
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid var(--border-dark)',
                  color: '#FFFFFF',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
              <button type="submit" className="btn-amber" style={{ padding: '12px 20px' }}>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Legal */}
        <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.82rem', color: '#756C63' }}>
          <div>
            © {new Date().getFullYear()} Arch Interior Design Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: '#756C63', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#756C63', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: '#756C63', textDecoration: 'none' }}>Shoppe Shipping & Returns</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
