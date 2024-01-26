/* eslint-disable no-console */

export const downloadFormFunc = () => {
  const downloadFormFuncCheck = document.querySelectorAll('.button.is-download-open-trigger');
  if (downloadFormFuncCheck.length) {
    const popupBody = document.querySelector('.download-form-popup');
    const currentForm = document.querySelector('form');
    const closeButton = document.querySelector('.popup-close-button');
    const closeButtonBg = document.querySelector('.download-form-popup-bg');
    const successDownloadButton = document.querySelector('.button.success-download');
    closeButton.addEventListener('click', function () {
      popupBody.classList.add('hide');
    });
    // successDownloadButton.addEventListener('click', function () {
    //   popupBody.classList.add('hide');
    // });
    closeButtonBg.addEventListener('click', function () {
      popupBody.classList.add('hide');
    });
    currentForm.addEventListener('submit', function () {
      localStorage.setItem('userAuthorized', 'true');
      document.querySelector('.download-file-link').click();
    });
    downloadFormFuncCheck.forEach((button) => {
      button.addEventListener('click', function () {
        if (localStorage.getItem('userAuthorized') === 'true') {
          document.querySelector('.download-file-link').click();
        } else {
          popupBody.classList.remove('hide');
        }
      });
    });
  }
};
