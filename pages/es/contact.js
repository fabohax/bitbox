// contact.js
import Head from 'next/head';
import Link from 'next/link';
import Header from './header';
import Footer from './footer';

const ContactPage = () => {
    return (
        <div className="container">
            <Head>
            <title>CONTACT | BITBIN</title>
            </Head>
            <Header/>
            <main className="contact">
                <h1>Contact Us</h1>
                <p>
                For any inquiries or questions,
                please send an email to{' '}
                <Link href="mailto:40230@pm.me">40230@pm.me</Link>.
                </p>
                <p>
                    You can also check my site at:
                    <Link href="fabohax.xyz" target="_blank">fabohax.xyz</Link>
                </p>
            </main>
            <Footer/>
        </div>
    );
  };
  
  export default ContactPage;
  