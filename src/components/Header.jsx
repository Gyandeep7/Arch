import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ChevronRight } from 'lucide-react';
import { useAmber } from '../context/AmberContext';

export default function Header() {
  const { cart, setIsCartOpen, setIsInquiryOpen } = useAmber();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Studio', href: '#process' },
    { label: 'Shoppe Arch', href: '#shoppe' },
    { label: 'All Sorts Of', href: '#journal' },
    { label: 'Press', href: '#press' },
  ];

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900 }}>
      
      {/* Announcement Banner */}
      <div 
        style={{ 
          background: 'var(--text-primary)', 
          color: 'var(--bg-primary)', 
          textAlign: 'center', 
          padding: '8px 16px', 
          fontSize: '0.72rem', 
          letterSpacing: '2.5px', 
          textTransform: 'uppercase',
          fontWeight: '500'
        }}
      >
        ARCH INTERIOR DESIGN STUDIO & SHOPPE ARCH • CALIFORNIA CASUAL LIVED-IN LUXURY
      </div>

      {/* Main Nav Bar */}
      <div
        style={{
          background: scrolled ? 'rgba(253, 251, 247, 0.95)' : 'rgba(253, 251, 247, 0.88)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-color)',
          transition: 'all 0.3s ease',
          padding: scrolled ? '16px 40px' : '24px 40px'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Brand Logo ARCH */}
          <a href="#" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', letterSpacing: '6px', fontWeight: '400', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
              ARCH
            </span>
            <span style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--accent-amber)', marginTop: '-4px' }}>
              Interior Design Studio • California
            </span>
          </a>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Cart & Inquire Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            
            <button
              onClick={() => setIsCartOpen(true)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-primary)'
              }}
              title="View Shoppe Arch Cart"
            >
              <div style={{ position: 'relative' }}>
                <ShoppingBag size={22} strokeWidth={1.5} />
                {cartItemCount > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-6px',
                      right: '-8px',
                      background: 'var(--accent-amber)',
                      color: '#FFFFFF',
                      fontSize: '0.65rem',
                      fontWeight: '700',
                      borderRadius: '50%',
                      width: '16px',
                      height: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {cartItemCount}
                  </span>
                )}
              </div>
              <span style={{ fontSize: '0.78rem', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: '600' }} className="desktop-nav">
                Shoppe Cart
              </span>
            </button>

            <button 
              className="btn-amber" 
              onClick={() => setIsInquiryOpen(true)}
              style={{ padding: '10px 22px', fontSize: '0.78rem' }}
            >
              Inquire
            </button>

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
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
              background: 'var(--bg-primary)',
              borderBottom: '1px solid var(--border-color)',
              padding: '24px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px'
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
                  fontSize: '0.95rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={18} color="var(--accent-amber)" />
              </a>
            ))}
          </div>
        )}

      </div>
    </header>
  );
}
