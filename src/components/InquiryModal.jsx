import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { useAmber } from '../context/AmberContext';

export default function InquiryModal() {
  const { isInquiryOpen, setIsInquiryOpen, showToast } = useAmber();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    scope: 'Full Home Interior Architecture',
    budget: '$300,000 - $750,000',
    notes: ''
  });

  if (!isInquiryOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('✨ Inquiry submitted! Arch Interior Design Studio will contact you within 48 hours.');
    setIsInquiryOpen(false);
  };

  return (
    <div className="modal-overlay" onClick={() => setIsInquiryOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        
        <button 
          onClick={() => setIsInquiryOpen(false)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer'
          }}
        >
          <X size={24} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ fontSize: '0.78rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent-amber)', fontWeight: '600', display: 'block' }}>
            Arch Interior Design Studio
          </span>
          <h3 style={{ fontSize: '2.2rem', marginTop: '4px' }}>
            Full-Service Design Inquiry
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '6px' }}>
            We accept a limited number of full-service residential projects each year. Please complete the form below.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '0.82rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Full Name *</label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Victoria Sterling"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '0', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.82rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Email Address *</label>
              <input 
                type="email" 
                required 
                placeholder="e.g. victoria@estate.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '0', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '0.82rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Phone Number *</label>
              <input 
                type="tel" 
                required 
                placeholder="e.g. +1 (310) 555-0192"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '0', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.82rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Project Location *</label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Malibu, Pacific Palisades, NYC"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '0', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '0.82rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Scope of Work</label>
              <select
                value={formData.scope}
                onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '0', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
              >
                <option value="Full Home Interior Architecture">Full Home Interior Architecture</option>
                <option value="Ground-Up New Build Construction">Ground-Up Construction</option>
                <option value="Kitchen & Bath Architecture">Kitchen & Bath Renovation</option>
                <option value="Furnishings & Art Curation">Furnishings & Styling Curation</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.82rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Target Investment</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '0', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
              >
                <option value="$150,000 - $300,000">$150,000 - $300,000</option>
                <option value="$300,000 - $750,000">$300,000 - $750,000</option>
                <option value="$750,000+">$750,000+ (Custom Estate)</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.82rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Project Overview & Timeline</label>
            <textarea 
              rows="4"
              placeholder="Tell us about your home vision, architectural preferences, or target move-in date..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              style={{ width: '100%', padding: '12px 16px', borderRadius: '0', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none', resize: 'vertical' }}
            />
          </div>

          <button type="submit" className="btn-amber" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
            <Send size={16} />
            <span>Submit Studio Inquiry</span>
          </button>

        </form>

      </div>
    </div>
  );
}
