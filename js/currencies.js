const currencyTag = document.getElementById('currencyInfo');
const currencyamtTag = document.getElementById('currencyamt');

const krwflagTag = document.createElement('img');
const usdflagTag = document.createElement('img');

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'KRW',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

function currencyInfo() {
  fetch(
    'https://openexchangerates.org/api/latest.json?app_id=&symbols=KRW,JPY,CNY'
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      krwflagTag.src = './img/krw.png';
      krwflagTag.style = 'width:20px;vertical-align:sub';
      currencyTag.prepend(krwflagTag);
      currencyamtTag.innerText = ` ${formatter.format(data.rates.KRW)}  =  `;
      usdflagTag.src = './img/usd.png';
      usdflagTag.style = 'width:20px;vertical-align:sub';
      currencyTag.appendChild(usdflagTag);
      currencyamtTag.appendChild(document.createTextNode(' $1.00 '));
    })
    .catch((error) => {
      krwflagTag.src = './img/krw.png';
      krwflagTag.style = 'width:20px;vertical-align:sub';
      currencyTag.prepend(krwflagTag);
      currencyamtTag.innerText = ` ${formatter.format(1275)}  =  `;
      usdflagTag.src = './img/usd.png';
      usdflagTag.style = 'width:20px;vertical-align:sub';
      currencyTag.appendChild(usdflagTag);
      currencyamtTag.appendChild(document.createTextNode(' $1.00 '));
    });
}

currencyInfo();
