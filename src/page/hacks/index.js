// import
import 'swiper/css';

import Swiper from 'swiper';
import { Autoplay, Manipulation, Navigation, Pagination } from 'swiper/modules';

import {
  body,
  colors,
  currentIndex,
  job,
  linkedin,
  name,
  photo,
  quote,
  swiperEl,
  tagList,
  templateTag,
  totalIndex,
} from './const.js';
import { fetchDataAsync } from './fetch.js';

// const
let currentColor = '';

// putData();
totalIndex.textContent = '11';

//// swiper
let mySwiper;
function initSwiper() {
  mySwiper = new Swiper(swiperEl, {
    modules: [Navigation, Pagination, Autoplay, Manipulation],
    loop: true,
    slidesPerView: 1,
    spaceBetween: '3%',
    speed: 1000,
    slideActiveClass: 'is-active',
    navigation: {
      nextEl: '.hack_dash_arrow_item.is-next',
      prevEl: '.hack_dash_arrow_item.is-prev',
    },
    on: {
      init: function () {
        console.log('Swiper has been initialized');
      },
      slideChange: function () {
        let slideActive = document.querySelector('.is-active');
        let newColor = currentColor;
        while (newColor === currentColor) {
          newColor = colors[Math.floor(Math.random() * colors.length)];
        }
        currentColor = newColor;
        body.setAttribute('data-color', newColor);
      },
    },
  });
}

const displayData = function (data) {
  // Parcourez les données et créez une slide pour chaque élément
  // const { items } = data;
  const templateSlide = document.querySelector('.swiper-slide');

  data.forEach((item) => {
    var clone = templateSlide.cloneNode(true);
    currentIndex.textContent = item.id;
    name.textContent = item.nom;
    quote.innerHTML = item.Temoignages_corriges;
    photo.setAttribute('src', item.img_url);
    mySwiper.appendSlide(clone);
  });
  templateSlide.style.display = 'none';
};

fetchDataAsync()
  .then((data) => {
    initSwiper();
    return data;
  })
  .then((data) => {
    displayData(data);
  })
  .catch((error) => {
    console.error('Erreur :', error);
  });
