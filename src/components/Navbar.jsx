import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Compass, Calendar, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onOpenBooking }) {
  const { theme, toggleTheme } = useTheme();
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
    { label: 'Cost Estimator', href: '#calculator' },
    { label: 'Style Quiz', href: '#style-quiz' },
    { label: 'Moodboards', href: '#moodboard' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        transition: 'all 0.35s ease',
        background: scrolled 
          ? (theme === 'dark' ? 'rgba(10, 12, 15, 0.85)' : 'rgba(250, 249, 246, 0.88)') 
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        padding: scrolled ? '14px 40px' : '24px 40px'
      }}
    >
      <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{ 
            width: '42px', 
            height: '42px', 
            borderRadius: '12px', 
            background: 'linear-gradient(135deg, var(--accent-gold) 0%, #B8860B 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0A0C0F',
            fontWeight: 'bold',
            boxShadow: 'var(--shadow-gold)'
          }}>
            <Compass size={24} />
          </div>
          <div>
            <span style={{ 
              fontSize: '1.7rem', 
              fontFamily: 'var(--font-serif)', 
              fontWeight: '700', 
              letterSpacing: '2px', 
              color: 'var(--text-primary)' 
            }}>
              ARCH
            </span>
            <span style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent-gold)', marginTop: '-4px' }}>
              Architecture & Studio
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
                fontSize: '0.95rem',
                fontWeight: '500',
                opacity: 0.85,
                transition: 'all 0.2s ease',
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

        {/* Right CTA & Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              width: '42px',
              height: '42px',
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
            {theme === 'dark' ? <Sun size={20} color="var(--accent-gold)" /> : <Moon size={20} />}
          </button>

          <button
            onClick={onOpenBooking}
            className="btn-primary"
            style={{ fontSize: '0.9rem' }}
          >
            <Calendar size={18} />
            <span>Book Consultation</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              marginLeft: '8px'
            }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-color)',
            padding: '24px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
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
                fontSize: '1.1rem',
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
