import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../types/Product';

export type CartItem = Product & {
  quantity: number;
};

type CartContextType = {
  cartItems: Record<string, CartItem>;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Record<string, CartItem>>({});

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev[product.id];
      const quantity = existing ? existing.quantity + 1 : 1;
      return {
        ...prev,
        [product.id]: { ...product, quantity },
      };
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => {
      const existing = prev[id];
      if (!existing) return prev;

      const quantity = existing.quantity - 1;
      if (quantity <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [id]: { ...existing, quantity },
      };
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Helper hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
