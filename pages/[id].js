/*[id].js*/
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {useRouter} from 'next/router';
import data from '../db/data.json';
import { getCart, addToCart, removeFromCart} from '../components/Cart';
import SimilarProducts from '../components/similar';
import Header from '../components/header';
import Footer from '../components/footer';

function Product({ product }) {
  const products = data.data;
  const { id, title, description, price, currency, image } = product;
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    const cartItems = getCart();
    setCartItems(cartItems);
  }, []);
  
  const router = useRouter();
  const isProductInCart = cartItems.some((item) => item.id === id);
  const GRABBER = isProductInCart ? 'REMOVE FROM CART': 'GRAB';
  const handleAddToCart = () => {
    if(isProductInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
    router.push('/cart'); 
  };  
  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };
  const [satoshis, setSatoshis] = useState(null);

  useEffect(() => {
    // Fetch the Bitcoin price from Coingecko API
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
      .then((response) => response.json())
      .then((data) => {
        const bitcoinPrice = data.bitcoin.usd; // Get the Bitcoin price in USD from the API response
        const satoshisValue = Math.floor((price / bitcoinPrice) * 100000000); // Convert price to satoshis
        setSatoshis(satoshisValue);
      })
      .catch((error) => {
        console.log('Error fetching Bitcoin price:', error);
      });
  }, [price, satoshis]);

  return (
    <div className="container">
      <Head>
        <title>{title}</title>
      </Head>
      <Header/>
      <main className="productPage">
        <div className="grid-container">
          <div className="image-container">
            <Image width={500} height={500} src={image} alt={title} />
          </div>
          <div className="details-container">
            <h1 className="title">{title}</h1>
            <p>{description}</p>
            <p>{satoshis !== null ? satoshis : '[...]' } 丰 </p>
            <button
              className={isProductInCart ? 'whiteButton' : 'buyButton'}
              onClick={handleAddToCart}
            >{GRABBER}
            </button>
          </div>
        </div>
        <SimilarProducts currentProduct={product} />
      </main>
      <Footer/>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = data.data.map((product) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const product = data.data.find((product) => product.id === id);
  if (!product) {
    return {
      props: {},
    };
  }

  return {
    props: {
      product,
    },
  };
}

export default Product;
