import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Currency from '../components/currency';

const Header = () => {

  return (
    <header className="header">
      <Link href="/">
        <Image src="/ico/bitbox.svg" className="logo" height={36} width={36} alt="logo"/>
      </Link>
      <div className="searchForm">
        <input
          type="text"
          placeholder='search'
          className="searchInput"
        />
      </div>
      <Link href="/cart">
        <Image src="/ico/logo.svg" className="logo" height={36} width={36} alt="box"/>
      </Link>
    </header>
  );
};

export default Header;
