(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7450],{3014:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pt/cart",function(){return n(1896)}])},1727:function(e,r,n){"use strict";n.d(r,{O0:function(){return removeAllFromCart},Xq:function(){return addToCart},dv:function(){return getCart},h2:function(){return removeFromCart}});let getCart=()=>{if(!window.localStorage)return[];try{let e=localStorage.getItem("cart");return e?JSON.parse(e):[]}catch(e){return console.error("Error retrieving cart from local storage:",e),[]}},addToCart=e=>{try{let r=getCart(),n=[...r,e];return localStorage.setItem("cart",JSON.stringify(n)),n}catch(e){return console.error("Error adding to cart:",e),[]}},removeFromCart=e=>{try{let r=getCart(),n=r.filter(r=>r.id!==e.id);return localStorage.setItem("cart",JSON.stringify(n)),n}catch(e){return console.error("Error removing from cart:",e),[]}},removeAllFromCart=()=>{let e=localStorage.getItem("cart");if(!e)return[];try{return localStorage.removeItem("cart"),[]}catch(e){return console.error("Error removing all items from cart:",e),[]}}},9163:function(e,r,n){"use strict";var i=n(5893),t=n(7294),a=n(1664),o=n.n(a),l=n(5675),s=n.n(l),c=n(1163),d=n(1727);r.Z=()=>{let e=(0,c.useRouter)(),[r,n]=(0,t.useState)([]);(0,t.useEffect)(()=>{let e=(0,d.dv)();n(e)},[]);let[a,l]=(0,t.useState)(""),h=r.reduce((e,r)=>e+r.price,0),[u,x]=(0,t.useState)(null);return(0,t.useEffect)(()=>{fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd").then(e=>e.json()).then(e=>{let r=e.bitcoin.usd,n=Math.floor(h/r*1e8);x(n)}).catch(e=>{console.log("Error fetching Bitcoin price:",e)})},[h,u]),(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"popup",children:[(0,i.jsxs)("div",{className:"popup-content text-center justify-center items-center",children:[(0,i.jsx)("strong",{children:(0,i.jsx)("span",{children:"Order #2305202121"})}),(0,i.jsx)("div",{className:"mx-auto",children:(0,i.jsx)(s(),{src:"/qr.svg",width:100,height:100,alt:"QR Code"})}),(0,i.jsxs)("p",{children:[r.length," item",1===r.length?"":"s"," in box."]}),(0,i.jsxs)("p",{children:["To proceed with your order, please make a payment of ",null!==u?u:h," satoshis to the following Bitcoin Lightning address:"]}),(0,i.jsx)("div",{className:"lnurl",children:"lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhkx6r0wpc8jerfwdnh2um5xccsl09evg"}),(0,i.jsx)("form",{onSubmit:()=>{(0,d.O0)(),e.push("/")},children:(0,i.jsx)("button",{type:"submit",className:"submitOrder rounded-md",children:"Submit Order"})}),(0,i.jsxs)("span",{children:["By submitting, you accept our ",(0,i.jsx)(o(),{href:"/terms",className:"underline",children:"Terms of Service"})," and ",(0,i.jsx)(o(),{href:"/privacy",className:"underline",children:"Privacy Policy"}),"."]})]}),(0,i.jsx)("button",{onClick:()=>{window.location.reload()},className:"x",children:"x"})]})})}},5850:function(e,r,n){"use strict";var i=n(5893),t=n(7294);r.Z=()=>{let[e,r]=(0,t.useState)("en");return(0,i.jsx)("div",{className:"dropdown cy",children:(0,i.jsxs)("select",{className:"dropdown-select",value:e,onChange:e=>{r(e.target.value)},children:[(0,i.jsx)("option",{value:"SAT",children:"Satoshis (SAT)"}),(0,i.jsx)("option",{value:"USD",children:"United States Dollar (USD)"}),(0,i.jsx)("option",{value:"EUR",children:"Euro (EUR)"}),(0,i.jsx)("option",{value:"JPY",children:"Japanese Yen (JPY)"}),(0,i.jsx)("option",{value:"GBP",children:"British Pound Sterling (GBP)"}),(0,i.jsx)("option",{value:"CHF",children:"Swiss Franc (CHF)"}),(0,i.jsx)("option",{value:"CAD",children:"Canadian Dollar (CAD)"}),(0,i.jsx)("option",{value:"AUD",children:"Australian Dollar (AUD)"}),(0,i.jsx)("option",{value:"NZD",children:"New Zealand Dollar (NZD)"}),(0,i.jsx)("option",{value:"CNY",children:"Chinese Yuan (CNY)"}),(0,i.jsx)("option",{value:"INR",children:"Indian Rupee (INR)"}),(0,i.jsx)("option",{value:"RUB",children:"Russian Ruble (RUB)"}),(0,i.jsx)("option",{value:"BRL",children:"Brazilian Real (BRL)"}),(0,i.jsx)("option",{value:"MXN",children:"Mexican Peso (MXN)"}),(0,i.jsx)("option",{value:"ZAR",children:"South African Rand (ZAR)"}),(0,i.jsx)("option",{value:"TRY",children:"Turkish Lira (TRY)"}),(0,i.jsx)("option",{value:"SAR",children:"Saudi Riyal (SAR)"}),(0,i.jsx)("option",{value:"AED",children:"Emirati Dirham (AED)"}),(0,i.jsx)("option",{value:"SGD",children:"Singapore Dollar (SGD)"}),(0,i.jsx)("option",{value:"HKD",children:"Hong Kong Dollar (HKD)"}),(0,i.jsx)("option",{value:"KRW",children:"South Korean Won (KRW)"}),(0,i.jsx)("option",{value:"SEK",children:"Swedish Krona (SEK)"}),(0,i.jsx)("option",{value:"NOK",children:"Norwegian Krone (NOK)"}),(0,i.jsx)("option",{value:"DKK",children:"Danish Krone (DKK)"}),(0,i.jsx)("option",{value:"PLN",children:"Polish Złoty (PLN)"}),(0,i.jsx)("option",{value:"THB",children:"Thai Baht (THB)"}),(0,i.jsx)("option",{value:"IDR",children:"Indonesian Rupiah (IDR)"}),(0,i.jsx)("option",{value:"MYR",children:"Malaysian Ringgit (MYR)"}),(0,i.jsx)("option",{value:"PHP",children:"Philippine Peso (PHP)"}),(0,i.jsx)("option",{value:"ARS",children:"Peruvian Sol (PEN)"}),(0,i.jsx)("option",{value:"ARS",children:"Argentine Peso (ARS)"}),(0,i.jsx)("option",{value:"COP",children:"Colombian Peso (COP)"}),(0,i.jsx)("option",{value:"CLP",children:"Chilean Peso (CLP)"}),(0,i.jsx)("option",{value:"EGP",children:"Egyptian Pound (EGP)"}),(0,i.jsx)("option",{value:"ILS",children:"Israeli Shekel (ILS)"}),(0,i.jsx)("option",{value:"PKR",children:"Pakistani Rupee (PKR)"}),(0,i.jsx)("option",{value:"KWD",children:"Kuwaiti Dinar (KWD)"}),(0,i.jsx)("option",{value:"QAR",children:"Qatari Riyal (QAR)"}),(0,i.jsx)("option",{value:"OMR",children:"Omani Rial (OMR)"}),(0,i.jsx)("option",{value:"VEF",children:"Venezuelan Bol\xedvar (VEF)"}),(0,i.jsx)("option",{value:"CZK",children:"Czech Koruna (CZK)"}),(0,i.jsx)("option",{value:"HUF",children:"Hungarian Forint (HUF)"}),(0,i.jsx)("option",{value:"RON",children:"Romanian Leu (RON)"}),(0,i.jsx)("option",{value:"HRK",children:"Croatian Kuna (HRK)"}),(0,i.jsx)("option",{value:"BGN",children:"Bulgarian Lev (BGN)"}),(0,i.jsx)("option",{value:"ISK",children:"Icelandic Kr\xf3na (ISK)"}),(0,i.jsx)("option",{value:"UAH",children:"Ukrainian Hryvnia (UAH)"}),(0,i.jsx)("option",{value:"VND",children:"Vietnamese Đồng (VND)"}),(0,i.jsx)("option",{value:"KZT",children:"Kazakhstani Tenge (KZT)"}),(0,i.jsx)("option",{value:"NGN",children:"Nigerian Naira (NGN)"}),(0,i.jsx)("option",{value:"KES",children:"Kenyan Shilling (KES)"}),(0,i.jsx)("option",{value:"GHS",children:"Ghanaian Cedi (GHS)"})]})})}},4329:function(e,r,n){"use strict";var i=n(5893);n(7294),n(5675),n(1664);var t=n(1163);r.Z=()=>{let e=(0,t.useRouter)();return(0,i.jsx)("div",{className:"dropdown",children:(0,i.jsxs)("select",{className:"dropdown-select",onChange:r=>{let n=r.target.value;e.push("/".concat(n))},children:[(0,i.jsx)("option",{value:"select",children:"文A"}),(0,i.jsx)("option",{value:"en",children:"English"}),(0,i.jsx)("option",{value:"es",children:"Espa\xf1ol"}),(0,i.jsx)("option",{value:"pt",children:"Portugu\xeas"}),(0,i.jsx)("option",{value:"tr",children:"T\xfcrk\xe7e"}),(0,i.jsx)("option",{value:"ru",children:"Русский"})]})})}},1896:function(e,r,n){"use strict";n.r(r);var i=n(5893),t=n(7294),a=n(9008),o=n.n(a),l=n(1664),s=n.n(l),c=n(5675),d=n.n(c),h=n(1163),u=n(1727),x=n(9163),j=n(6525),p=n(2387);r.default=function(){(0,h.useRouter)();let[e,r]=(0,t.useState)(!1),[n,a]=(0,t.useState)([]),[l,c]=(0,t.useState)(!1);(0,t.useEffect)(()=>{c(!0)},[]),(0,t.useEffect)(()=>{let e=(0,u.dv)();a(e)},[]);let v=n.reduce((e,r)=>e+r.price,0);return(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(o(),{children:(0,i.jsx)("title",{children:"CARRO | PUK"})}),(0,i.jsx)(j.default,{}),n&&n.length>0?(0,i.jsxs)("div",{className:"cartCheck",children:[n.length," productos por $",v," ",(0,i.jsx)(s(),{href:"#",onClick:()=>{r(!0)},children:"Comprar ahora"})]}):(0,i.jsx)("div",{className:"noItems",children:"No hay art\xedculos en el carrito"}),(0,i.jsx)("main",{className:"grid ".concat(l?"visible":""),children:n.map(e=>(0,i.jsxs)("div",{className:"cartItem",children:[(0,i.jsx)("div",{className:"squareItem",children:(0,i.jsx)(s(),{href:"/".concat(e.id),passHref:!0,children:(0,i.jsx)(d(),{width:350,height:350,src:e.image,alt:e.title})})}),(0,i.jsx)("p",{children:e.title}),(0,i.jsxs)("p",{children:[e.price,"$"]})]},e.id))}),n&&n.length>0&&(0,i.jsx)(s(),{href:"#",onClick:()=>{(0,u.O0)(),window.location.reload()},className:"clearCart",children:"Limpiar carrito"}),e&&(0,i.jsx)(x.Z,{}),(0,i.jsx)(p.default,{})]})}},2387:function(e,r,n){"use strict";n.r(r);var i=n(5893),t=n(1664),a=n.n(t),o=n(4329);r.default=()=>(0,i.jsx)("footer",{className:"footer",children:(0,i.jsxs)("div",{className:"footer-grid",children:[(0,i.jsx)("div",{className:"footer-item",children:(0,i.jsx)(a(),{href:"/",children:"Index"})}),(0,i.jsx)("div",{className:"footer-item",children:(0,i.jsx)(a(),{href:"/",children:"Productos"})}),(0,i.jsx)("div",{className:"footer-item",children:(0,i.jsx)(a(),{href:"/about",children:"Info"})}),(0,i.jsx)("div",{className:"footer-item",children:(0,i.jsx)(a(),{href:"/contact",children:"Contacto"})}),(0,i.jsx)("div",{className:"footer-item",children:(0,i.jsx)(a(),{href:"/faq",children:"FAQ"})}),(0,i.jsx)("div",{className:"footer-item",children:(0,i.jsx)(a(),{href:"/privacy",children:"Privacidad"})}),(0,i.jsx)("div",{className:"footer-item",children:(0,i.jsx)(a(),{href:"/terms",children:"T\xe9rminos"})}),(0,i.jsx)("div",{className:"footer-item",children:(0,i.jsx)(o.Z,{})})]})})},6525:function(e,r,n){"use strict";n.r(r);var i=n(5893);n(7294);var t=n(1664),a=n.n(t),o=n(5675),l=n.n(o),s=n(5850);r.default=()=>(0,i.jsxs)("header",{className:"header",children:[(0,i.jsx)(a(),{href:"/",children:(0,i.jsx)(l(),{src:"/ico/bitbox.svg",className:"logo",height:50,width:50,alt:"main"})}),(0,i.jsx)("div",{className:"searchForm",children:(0,i.jsx)("input",{type:"text",placeholder:"Buscar productos",className:"searchInput"})}),(0,i.jsx)(s.Z,{}),(0,i.jsx)(a(),{href:"/cart",children:(0,i.jsx)(l(),{src:"/ico/logo.svg",className:"logo",height:50,width:50,alt:"box"})})]})},1163:function(e,r,n){e.exports=n(4751)}},function(e){e.O(0,[1664,5675,9774,2888,179],function(){return e(e.s=3014)}),_N_E=e.O()}]);