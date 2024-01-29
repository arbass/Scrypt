/* eslint-disable no-console */

export const shareFunc = () => {
  const shareFuncChecker = document.querySelectorAll('[data-url]');
  if (shareFuncChecker.length) {
    shareFuncChecker.forEach((el) => {
      const currentUrl = window.location.href;
      el.setAttribute('data-url', currentUrl);
    });
  }
};
