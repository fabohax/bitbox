/* cart.js */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getCart, removeAllFromCart } from '../../components/Cart';
import Checkout from '../../components/Checkout';
import Header from './header';
import Footer from './footer';

function Cart() {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isGrid, setGrid] = useState(false);

  useEffect(() => {
    setGrid(true);
  }, []);
  
  useEffect(() => {
    const cartItems = getCart();
    setCartItems(cartItems);
  }, []);

  const handleCheckoutClick = () => {
    setShowPopup(true);
  };

  const handleClearCart = () => {
    removeAllFromCart();
    window.location.reload();
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container">
      <Head>
        <title>CARRO | BITSHOP</title>
      </Head>
      <Header/>
      {cartItems && cartItems.length > 0 ? (
        <div className="cartCheck">
          {cartItems.length} productos por ${totalPrice}{' '}
          <Link href="#" onClick={handleCheckoutClick}>
            Comprar ahora
          </Link>
        </div>
      ) : (
        <div className="noItems">No hay artículos en el carrito</div>
      )}
      <main className={`grid ${isGrid ? 'visible' : ''}`}>
        {/* Render cart items */}
        {cartItems.map((item) => (
          <div className="cartItem" key={item.id}>
            <div className="squareItem">
              <Link href={`/${item.id}`} passHref>
                <Image width={350} height={350} src={item.image} alt={item.title} />
              </Link>
            </div>
            <p>{item.title}</p>
            <p>{item.price}$</p>
          </div>
        ))}
      </main>
      {cartItems && cartItems.length > 0 && (
        <Link href="#" onClick={handleClearCart} className="clearCart">
          Limpiar carrito
        </Link>
      )}
      {showPopup && <Checkout />}
      <Footer />
    </div>
  );
}

export default Cart;
