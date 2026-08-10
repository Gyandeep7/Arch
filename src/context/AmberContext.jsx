import React, { createContext, useContext, useState } from 'react';

const AmberContext = createContext();

export const AmberProvider = ({ children }) => {
  const [cart, setCart] = useState([
    {
      id: 'prod_1',
      title: 'Bespoke Oak Slipcovered Armchair',
      price: 2450,
      quantity: 1,
      image: '/images/shoppe_chair.jpg',
      category: 'Furniture'
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState(null);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    showToast(`Added "${product.title}" to your Shoppe Arch Cart`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AmberContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartSubtotal,
        isCartOpen,
        setIsCartOpen,
        isInquiryOpen,
        setIsInquiryOpen,
        selectedProject,
        setSelectedProject,
        toast,
        showToast
      }}
    >
      {children}
      {toast && (
        <div
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            background: 'var(--text-primary)',
            color: 'var(--bg-primary)',
            padding: '14px 28px',
            borderRadius: '0px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.88rem',
            letterSpacing: '0.5px',
            boxShadow: 'var(--shadow-elevated)',
            zIndex: 9999,
            animation: 'fadeIn 0.3s ease'
          }}
        >
          {toast}
        </div>
      )}
    </AmberContext.Provider>
  );
};

export const useAmber = () => useContext(AmberContext);
