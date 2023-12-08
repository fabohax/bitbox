/*footer.js*/
import Link from 'next/link';
import LanguageDropdown from './language';

const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer-grid">
            <div className="footer-item">
              <Link href="/">
                Index
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/">
                Products
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/about">
                About
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/contact">
                Contact
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/faq">
                FAQ
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/privacy">
                Privacy Policy
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/terms">
                Terms of Service
              </Link>
            </div>
            <div className="footer-item">
                <LanguageDropdown/>
            </div>
          </div>
        </footer>
    );
}

export default Footer;