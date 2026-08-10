import React, { createContext, useContext, useState, useEffect } from 'react';

const ModernContext = createContext();

export const ModernProvider = ({ children }) => {
  const [currency, setCurrency] = useState('INR'); // Default to INR (Rupees)
  const [theme, setTheme] = useState('dark');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPrefill, setConsultationPrefill] = useState({});
  const [toast, setToast] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCurrency = () => {
    setCurrency(prev => (prev === 'INR' ? 'USD' : 'INR'));
    showToast(`Currency set to ${currency === 'INR' ? 'US Dollars ($)' : 'Indian Rupees (₹)'}`);
  };

  const openConsultation = (prefill = {}) => {
    setConsultationPrefill(prefill);
    setIsConsultationOpen(true);
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Currency Formatter Helper
  const formatPrice = (amountInUSD) => {
    if (currency === 'INR') {
      // Convert to INR (1 USD = 84 INR)
      const inrAmount = amountInUSD * 84;
      return '₹' + Math.round(inrAmount).toLocaleString('en-IN');
    }
    return '$' + Math.round(amountInUSD).toLocaleString('en-US');
  };

  return (
    <ModernContext.Provider
      value={{
        currency,
        toggleCurrency,
        theme,
        toggleTheme,
        isConsultationOpen,
        setIsConsultationOpen,
        openConsultation,
        consultationPrefill,
        showToast,
        formatPrice
      }}
    >
      {children}
      {toast && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: toast.type === 'error' ? '#EF4444' : 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
            color: '#07080A',
            padding: '14px 24px',
            borderRadius: '12px',
            fontWeight: '600',
            boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <span>{toast.type === 'error' ? '⚠️' : '✨'}</span>
          <span>{toast.message}</span>
        </div>
      )}
    </ModernContext.Provider>
  );
};

export const useModern = () => useContext(ModernContext);
