/*Checkout.js*/
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getCart, removeAllFromCart } from '../../components/Cart';

const Checkout = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    const cartItems = getCart();
    setCartItems(cartItems);
  }, []);

  const [email, setEmail] = useState('');

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const f5 = () => {
    window.location.reload();
  };
  
  const toHome = () => {
    removeAllFromCart();
    router.push('/');
  };
  const [satoshis, setSatoshis] = useState(null);

  useEffect(() => {
    // Fetch the Bitcoin price from Coingecko API
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
      .then((response) => response.json())
      .then((data) => {
        const bitcoinPrice = data.bitcoin.usd; // Get the Bitcoin price in USD from the API response
        const satoshisValue = Math.floor((totalPrice / bitcoinPrice) * 100000000); // Convert price to satoshis
        setSatoshis(satoshisValue);
      })
      .catch((error) => {
        console.log('Error fetching Bitcoin price:', error);
      });
  }, [totalPrice, satoshis]);

  return (
    <div>
      <div className="popup">
        <div className="popup-content">
          <strong><span>Sipariş #2305202121</span></strong>
          <Image src="/qr.svg" width={500} height={500} alt="QR Code" />
          <p>${totalPrice} için {cartItems.length} ürün {' '}</p>
          <p>Siparişinizi tamamlamak için lütfen aşağıdaki Bitcoin Lightning adresine {satoshis !== null ? satoshis : totalPrice} satoshi ödeme yapın:</p>
          <div className="lnurl">lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhkx6r0wpc8jerfwdnh2um5xccsl09evg</div>
          <form onSubmit={toHome}>
            <input type="text" placeholder="E-posta" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" className="submitOrder">
              Siparişi Gönder
            </button>
          </form>
          <span>
            Göndererek, <Link href="/terms">Hizmet Şartları</Link> ve <Link href="/privacy">Gizlilik Politikası</Link>ni kabul ediyorsunuz.
          </span>
        </div>
        <button onClick={f5} className="x">x</button>
      </div>
    </div>
  );
};

export default Checkout;
