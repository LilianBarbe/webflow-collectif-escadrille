// import
import 'tippy.js/dist/tippy.css';
import 'swiper/css';

import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import posthog from 'posthog-js';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import tippy from 'tippy.js';

import { setUpAccordions } from '$utils/accordeon-autoclose.ts';
gsap.registerPlugin(ScrollTrigger);

console.log('working local');

// construct
// posthog
if (
  !window.location.host.includes('127.0.0.1') &&
  !window.location.host.includes('localhost') &&
  !window.location.host.includes('webflow.io')
) {
  posthog.init('phc_wPpJiWuuJP2Nx2sJdyyhDEyVyBkIvVH7uT90AHUsHHK', {
    api_host: 'https://app.posthog.com',
  });
}

setUpAccordions();
tippy('[data-tippy-content]');

const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

//// const
const avatars = document.querySelectorAll('[data-hero-avatar]');
const textSlideActive = document.querySelector('[slider-active]');
const textSlideTotal = document.querySelector('[slider-total]');
const coursTitre = document.querySelectorAll('[data-cours-titre]');
const coursText = document.querySelectorAll('[data-cours-text]');
// cards
const appearElements = document.querySelectorAll('[data-nf-card]');

//// functions

// swiper
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],
  loop: true,
  speed: 0,
  allowTouchMove: true,
  autoplay: {
    delay: 7000,
    waitForTransition: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiper.on('slideChange', function () {
  let tl = gsap.timeline({ ease: 'power2.out' });
  gsap.set('.swiper-slide', { opacity: 0 });
  tl.fromTo('.swiper-slide', { opacity: 0 }, { opacity: 1 });
  textSlideActive.textContent = swiper.realIndex + 1;
  textSlideTotal.textContent = swiper.slides.length;
});

// cours section
coursText.forEach((text, index) => {
  ScrollTrigger.create({
    trigger: text,
    start: 'top 30%',
    end: 'top 30%',
    // markers: true,
    onEnter: () => {
      if (index > 0) {
        coursTitre[index - 1].classList.remove('is-active');
        coursText[index - 1].classList.remove('is-active');
      }
      coursTitre[index].classList.add('is-active');
      coursText[index].classList.add('is-active');
    },
    onEnterBack: () => {
      if (index > 0) {
        coursTitre[index].classList.remove('is-active');
        coursTitre[index - 1].classList.add('is-active');

        coursText[index].classList.remove('is-active');
        coursText[index - 1].classList.add('is-active');
      }
    },
  });
});

coursText[0].classList.add('is-active');
coursTitre[0].classList.add('is-active');

coursTitre.forEach((btn, index) => {
  btn.addEventListener('click', function () {
    coursText[index].scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// animations yellow card
appearElements.forEach(function (card) {
  const section = card.closest('section');
  gsap.from(card, {
    scale: 0, // Part de l'échelle 0
    opacity: 0,
    ease: 'power2.out',
    stagger: 0.2,
    duration: 0.8, // Durée de l'animation en secondes
    scrollTrigger: {
      markers: false,
      trigger: section, // Le déclencheur d'animation
      start: 'top 80%', // Position de départ pour déclencher
    },
  });
});
