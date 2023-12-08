/*footer.js*/
import Link from 'next/link';
import LanguageDropdown from '../../components/language';

const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer-grid">
            <div className="footer-item">
              <Link href="/tr">
                Index
              </Link>
            </div>
            <div className="footer-item">
              <Link href="./">
                Ürünler
              </Link>
            </div>
            <div className="footer-item">
              <Link href="./about">
                Hakkında
              </Link>
            </div>
            <div className="footer-item">
              <Link href="./contact">
                İletişim
              </Link>
            </div>
            <div className="footer-item">
              <Link href="./faq">
                Sıkça Sorulanlar
              </Link>
            </div>
            <div className="footer-item">
              <Link href="./privacy">
                Gizlilik
              </Link>
            </div>
            <div className="footer-item">
              <Link href="./terms">
                Kullanım
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