/* eslint-disable no-console */

export const popupFunct = () => {
  const popUpEl = document.querySelector('[trigger-popup-slug]');
  if (popUpEl) {
    const allPopupTriggers = document.querySelectorAll('[trigger-popup-slug]');
    const allCloseButtons = document.querySelectorAll('.button.is-visionary-team');
    allCloseButtons.forEach((button) => {
      button.addEventListener('click', function () {
        button.closest('.visionary-team_popup-wrapper').classList.add('hide');
      });
    });

    allPopupTriggers.forEach((trigger) => {
      trigger.addEventListener('click', function () {
        const currentSlug = trigger.getAttribute('trigger-popup-slug');
        document.querySelector('[popup-slug="' + currentSlug + '"]').classList.remove('hide');
      });
    });
  }
};
