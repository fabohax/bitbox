// sendEmail.js
//MODIFIY HERE:
//YOUR_MAILGUN_API_KEY
//YOUR_MAILGUN_DOMAIN
//FROM_MAIL
//TO_MAIL

import mailgun from 'mailgun-js';

const sendEmail = async (cartItems, totalPrice) => {
  const mg = mailgun({
    apiKey: 'YOUR_MAILGUN_API_KEY',
    domain: 'YOUR_MAILGUN_DOMAIN',
  });

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');

  const orderNumber = `${year}${month}${day}${hours}${minutes}`;

  const emailContent = `
    Order Confirmation
      
    Order Number: ${orderNumber}
    Date: ${currentDate}
      
    Cart Items:
    ${cartItems}
      
    Total Price: ${totalPrice}
  `;

  const data = {
    from: 'FROM_MAIL',
    to: 'TO_MAIL',
    subject: 'Order Confirmation',
    text: emailContent,
  };

  try {
    await mg.messages().send(data);
    console.log('Email sent successfully');
  } catch (error) {
    console.log('Error sending email:', error.message);
  }
};

export default sendEmail;
