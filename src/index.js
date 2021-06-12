mobileMenu();
function mobileMenu() {
  const menu = document.querySelector('.menu-list');
  const menuBtn = document.querySelector('.menu-btn');
  const cancelBtn = document.querySelector('.cancel-btn');
  const body = document.querySelector('body');

  menuBtn.addEventListener('click', () => {
    menu.classList.add('active');
  });
  cancelBtn.addEventListener('click', () => {
    menu.classList.remove('active');
  });
}

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.sec-2 .market',

    start: '-=600px',
  },
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sec-2 .solution ',

    start: '-=600px',
  },
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sec-2 .features .block-1 ',

    start: '-=700px',
  },
});

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sec-2 .features .block-4 ',

    start: '-=700px',
  },
});

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sec-3 .content  ',

    start: '-=700px',
  },
});

let tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sec-3 .roadmap  ',

    start: '-=700px',
  },
});

let tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: '.staking-app  ',

    start: '-=700px',
  },
});

tl.from('.sec-2 .market .image-box', {
  x: -50,
  opacity: 0,
  duration: 1,
  ease: 'power1.inOut',
});

tl.from(
  '.sec-2 .market .desc',
  {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: 'power1.inOut',
  },
  '-=0.8'
);

tl2.from('.sec-2 .solution .image-box', {
  x: -50,
  opacity: 0,
  duration: 1,
  ease: 'power1.inOut',
});
tl2.from(
  '.sec-2 .solution .desc',
  {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: 'power1.inOut',
  },
  '-=0.8'
);

tl3.from('.features .intro', {
  y: 50,
  duration: 1.5,
  opacity: 0,
  ease: 'elastic.out',
});

tl3.from(
  '.features .block-1',
  {
    y: 20,
    opacity: 0,
    duration: 0.5,
    ease: 'power1.inOut',
  },
  '-=1'
);
tl3.from(
  '.features .block-2',
  {
    y: 20,
    opacity: 0,
    duration: 0.5,

    ease: 'power1.inOut',
  },
  '-=0.8'
);
tl3.from(
  '.features .block-3',
  {
    y: 20,
    opacity: 0,
    duration: 0.5,

    ease: 'power1.inOut',
  },
  '-=0.8'
);
tl4.from('.features .block-4', {
  y: 20,
  opacity: 0,
  duration: 0.5,

  ease: 'power1.inOut',
});
tl4.from(
  '.features .block-5',
  {
    y: 20,
    opacity: 0,
    duration: 0.5,

    ease: 'power1.inOut',
  },
  '-=0.3'
);
tl4.from(
  '.features .block-6',
  {
    y: 20,
    opacity: 0,
    duration: 0.5,

    ease: 'power1.inOut',
  },
  '-=0.3'
);
tl4.from(
  '.features .block-7',
  {
    y: 20,
    opacity: 0,
    duration: 0.5,

    ease: 'power1.inOut',
  },
  '-=0.3'
);

tl5.from('.sec-3  .intro1', {
  y: 50,
  duration: 1.5,
  opacity: 0,
  ease: 'elastic.out',
});

tl5.from(
  '.sec-3 .image-box',
  {
    x: -50,
    duration: 1,
    opacity: 0,
    ease: 'power1.inOut',
  },
  '-=0.8'
);

tl5.from(
  '.sec-3 .desc-box',
  {
    x: 50,
    duration: 1,
    opacity: 0,
    ease: 'power1.inOut',
  },
  '-=0.8'
);
tl6.from('.sec-3 .roadmap .intro2', {
  y: 50,
  duration: 1.5,
  opacity: 0,
  ease: 'elastic.out',
});

tl6.from(
  '.sec-3 .roadmap img',
  {
    y: 50,
    duration: 1.5,
    opacity: 0,
    ease: 'elastic.out',
  },
  '-=0.8'
);
tl7.from('.staking-app ', {
  y: 100,
  duration: 1.5,
  opacity: 0,
  ease: 'elastic.out',
});
