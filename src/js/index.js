import '../scss/style.scss'
import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])
// init Swiper:
const swiper = new Swiper('.swiper', {
  centeredSlides: false,
  centeredSlidesBounds: true,
  watchOverflow: true,
  direction: 'horizontal',
  slidesPerView: 2.4,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
