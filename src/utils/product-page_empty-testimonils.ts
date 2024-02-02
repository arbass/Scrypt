/* eslint-disable no-console */

export const testimonialsSectionFunc = () => {
  const testimonialsSectionFunc_checking = document.querySelectorAll(
    '.swiper-slide.is-swiper-testimonials'
  );
  if (testimonialsSectionFunc_checking.length) {
  } else {
    const currentSlider = document.querySelector('.section_testimonials-swiper');
    if (currentSlider) {
      currentSlider.classList.add('hide');
    }
  }
};
