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

function Cart({product}) {
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
  const itemPrice = cartItems.reduce((total, item) => item.price, 0);
  const [satoshis, setSatoshis] = useState(null);
  

  useEffect(() => {
    // Fetch the Bitcoin price from Coingecko API
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
      .then((response) => response.json())
      .then((data) => {
        const bitcoinPrice = data.bitcoin.usd; // Get the Bitcoin price in USD from the API response
        const satoshisValue = Math.floor((itemPrice / bitcoinPrice) * 100000000); // Convert price to satoshis
        setSatoshis(satoshisValue);
      })
      .catch((error) => {
        console.log('Error fetching Bitcoin price:', error);
      });
  }, [itemPrice, satoshis]);

  const totalSatPrice = (satoshis/itemPrice) * totalPrice;

  return (
    <div className="container">
      <Head>
        <title>box</title>
      </Head>
      <Header/>
      {cartItems && cartItems.length > 0 ? (
        <div className="cartCheck">
          {cartItems.length} item{cartItems.length === 1 ?('') : ('s')} : {totalSatPrice} SAT{' '}
          <Link href="#" onClick={handleCheckoutClick}>
            Buy now
          </Link>
        </div>
      ) : (
        <div className="noItems">No items grabbed yet</div>
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
            <p>{satoshis !== null ? satoshis : '[...]' } SAT</p>
          </div>
        ))}
      </main>
      {cartItems && cartItems.length > 0 && (
        <Link href="#" onClick={handleClearCart} className="clearCart">
          Clean
        </Link>
      )}
      {showPopup && <Checkout />}
      <Footer />
    </div>
  );
}

export default Cart;
