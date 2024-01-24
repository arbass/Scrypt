/* eslint-disable no-console */

export const formFunc = () => {
  const formEl = document.querySelector('.input-wrapper.is-dropdown');
  if (formEl) {
    const allInputsDropdown = document.querySelectorAll('.input-wrapper.is-dropdown');
    allInputsDropdown.forEach((el) => {
      el.addEventListener('click', function () {
        allInputsDropdown.forEach((el_drop) => {
          el_drop.classList.remove('z-index-4');
        });
        el.classList.add('z-index-4');
      });
    });
  }
};
