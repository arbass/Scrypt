/* eslint-disable no-console */

export const productCheckboxFunc = () => {
  const productCheckboxFunc_checker = document.querySelector('.form-cta_form-block');
  if (productCheckboxFunc_checker) {
    if (window.location.hash) {
      const allProductInputs = document.querySelectorAll('.input-wrapper.is-product-list input');
      allProductInputs.forEach((input) => {
        let currentCategory = input.getAttribute('id');
        currentCategory = '#' + currentCategory;

        if (currentCategory === window.location.hash) {
          const closestClicker = input.closest('.dropdotwn-options_field');

          setTimeout(function () {
            closestClicker.click();
          }, 500);
        }
      });
    }
  }
};
