const default_image = 'https://picsum.photos/1920/1080';

const offline_image = ['0.jpeg', '1.jpeg', '2.jpeg'];

//const imgTag = document.createElement('img');
const imgTag = document.querySelector('body');

function DefaultLoadImage() {
  imgTag.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${default_image}')`;

  // imgTag.src = default_image;
  // document.body.appendChild(imgTag);
}

function OfflineLoadImage() {
  imgTag.src = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./img/${
    offline_image[Math.floor(Math.random() * 3)]
  }')`;
  document.body.appendChild(imgTag);
}

if (navigator.onLine) {
  DefaultLoadImage();
} else {
  OfflineLoadImage();
}
