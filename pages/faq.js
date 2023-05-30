// faq.js
import Head from 'next/head';
import Link from 'next/link';
import Header from '../com/header';
import Footer from '../com/footer';
import styles from '../src/app/globals.css';

const FAQPage = () => {
    return (
      <div className="container">
        <Head>
        <title>FAQ |BITBIN</title>
        </Head>
        <Header/>
        <main className="st">
            <h1>Frequently Asked Questions</h1>

            <h2>How can I make a purchase using Bitcoin Lightning on this store?</h2>
            <p>To make a purchase using Bitcoin Lightning, simply select the desired items and proceed to checkout. At the payment step, choose the Bitcoin Lightning option and follow the instructions to complete the payment using your Lightning wallet.</p>

            <h2>What is the advantage of using Bitcoin Lightning for payments?</h2>
            <p>Bitcoin Lightning offers faster and cheaper transactions compared to traditional Bitcoin payments. It allows for instant payments with lower fees, making it ideal for microtransactions and enhancing the overall shopping experience.</p>

            <h2>How do I set up a Bitcoin Lightning wallet to use with this store?</h2>
            <p>To set up a Bitcoin Lightning wallet, you can choose from various wallets available for your platform. Some popular options include BlueWallet, Zap Wallet, and Wallet of Satoshi. Install a compatible wallet, follow the setup instructions, and fund your Lightning wallet to start using it for payments.</p>

            <h2>Are there any transaction fees when paying with Bitcoin Lightning?</h2>
            <p>Bitcoin Lightning transactions generally have lower fees compared to on-chain Bitcoin transactions. The exact fees may vary depending on network conditions and the Lightning wallet you use. However, the fees are typically minimal, making it cost-effective for small and frequent transactions.</p>

            <h2>Can I use my existing Bitcoin wallet or do I need a separate Lightning wallet?</h2>
            <p>You'll need a separate Bitcoin Lightning wallet specifically designed for Lightning Network transactions. While some wallets support both on-chain Bitcoin and Lightning payments, not all wallets have Lightning functionality. Make sure to choose a wallet that supports Lightning payments.</p>

            <h2>Is Bitcoin Lightning supported on mobile devices?</h2>
            <p>Yes, Bitcoin Lightning is supported on mobile devices. Many Lightning wallets have mobile versions available for iOS and Android platforms. This allows you to conveniently make Lightning payments from your smartphone or tablet.</p>

            <h2>What happens if a Lightning payment fails or is not confirmed?</h2>
            <p>If a Lightning payment fails or is not confirmed, the transaction will be automatically canceled, and no funds will be transferred. You can attempt the payment again or choose an alternative payment method to complete your purchase.</p>

            <h2>Are there any limitations on the size or value of purchases with Bitcoin Lightning?</h2>
            <p>Bitcoin Lightning is well-suited for smaller transactions and microtransactions. While there are no strict limitations on the size or value of purchases, larger transactions may require additional network capacity and liquidity within the Lightning Network.</p>

            <h2>Can I get a refund or return for items purchased with Bitcoin Lightning?</h2>
            <p>Refund and return policies for items purchased with Bitcoin Lightning may vary depending on the store's terms and conditions. It's recommended to review the store's refund and return policy before making a purchase. In case of any issues, contact the store's customer support for assistance.</p>

            <h2>How secure is the Bitcoin Lightning payment system used by this store?</h2>
            <p>The Bitcoin Lightning payment system used by this store leverages the security features of the Lightning Network and the underlying Bitcoin blockchain. The Lightning Network utilizes strong cryptographic protocols to ensure secure and private transactions. However, it's important to follow best practices for wallet security, such as using a secure wallet, keeping your recovery phrase safe, and being cautious of phishing attempts.</p>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default FAQPage;
  