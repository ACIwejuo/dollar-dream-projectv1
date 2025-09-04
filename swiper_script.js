new Swiper('.image-wrapper', {
  loop: true,
  spaceBetween: 16,

   autoplay: {
    delay: 3000,              
    disableOnInteraction: true, 
    pauseOnMouseEnter: true,    
  },

  // Pagination Bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive Breakpoints
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 1
    },
    1024: {
        slidesPerView: 1
    },
  }

});