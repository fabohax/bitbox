import React from 'react';
import Footer from './footer.js';

const TermsOfServicePage = () => {
  return (
    <div className='st'>
      <h1>Terms of Service</h1>
      <p>
        Welcome to our store app! These terms of service outline the rules and regulations for the use of our app.
        By accessing or using the app, you agree to comply with these terms. If you do not agree with any part of these terms,
        please do not use the app.
      </p>
      <h2>1. Intellectual Property Rights</h2>
      <p>
        The app and its original content, features, and functionality are owned by us and are protected by international
        copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
      </p>
      <h2>2. Use License</h2>
      <p>
        Permission is granted to temporarily download one copy of the app for personal, non-commercial transitory viewing only.
        This is the grant of a license, not a transfer of title, and under this license, you may not:
      </p>
      <ul>
        <li>modify or copy the app's content</li>
        <li>use the app for any commercial purpose or for any public display (commercial or non-commercial)</li>
        <li>attempt to decompile or reverse engineer any software contained in the app</li>
        <li>remove any copyright or other proprietary notations from the app</li>
        <li>transfer the app to another person or 'mirror' the app on any other server</li>
      </ul>
      <h2>3. Disclaimer</h2>
      <p>
        The app is provided on an 'as is' and 'as available' basis without any representations or warranties, express or implied.
        We do not warrant that the app will be available, uninterrupted, secure, or error-free. Your use of the app is at your
        sole risk.
      </p>
      <h2>4. Limitations</h2>
      <p>
        In no event shall we be liable for any indirect, consequential, incidental, special, or punitive damages, including
        without limitation, loss of profits, data, use, goodwill, or other intangible losses, arising out of or in connection
        with your use of the app.
      </p>
      <h2>5. Governing Law</h2>
      <p>
        These terms shall be governed and construed in accordance with the laws of Catawba, without regard to its
        conflict of law provisions.
      </p>
      <h2>6. Changes to Terms</h2>
      <p>
        We reserve the right to revise or replace these terms of service at any time without prior notice. By continuing to use
        the app after any revisions become effective, you agree to be bound by the updated terms.
      </p>
      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about these terms of service, please contact us at 40230@pm.me.
      </p>
      <Footer/>
    </div>
  );
};

export default TermsOfServicePage;
