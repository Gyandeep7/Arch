import React, { useState } from 'react';
import { Sparkles, Check, RefreshCw, ArrowRight, Palette } from 'lucide-react';

export default function StyleQuiz({ onOpenBooking }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    mood: null,
    palette: null,
    purpose: null
  });
  const [result, setResult] = useState(null);

  const questions = [
    {
      title: 'What atmosphere resonates most with your lifestyle?',
      subtitle: 'Select the primary aesthetic mood for your living environment.',
      key: 'mood',
      options: [
        { id: 'japandi', label: 'Warm Japandi Organic', desc: 'Natural light, fluted oak timber, fluid curves & tactile linen.' },
        { id: 'minimalist', label: 'Ultra-Minimalist Sanctuary', desc: 'Monolithic stone, frameless glass, hidden storage & architectural simplicity.' },
        { id: 'industrial', label: 'Modern Industrial Chic', desc: 'Exposed concrete, dark charcoal accents, smoked glass & metal details.' },
        { id: 'artdeco', label: 'Regal Art Deco Luxury', desc: 'Polished brass trim, rich velvet, book-matched marble & dramatic lighting.' }
      ]
    },
    {
      title: 'Which color palette elevates your emotional well-being?',
      subtitle: 'Choose your signature color harmony.',
      key: 'palette',
      options: [
        { id: 'earthy', label: 'Earthy Terracotta & Sandstone', colors: ['#D2B48C', '#8B5A2B', '#E5D3B3', '#2C1609'] },
        { id: 'monochrome', label: 'Monochromatic Slate & Obsidian', colors: ['#0F1115', '#2B2F38', '#8E94A2', '#F4F5F7'] },
        { id: 'emerald', label: 'Deep Emerald & Brushed Brass', colors: ['#0A382C', '#1D5C4C', '#D4AF37', '#FAF9F6'] },
        { id: 'silk', label: 'Silk Taupe & Soft Warm White', colors: ['#F3EFE6', '#D6CEC2', '#9E9484', '#1A1D24'] }
      ]
    },
    {
      title: 'What is the primary function of your project space?',
      subtitle: 'Identify how you plan to spend time in this space.',
      key: 'purpose',
      options: [
        { id: 'relaxation', label: 'Unwinding & Personal Wellness', desc: 'Quiet sanctuary focused on rest and acoustic comfort.' },
        { id: 'entertaining', label: 'High-End Entertaining & Hosting', desc: 'Open-plan social layouts with bar, wine cellar & grand dining.' },
        { id: 'work', label: 'Executive Focus & Creative Studio', desc: 'Ergonomic workspace with integrated media & luxury library.' },
        { id: 'family', label: 'Multi-Generational Living', desc: 'Durable luxury materials crafted for family harmony.' }
      ]
    }
  ];

  const handleSelectOption = (key, optionId) => {
    const updated = { ...answers, [key]: optionId };
    setAnswers(updated);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      generateResult(updated);
    }
  };

  const generateResult = (finalAnswers) => {
    let title = 'Organic Japandi Sanctuary';
    let summary = 'Your design signature balances tactile natural elements, subtle warm tones, and uncluttered spatial harmony.';
    let recommendation = 'We recommend incorporating natural white oak millwork, quartzite stone counters, and concealed soft ambient cove lighting.';

    if (finalAnswers.mood === 'minimalist' || finalAnswers.palette === 'monochrome') {
      title = 'Contemporary Monolithic Luxury';
      summary = 'Your preferences lean toward architectural precision, clean geometric lines, and quiet luxury.';
      recommendation = 'We recommend floor-to-ceiling glass wall partitions, honed black granite, and floating Italian furniture.';
    } else if (finalAnswers.mood === 'artdeco' || finalAnswers.palette === 'emerald') {
      title = 'Grand Art Deco Atelier';
      summary = 'You possess a refined taste for dramatic luxury, rich jewel tones, and opulent material pairings.';
      recommendation = 'We recommend custom brushed brass hardware, book-matched Calacatta marble, and plush mohair seating.';
    } else if (finalAnswers.mood === 'industrial') {
      title = 'Architectural Loft Modernism';
      summary = 'Your signature embodies raw architectural authenticity combined with warm luxury accents.';
      recommendation = 'We recommend polished micro-cement flooring, matte black steel framing, and warm leather upholstery.';
    }

    setResult({ title, summary, recommendation, answers: finalAnswers });
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({ mood: null, palette: null, purpose: null });
    setResult(null);
  };

  return (
    <section id="style-quiz" style={{ padding: '120px 24px', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} />
            <span>Interactive Design Signature Quiz</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 3rem)', color: 'var(--text-primary)', marginTop: '8px' }}>
            Discover Your Architectural Identity
          </h2>
        </div>

        {!result ? (
          <div className="glass-panel" style={{ padding: '40px' }}>
            
            {/* Step Progress Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                Question {step + 1} of {questions.length}
              </span>
              <div style={{ display: 'flex', gap: '6px' }}>
                {questions.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: '40px',
                      height: '4px',
                      borderRadius: '2px',
                      background: i <= step ? 'var(--accent-gold)' : 'var(--border-color)',
                      transition: 'background 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Question Title */}
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
              {questions[step].title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '28px' }}>
              {questions[step].subtitle}
            </p>

            {/* Options List */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {questions[step].options.map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => handleSelectOption(questions[step].key, opt.id)}
                  style={{
                    padding: '24px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-gold)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '1.05rem', marginBottom: '6px' }}>
                    {opt.label}
                  </div>
                  
                  {opt.desc && (
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {opt.desc}
                    </div>
                  )}

                  {opt.colors && (
                    <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                      {opt.colors.map((c, idx) => (
                        <div key={idx} style={{ width: '28px', height: '28px', borderRadius: '50%', background: c, border: '1px solid var(--border-color)' }} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        ) : (
          /* Result Card */
          <div className="glass-panel" style={{ padding: '48px', textAlign: 'center', animation: 'fadeIn 0.4s ease' }}>
            <div style={{ display: 'inline-flex', padding: '16px', borderRadius: '50%', background: 'var(--accent-gold-glow)', color: 'var(--accent-gold)', marginBottom: '20px' }}>
              <Palette size={36} />
            </div>

            <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', display: 'block' }}>
              Your Design Signature
            </span>
            <h3 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginTop: '6px', marginBottom: '16px' }}>
              {result.title}
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto 24px auto', lineHeight: 1.7 }}>
              {result.summary}
            </p>

            <div style={{ background: 'var(--bg-primary)', padding: '24px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-active)', maxWidth: '680px', margin: '0 auto 36px auto', textAlign: 'left' }}>
              <div style={{ fontWeight: '600', color: 'var(--accent-gold)', marginBottom: '6px', fontSize: '0.95rem' }}>
                💡 Recommended Architectural Blueprint
              </div>
              <div style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {result.recommendation}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => onOpenBooking({ projectType: result.title })}>
                <span>Schedule Consultation For This Style</span>
                <ArrowRight size={18} />
              </button>

              <button className="btn-secondary" onClick={resetQuiz}>
                <RefreshCw size={18} />
                <span>Retake Quiz</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
