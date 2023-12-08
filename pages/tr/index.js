/*index.js*/
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import data from '../../db/data.json';
import Header from './header';
import Footer from './footer';
import Sections from './sections';

export default function Home() {

  const [products, setProducts] = useState(data.data);

  useEffect(() => {
    setProducts(data.data);
  }, []);

  const [isGrid, setGrid] = useState(false);

  useEffect(() => {
    setGrid(true);
  }, []);

  return (
    <div className="container">
      <Header/>
      <Sections/>
      <main className={`grid ${isGrid ? 'visible' : ''}`}>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <Link href={`/${product.id}`} passHref>
              <Image width={350} height={350} src={product.image} alt={product.title} />
            </Link>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
