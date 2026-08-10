import React, { useState, useEffect } from 'react';
import { Star, Quote, Plus, X, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Testimonials() {
  const { showToast } = useTheme();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showReviewModal, setShowReviewModal] = useState(false);
  
  const [formData, setFormData] = useState({
    author: '',
    role: '',
    location: '',
    rating: 5,
    comment: '',
    projectName: ''
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/reviews');
      const data = await res.json();
      setReviews(data);
    } catch (err) {
      console.error('Failed to load reviews', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!formData.author || !formData.comment) {
      showToast('Please enter your name and review comment.', 'error');
      return;
    }

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        showToast('Thank you! Your review has been published.');
        setShowReviewModal(false);
        setFormData({ author: '', role: '', location: '', rating: 5, comment: '', projectName: '' });
        fetchReviews();
      }
    } catch (err) {
      showToast('Failed to post review', 'error');
    }
  };

  return (
    <section id="testimonials" style={{ padding: '120px 24px', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '56px' }}>
          <div>
            <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Client Accolades
            </span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', color: 'var(--text-primary)', marginTop: '8px' }}>
              What Our Clients Say
            </h2>
          </div>

          <button 
            className="btn-secondary" 
            onClick={() => setShowReviewModal(true)}
          >
            <Plus size={18} />
            <span>Write a Client Review</span>
          </button>
        </div>

        {/* Reviews Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-secondary)' }}>
            Loading client testimonials...
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {reviews.map((rev) => (
              <div 
                key={rev._id} 
                className="glass-card" 
                style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill={i < rev.rating ? 'var(--accent-gold)' : 'transparent'} 
                          color="var(--accent-gold)" 
                        />
                      ))}
                    </div>
                    <Quote size={28} color="var(--accent-gold)" style={{ opacity: 0.3 }} />
                  </div>

                  <p style={{ color: 'var(--text-primary)', fontSize: '1.02rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '24px' }}>
                    "{rev.comment}"
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '1rem' }}>
                      {rev.author}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      {rev.role} • {rev.location}
                    </div>
                  </div>

                  <span style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', background: 'var(--accent-gold-glow)', padding: '4px 10px', borderRadius: '4px' }}>
                    {rev.projectName}
                  </span>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="modal-overlay" onClick={() => setShowReviewModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '560px' }}>
            
            <button 
              onClick={() => setShowReviewModal(false)}
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

            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
              Share Your Experience
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '24px' }}>
              We value your feedback on your architectural journey with Arch.
            </p>

            <form onSubmit={handleSubmitReview} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '0.88rem', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Your Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Eleanor Vance" 
                  value={formData.author} 
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '0.88rem', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Property / Project Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Tribeca Penthouse" 
                    value={formData.projectName} 
                    onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.88rem', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Rating (1-5)</label>
                  <select
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
                  >
                    <option value={5}>5 Stars - Perfection</option>
                    <option value={4}>4 Stars - Excellent</option>
                    <option value={3}>3 Stars - Good</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.88rem', color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Your Feedback *</label>
                <textarea 
                  rows="4" 
                  required
                  placeholder="Describe your design transformation experience..." 
                  value={formData.comment} 
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                <Send size={18} />
                <span>Submit Review</span>
              </button>
            </form>

          </div>
        </div>
      )}

    </section>
  );
}
