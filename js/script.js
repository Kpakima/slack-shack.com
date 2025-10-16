'use strict';
const sliderBtnEl = document.querySelectorAll('.category__slide-btn');
const sliderEl = document.querySelector('.category__slider');
const mealWishBtnEl = document.querySelectorAll('.meal__btn-wish');

const testimonialSlideEl = document.querySelectorAll(
  '.testimonials__testimonial'
);
const prevSlideBtnEl = document.querySelector('.testimonials__prev-slide-btn');
const nextSlideBtnEl = document.querySelector('.testimonials__next-slide-btn');
const mobileMenuBtnEl = document.querySelector('.header__mobile-menu-btn');
const mobileBtnIconEl = document.querySelector('.header__mobile-menu-btn-icon');
const headerNavListEl = document.querySelector('.header__nav-list');
const bodyEl = document.querySelector('body');
const closeMenuBtnEl = document.querySelector('.header__close-menu-btn');

//Category slider functionality
const maxScrollLeft =
  sliderEl.scrollWidth - sliderEl.getBoundingClientRect().width;

sliderBtnEl.forEach(btn => {
  btn.addEventListener('click', function () {
    const direction = btn.id === 'prev-slide' ? -1 : 1;
    const scrollAmount = sliderEl.getBoundingClientRect().width * direction;
    console.log(sliderEl.scrollLeft);
    sliderEl.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});

const hideSliderBtns = function () {
  sliderBtnEl[0].style.display = sliderEl.scrollLeft <= 0 ? 'none' : 'block';
  sliderBtnEl[1].style.display =
    sliderEl.scrollLeft >= maxScrollLeft ? 'none' : 'block';
};

sliderEl.addEventListener('scroll', hideSliderBtns);

// add to wish list functionality
// mealWishBtnEl.forEach(function (button) {
//   button.addEventListener('click', function () {
//     button.classList.add('toggle');
//   });
// });

// Slider component functionality
let curSlide = 0;
let maxSlide = testimonialSlideEl.length;
console.log(curSlide, maxSlide);

testimonialSlideEl.forEach(
  (s, i) => (s.style.transform = `translateX(${100 * i}%)`)
);

// next slide
nextSlideBtnEl.addEventListener('click', function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  testimonialSlideEl.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
});

console.log(0 - 0);

//previous slide
prevSlideBtnEl.addEventListener('click', function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  testimonialSlideEl.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
});

// Mobile Menu functionality
const showMobileMenu = function () {
  headerNavListEl.classList.toggle('show-nav-list');
  mobileMenuBtnEl.classList.toggle('change-icon');
};

mobileMenuBtnEl.addEventListener('click', showMobileMenu);
