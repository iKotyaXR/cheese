import '../scss/style.scss'
import Swiper, { Navigation, Pagination, Lazy } from 'swiper'
Swiper.use([Navigation, Pagination, Lazy])
// init Swiper:
const swiper = new Swiper('.swiper', {
  centeredSlides: false,
  centeredSlidesBounds: true,
  watchOverflow: true,
  direction: 'horizontal',
  spaceBetween: 20,
  loop: true,
  slidesPerView: 2.4,
  spaceBetween: 20,
  lazy: true,
  observer: true,
  observeParents: true,
  keyboard: {
    enabled: true
  },
  breakpoints: {
    500: {
      slidesPerView: 3
    },
    720: {
      slidesPerView: 4
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

const burgerButton = document.getElementById('burger')
const loginButton = document.querySelector('.auth__login-button')
const menu = document.querySelector('.menu')

burgerButton.onclick = () => {
  burgerButton.classList.toggle('cross')
  loginButton.classList.toggle('hide-button')
  menu.classList.toggle('menu--hidden')
}
