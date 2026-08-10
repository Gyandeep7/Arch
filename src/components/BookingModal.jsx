import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, Send, PhoneCall } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function BookingModal({ isOpen, onClose, initialData = {} }) {
  const { showToast } = useTheme();
  
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    projectType: 'Luxury Residential Penthouse',
    estimatedBudget: '₹1 Crore - ₹2.5 Crores',
    preferredDate: '',
    notes: ''
  });

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialData.projectType) {
      setFormData(prev => ({ ...prev, projectType: initialData.projectType }));
    }
    if (initialData.estimatedBudget) {
      setFormData(prev => ({ ...prev, estimatedBudget: initialData.estimatedBudget }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch('/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (res.ok) {
        showToast('✨ Consultation booked! Our lead architect will reach out shortly.');
        onClose();
        setFormData({
          clientName: '',
          email: '',
          phone: '',
          projectType: 'Luxury Residential Penthouse',
          estimatedBudget: '₹1 Crore - ₹2.5 Crores',
          preferredDate: '',
          notes: ''
        });
      } else {
        showToast(result.error || 'Failed to submit consultation request.', 'error');
      }
    } catch (err) {
      showToast('Connection error. Please try again.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', background: 'var(--accent-gold-glow)', color: 'var(--accent-gold)', marginBottom: '12px' }}>
            <Calendar size={28} />
          </div>
          <h3 style={{ fontSize: '1.9rem', color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
            Schedule Design Consultation
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '4px' }}>
            Meet with our principal architectural designers to discuss your spatial vision.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Full Name *</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Vikram Singhania" 
                value={formData.clientName} 
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Email Address *</label>
              <input 
                type="email" 
                required
                placeholder="e.g. vikram@singhania.in" 
                value={formData.email} 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Phone Number *</label>
              <input 
                type="tel" 
                required
                placeholder="e.g. +91 98200 12345" 
                value={formData.phone} 
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Preferred Date *</label>
              <input 
                type="date" 
                required
                value={formData.preferredDate} 
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Project Scope</label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
              >
                <option value="Luxury Residential Penthouse">Luxury Penthouse / Sky Villa</option>
                <option value="Kitchen & Dining Renovation">Culinary Atelier & Dining</option>
                <option value="Master Bedroom Suite">Master Suite & Spa Bath</option>
                <option value="Executive Workspace">Executive Workspace / Commercial</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Target Investment Range (INR)</label>
              <select
                value={formData.estimatedBudget}
                onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
              >
                <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                <option value="₹1 Crore - ₹2.5 Crores">₹1 Crore - ₹2.5 Crores</option>
                <option value="₹2.5 Crores+ (Bespoke)">₹2.5 Crores+ (Ultra Bespoke)</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Project Notes / Specific Desires</label>
            <textarea 
              rows="3" 
              placeholder="Tell us about your property location (e.g. Mumbai, Delhi NCR, Bengaluru), architectural preferences..." 
              value={formData.notes} 
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none', resize: 'vertical' }}
            />
          </div>

          <button 
            type="submit" 
            disabled={submitting} 
            className="btn-primary" 
            style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1rem', marginTop: '6px' }}
          >
            <Send size={18} />
            <span>{submitting ? 'Confirming Appointment...' : 'Confirm Consultation Request'}</span>
          </button>

        </form>

      </div>
    </div>
  );
}
