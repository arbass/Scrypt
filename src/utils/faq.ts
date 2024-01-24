/* eslint-disable no-console */

export const faq = () => {
  const faqSection = document.querySelector('.section_faq');
  if (faqSection) {
    const faqItems = document.querySelectorAll('.cl-i_faq');

    faqItems.forEach((faqItem) => {
      const svgElements = faqItem.querySelectorAll('.cl-i_faq-svg');

      svgElements.forEach((svgElement) => {
        svgElement.classList.add('hide');
      });

      const randomIndex = Math.floor(Math.random() * svgElements.length);
      svgElements[randomIndex].classList.remove('hide');
    });
  }
};
