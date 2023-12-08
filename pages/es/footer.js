/*footer.js*/
import Link from 'next/link';
import LanguageDropdown from '../../components/language';

const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer-grid">
            <div className="footer-item">
              <Link href="/">
                Inicio
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/">
                Productos
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/about">
                Info
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/contact">
                Contacto
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/faq">
                FAQs
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/privacy">
                Privacidad
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/terms">
                Términos
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