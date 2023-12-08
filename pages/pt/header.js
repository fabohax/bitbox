import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Currency from '../../components/currency';

const Header = () => {

  return (
    <header className="header">
      <Link href="/">
        <Image src="/ico/bitbox.svg" className="logo" height={50} width={50} alt="main"/>
      </Link>
      <div className="searchForm">
        <input
          type="text"
          placeholder='Buscar productos'
          className="searchInput"
        />
      </div>
      <Currency />
      <Link href="/cart">
        <Image src="/ico/logo.svg" className="logo" height={50} width={50} alt="box"/>
      </Link>
    </header>
  );
};

export default Header;
