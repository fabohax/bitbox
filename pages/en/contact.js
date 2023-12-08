// contact.js
import Head from 'next/head';
import Link from 'next/link';
import Header from './header';
import Footer from './footer';

const ContactPage = () => {
    return (
        <div className="container">
            <Head>
            <title>contact</title>
            </Head>
            <Header/>
            <main className="contact">
                <h1>Contact Me</h1>
                <p>
                To enhance or purchase this Bitcoin Shop template, kindly reach out to me via email at{' '}
                <Link href="mailto:40230@pm.me">40230@pm.me</Link>
                </p>
                <p><Link href="https://fabohax.xyz">fabohax.xyz</Link></p>
            </main>
            <Footer/>
        </div>
    );
  };
  
  export default ContactPage;
  