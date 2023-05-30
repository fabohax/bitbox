/*header.js*/
import Link from 'next/link';
import Image from 'next/image';
import Currency from '../com/currency';

const Header = () => {
    return (
        <header className="header">
            <Link href="/">
            <h1 className="head">BITBIN</h1>
            </Link>
            <div className="searchForm">
            <input type="text" placeholder="Search for products" className="searchInput" />
            </div>
            <Currency/>
            <Link href="/cart">
                <Image src="/ico/logo.svg" className="logo" height={50} width={50}></Image>
            </Link>
        </header>
    )
}

export default Header;