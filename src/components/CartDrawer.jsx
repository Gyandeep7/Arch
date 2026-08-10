import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useAmber } from '../context/AmberContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartSubtotal, showToast } = useAmber();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    showToast('✨ Proceeding to Shoppe Amber Interiors checkout...');
    setIsCartOpen(false);
  };

  return (
    <div className="modal-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        
        {/* Cart Header */}
        <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={20} color="var(--accent-amber)" />
            <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Shoppe Cart ({cart.reduce((s, i) => s + i.quantity, 0)})
            </h3>
          </div>

          <button 
            onClick={() => setIsCartOpen(false)}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              Your cart is currently empty.
            </div>
          ) : (
            cart.map((item) => (
              <div 
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '16px',
                  borderBottom: '1px solid var(--border-color)',
                  paddingBottom: '20px'
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={{ width: '80px', height: '80px', objectFit: 'cover', background: '#F8F6F2' }}
                />

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '500', marginBottom: '4px' }}>{item.title}</h4>
                    <div style={{ fontSize: '0.95rem', color: 'var(--accent-amber)', fontWeight: '600' }}>
                      ${item.price.toLocaleString()}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-color)' }}>
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        style={{ background: 'transparent', border: 'none', padding: '4px 8px', cursor: 'pointer' }}
                      >
                        <Minus size={14} />
                      </button>
                      <span style={{ fontSize: '0.85rem', fontWeight: '600', padding: '0 8px' }}>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        style={{ background: 'transparent', border: 'none', padding: '4px 8px', cursor: 'pointer' }}
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button 
                      onClick={() => removeFromCart(item.id)}
                      style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Subtotal & Checkout */}
        {cart.length > 0 && (
          <div style={{ padding: '24px 32px', borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', fontSize: '1.1rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Subtotal</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                ${cartSubtotal.toLocaleString()}
              </span>
            </div>

            <button 
              className="btn-amber" 
              onClick={handleCheckout}
              style={{ width: '100%', justifyContent: 'center', padding: '16px' }}
            >
              <span>Proceed To Checkout</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
