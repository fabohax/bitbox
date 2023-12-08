// about.js
import Head from 'next/head';
import Header from './header';
import Footer from './footer';

const AboutPage = () => {
  return (
    <div className="container">
      <Head>
        <title>ABOUT | BITBOX</title>
      </Head>
      <Header />
      <main className="st">
        <h2>About</h2>
        <div>
        <p>BITBOX is a digital unbanked marketplace! We are a cutting-edge online platform that leverages the power of Bitcoin's Lightning Network to provide fast, secure, and cost-effective transactions for our customers.</p><p>At our store, we believe in the transformative potential of cryptocurrencies and their ability to revolutionize the way we engage in e-commerce. By embracing Bitcoin Lightning as a payment method, we offer a seamless and user-friendly shopping experience, allowing you to make instant purchases with lightning speed.</p><p>Our store features a wide range of products carefully curated to cater to various interests and preferences. Whether you're looking for electronics, fashion, home goods, or more, you'll find an extensive selection of high-quality items from trusted sellers.</p><p>We prioritize customer satisfaction and strive to provide exceptional service at every step. Our knowledgeable and friendly support team is always available to assist you with any inquiries or concerns you may have.</p><p>With our commitment to security and privacy, you can shop with confidence knowing that your transactions are encrypted and your personal information is safeguarded. We adhere to the highest industry standards to ensure a secure shopping environment.</p><p>Join us on this exciting journey into the world of cryptocurrencies and experience the convenience, speed, and freedom of Bitcoin Lightning payments. Start shopping today and unlock a new era of digital commerce!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
