import React, { useState, useEffect } from 'react';
import { X, Calendar, Send, ShieldCheck } from 'lucide-react';
import { useModern } from '../context/ModernContext';

export default function ConsultationDrawer() {
  const { isConsultationOpen, setIsConsultationOpen, consultationPrefill, showToast, currency } = useModern();
  
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    projectType: 'Luxury Penthouse Sky Villa',
    estimatedBudget: '₹1 Crore - ₹2.5 Crores',
    preferredDate: '',
    notes: ''
  });

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (consultationPrefill.projectType) {
      setFormData(prev => ({ ...prev, projectType: consultationPrefill.projectType }));
    }
    if (consultationPrefill.estimatedBudget) {
      setFormData(prev => ({ ...prev, estimatedBudget: consultationPrefill.estimatedBudget }));
    }
  }, [consultationPrefill]);

  if (!isConsultationOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      showToast('✨ Consultation booked! Our lead architect will reach out shortly.');
      setIsConsultationOpen(false);
      setSubmitting(false);
      setFormData({
        clientName: '',
        email: '',
        phone: '',
        projectType: 'Luxury Penthouse Sky Villa',
        estimatedBudget: '₹1 Crore - ₹2.5 Crores',
        preferredDate: '',
        notes: ''
      });
    }, 600);
  };

  return (
    <div className="modal-overlay" onClick={() => setIsConsultationOpen(false)}>
      <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Calendar size={22} color="var(--accent-gold)" />
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
              Schedule Consultation
            </h3>
          </div>

          <button 
            onClick={() => setIsConsultationOpen(false)}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} style={{ flex: 1, overflowY: 'auto', padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
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

          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Project Scope</label>
            <select
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
            >
              <option value="Luxury Penthouse Sky Villa">Luxury Penthouse Sky Villa</option>
              <option value="Kitchen & Culinary Pavilion">Kitchen & Culinary Atelier</option>
              <option value="Master Bedroom Suite">Master Suite & Spa Bath</option>
              <option value="Executive Workspace">Executive Workspace / Studio</option>
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

          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Project Notes / Desires</label>
            <textarea 
              rows="3" 
              placeholder="Tell us about your property location (e.g. Mumbai, Delhi NCR, Bengaluru), architectural style preferences..." 
              value={formData.notes} 
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none', resize: 'vertical' }}
            />
          </div>

          <button 
            type="submit" 
            disabled={submitting} 
            className="btn-gold" 
            style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1rem', marginTop: '6px' }}
          >
            <Send size={18} />
            <span>{submitting ? 'Confirming Appointment...' : 'Confirm Consultation Request'}</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '4px' }}>
            <ShieldCheck size={16} color="var(--accent-gold)" />
            <span>100% Privacy & Non-Disclosure Contract Guarantee</span>
          </div>

        </form>

      </div>
    </div>
  );
}
