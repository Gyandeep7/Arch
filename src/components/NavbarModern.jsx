import React, { useState, useEffect } from 'react';
import { Sun, Moon, Compass, DollarSign, Calendar, ChevronRight, Menu, X, Globe } from 'lucide-react';
import { useModern } from '../context/ModernContext';

export default function NavbarModern() {
  const { currency, toggleCurrency, theme, toggleTheme, openConsultation } = useModern();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: '3D Materials', href: '#materials' },
    { label: 'Cost Calculator', href: '#calculator' },
    { label: 'Style Quiz', href: '#style-quiz' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: '20px',
        left: 0,
        right: 0,
        zIndex: 900,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 20px',
        transition: 'all 0.35s ease'
      }}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '1200px',
          padding: '12px 28px',
          borderRadius: 'var(--radius-full)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'var(--glass-bg)' : 'rgba(14, 17, 23, 0.65)',
          border: '1px solid var(--border-gold)',
          boxShadow: 'var(--shadow-main)'
        }}
      >
        
        {/* Brand Emblem */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent-gold) 0%, #B8860B 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#07080A',
              fontWeight: 'bold',
              boxShadow: 'var(--shadow-gold)'
            }}
          >
            <Compass size={22} />
          </div>
          <div>
            <span style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: '700', letterSpacing: '3px', color: 'var(--text-primary)' }}>
              ARCH
            </span>
            <span style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent-gold)', marginTop: '-4px' }}>
              Architecture Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                opacity: 0.85,
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '1';
                e.target.style.color = 'var(--accent-gold)';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '0.85';
                e.target.style.color = 'var(--text-primary)';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          
          {/* Currency Switcher ($ USD / ₹ INR) */}
          <button
            onClick={toggleCurrency}
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              color: 'var(--accent-gold)',
              fontSize: '0.82rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease'
            }}
            title="Switch Currency between USD ($) & INR (₹)"
          >
            <Globe size={14} />
            <span>{currency === 'USD' ? '$ USD' : '₹ INR'}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun size={18} color="var(--accent-gold)" /> : <Moon size={18} />}
          </button>

          {/* Consultation CTA */}
          <button
            onClick={() => openConsultation()}
            className="btn-gold"
            style={{ padding: '10px 22px', fontSize: '0.85rem' }}
          >
            <Calendar size={16} />
            <span>Consultation</span>
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '20px',
            right: '20px',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-gold)',
            borderRadius: 'var(--radius-md)',
            padding: '24px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            boxShadow: 'var(--shadow-main)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{link.label}</span>
              <ChevronRight size={18} color="var(--accent-gold)" />
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
