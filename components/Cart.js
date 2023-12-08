// Cart.js

export const getCart = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const cart = localStorage.getItem('cart');
      return cart ? JSON.parse(cart) : [];
    } catch (error) {
      console.error('Error retrieving cart from local storage:', error);
      return [];
    }
  } else {
    // Provide a fallback for non-browser environments
    return [];
  }
};



export const addToCart = (product) => {
  try {
    const cart = getCart();
    const updatedCart = [...cart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart; // Return the updated cart
  } catch (error) {
    console.error('Error adding to cart:', error);
    return [];
  }
};

export const removeFromCart = (product) => {
  try {
    const cart = getCart();
    const updatedCart = cart.filter((item) => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart; // Return the updated cart
  } catch (error) {
    console.error('Error removing from cart:', error);
    return [];
  }
};

export const removeAllFromCart = () => {
  const cart = localStorage.getItem('cart');
  if (!cart) {
    return [];
  }
  try {
    localStorage.removeItem('cart');
    return [];
  } catch (error) {
    console.error('Error removing all items from cart:', error);
    return [];
  }
};