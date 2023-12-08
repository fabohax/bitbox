import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import data from '../../db/data.json';
import Header from './header';
import Footer from './footer';


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
      <Head>
        <title>BOOKS | BITSHOP</title>
      </Head>
      <Header/>
      <div className="sections">
        <div className="section-button">
          <Link href="/apps" className="rounded-button" passHref>
            Apps
          </Link>
        </div>
        <div className="section-button">
          <Link href="/courses" className="rounded-button" passHref>
            Courses
          </Link>
        </div>
        <div className="section-button">
          <Link href="/books" className="rounded-button" passHref>
            Books
          </Link>
        </div>
        <div className="section-button">
          <Link href="/models" className="rounded-button" passHref>
            Models
          </Link>
        </div>
        <div className="section-button">
          <Link href="/nft" className="rounded-button" passHref>
            NFT
          </Link>
        </div>
      </div>
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
