import React from 'react';
import Footer from '../com/footer.js';
import syles from '../src/app/globals.css';

const PrivacyPolicyPage = () => {
  return (
    <div className='st'>
      <h1>Privacy Policy</h1>
      <p>
        At our store app, we respect and protect the privacy of our users. This privacy policy explains how we collect,
        use, disclose, and safeguard your personal information. By using our app, you consent to the data practices described
        in this policy. If you do not agree with the data practices described in this policy, please do not use the app.
      </p>
      <h2>1. Information We Collect</h2>
      <p>
        We may collect personal information from you, such as your email address and payment details,
        when you use our app to make a purchase or interact with certain features. We also collect non-personal information
        such as device information, log data, and usage information.
      </p>
      <h2>2. How We Use Your Information</h2>
      <p>
        We may use the information we collect from you for various purposes, including:
      </p>
      <ul>
        <li>Processing and fulfilling your orders</li>
        <li>Providing customer support</li>
        <li>Sending you promotional offers and updates (with your consent)</li>
        <li>Improving our app and developing new features</li>
        <li>Analyzing trends and user behavior</li>
      </ul>
      <h2>3. Information Sharing and Disclosure</h2>
      <p>
        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. However,
        we may share your information with trusted third-party service providers who assist us in operating our app and
        providing services to you.
      </p>
      <h2>4. Data Security</h2>
      <p>
        We implement reasonable security measures to protect your personal information from unauthorized access, disclosure,
        alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure,
        and we cannot guarantee absolute security.
      </p>
      <h2>5. Children's Privacy</h2>
      <p>
        Our app is not intended for use by children under the age of 13. We do not knowingly collect personal information from
        children under 13. If you are a parent or guardian and believe that your child has provided us with personal
        information, please contact us so that we can delete the information.
      </p>
      <h2>6. Changes to This Privacy Policy</h2>
      <p>
        We reserve the right to update or change this privacy policy at any time. Any changes will be effective immediately
        upon posting the revised policy. We encourage you to review this privacy policy periodically for any updates or
        changes.
      </p>
      <h2>7. Contact Us</h2>
      <p>
        If you have any questions or concerns about this privacy policy, please contact us at 40230@pm.me
      </p>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicyPage;
