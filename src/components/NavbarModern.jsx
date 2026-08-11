import React, { useState, useEffect } from 'react';
import { Sun, Moon, Compass, Calendar, ChevronRight, Menu, X, Globe } from 'lucide-react';
import { useModern } from '../context/ModernContext';

export default function NavbarModern() {
  const { currency, toggleCurrency, theme, toggleTheme, openConsultation } = useModern();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
    <header className="navbar-header">
      <div className={`glass-panel navbar-pill ${scrolled ? 'scrolled' : ''}`}>
        
        {/* Brand Emblem */}
        <a href="#" className="brand-container">
          <div className="brand-icon">
            <Compass size={20} />
          </div>
          <div>
            <span className="brand-title">ARCH</span>
            <span className="brand-subtitle">Architecture Studio</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Toolbar */}
        <div className="nav-toolbar">
          
          {/* Currency Switcher ($ USD / ₹ INR) */}
          <button
            onClick={toggleCurrency}
            className="nav-action-btn currency-btn"
            title="Switch Currency between USD ($) & INR (₹)"
          >
            <Globe size={14} />
            <span className="currency-text">{currency === 'USD' ? '$ USD' : '₹ INR'}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="nav-action-btn theme-btn"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun size={18} color="var(--accent-gold)" /> : <Moon size={18} />}
          </button>

          {/* Consultation CTA */}
          <button
            onClick={() => openConsultation()}
            className="btn-gold nav-cta-btn"
          >
            <Calendar size={15} />
            <span className="cta-label">Consultation</span>
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass-panel">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link"
            >
              <span>{link.label}</span>
              <ChevronRight size={18} color="var(--accent-gold)" />
            </a>
          ))}

          <div className="mobile-drawer-divider" />

          <div className="mobile-drawer-actions">
            <button onClick={toggleCurrency} className="mobile-action-btn">
              <Globe size={16} />
              <span>Currency: {currency === 'USD' ? '$ USD' : '₹ INR'}</span>
            </button>

            <button onClick={toggleTheme} className="mobile-action-btn">
              {theme === 'dark' ? <Sun size={16} color="var(--accent-gold)" /> : <Moon size={16} />}
              <span>Theme: {theme === 'dark' ? 'Dark Obsidian' : 'Luxury Light'}</span>
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openConsultation();
            }}
            className="btn-gold"
            style={{ width: '100%', justifyContent: 'center', marginTop: '6px', padding: '14px 20px' }}
          >
            <Calendar size={18} />
            <span>Book Private Consultation</span>
          </button>
        </div>
      )}
    </header>
  );
}
