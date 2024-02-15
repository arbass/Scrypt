/* eslint-disable no-console */

export const requestCallFunc = () => {
  const requestCallFunc_checker = document.querySelectorAll('[request-call-popup-trigger]');
  if (requestCallFunc_checker.length) {
    requestCallFunc_checker.forEach((button) => {
      button.addEventListener('click', function () {
        document.querySelector('[request-form-popup]').classList.remove('hide');
      });
    });
  }

  document.querySelector('.popup-close-button').addEventListener('click', function () {
    document.querySelector('[request-form-popup]').classList.add('hide');
  });
};
