const localtimetag = document.querySelector('#localtime');
const localdatetag = document.querySelector('#localdate');
const clocktimer = () => {
  const localtime = new Date();

  localdatetag.innerText = `${String(localtime.getMonth() + 1).padStart(
    2,
    0
  )}/${String(localtime.getDate()).padStart(2, '0')} `;
  localtimetag.innerText = `${String(localtime.getHours()).padStart(
    2,
    0
  )}:${String(localtime.getMinutes()).padStart(2, '0')} `;
};

clocktimer();
setInterval(clocktimer, 1000);
