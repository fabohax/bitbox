/* Currency.js */
import { useState } from 'react';

const Currency = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('en');

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    // Implement logic to handle Currency change
  };

  // Function to get translated text based on the selected Currency
  const getTranslatedText = (key) => {
    return translations[selectedCurrency][key] || key;
  };

  return (
    <div className="dropdown cy">
      <select className="dropdown-select" value={selectedCurrency} onChange={handleCurrencyChange}>
        <option value="SAT">Bitcoin Satoshis (SAT)</option>
        <option value="USD">United States Dollar (USD)</option>
        <option value="EUR">Euro (EUR)</option>
        <option value="JPY">Japanese Yen (JPY)</option>
        <option value="GBP">British Pound Sterling (GBP)</option>
        <option value="CHF">Swiss Franc (CHF)</option>
        <option value="CAD">Canadian Dollar (CAD)</option>
        <option value="AUD">Australian Dollar (AUD)</option>
        <option value="NZD">New Zealand Dollar (NZD)</option>
        <option value="CNY">Chinese Yuan (CNY)</option>
        <option value="INR">Indian Rupee (INR)</option>
        <option value="RUB">Russian Ruble (RUB)</option>
        <option value="BRL">Brazilian Real (BRL)</option>
        <option value="MXN">Mexican Peso (MXN)</option>
        <option value="ZAR">South African Rand (ZAR)</option>
        <option value="TRY">Turkish Lira (TRY)</option>
        <option value="SAR">Saudi Riyal (SAR)</option>
        <option value="AED">Emirati Dirham (AED)</option>
        <option value="SGD">Singapore Dollar (SGD)</option>
        <option value="HKD">Hong Kong Dollar (HKD)</option>
        <option value="KRW">South Korean Won (KRW)</option>
        <option value="SEK">Swedish Krona (SEK)</option>
        <option value="NOK">Norwegian Krone (NOK)</option>
        <option value="DKK">Danish Krone (DKK)</option>
        <option value="PLN">Polish Złoty (PLN)</option>
        <option value="THB">Thai Baht (THB)</option>
        <option value="IDR">Indonesian Rupiah (IDR)</option>
        <option value="MYR">Malaysian Ringgit (MYR)</option>
        <option value="PHP">Philippine Peso (PHP)</option>
        <option value="ARS">Peruvian Sol (PEN)</option>
        <option value="ARS">Argentine Peso (ARS)</option>
        <option value="COP">Colombian Peso (COP)</option>
        <option value="CLP">Chilean Peso (CLP)</option>
        <option value="EGP">Egyptian Pound (EGP)</option>
        <option value="ILS">Israeli Shekel (ILS)</option>
        <option value="PKR">Pakistani Rupee (PKR)</option>
        <option value="KWD">Kuwaiti Dinar (KWD)</option>
        <option value="QAR">Qatari Riyal (QAR)</option>
        <option value="OMR">Omani Rial (OMR)</option>
        <option value="VEF">Venezuelan Bolívar (VEF)</option>
        <option value="CZK">Czech Koruna (CZK)</option>
        <option value="HUF">Hungarian Forint (HUF)</option>
        <option value="RON">Romanian Leu (RON)</option>
        <option value="HRK">Croatian Kuna (HRK)</option>
        <option value="BGN">Bulgarian Lev (BGN)</option>
        <option value="ISK">Icelandic Króna (ISK)</option>
        <option value="UAH">Ukrainian Hryvnia (UAH)</option>
        <option value="VND">Vietnamese Đồng (VND)</option>
        <option value="KZT">Kazakhstani Tenge (KZT)</option>
        <option value="NGN">Nigerian Naira (NGN)</option>
        <option value="KES">Kenyan Shilling (KES)</option>
        <option value="GHS">Ghanaian Cedi (GHS)</option>
      </select>
    </div>

  );
};

export default Currency;
