import jump from '/node_modules/jump.js/dist/jump.module.js';

const home = document.getElementById('home');
const about = document.getElementById('about');
const offer = document.getElementById('offer');
const why = document.getElementById('why');
const map = document.getElementById('map');

home.addEventListener('click', () => {
  jump('.home');
});

about.addEventListener('click', () => {
  jump('.about');
});

offer.addEventListener('click', () => {
  jump('.offer');
});

why.addEventListener('click', () => {
  jump('.why');
});

map.addEventListener('click', () => {
  jump('.map');
});
