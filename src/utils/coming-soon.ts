/* eslint-disable no-console */

export const comingSoonFunc = () => {
  const comingSoonFuncCheck = document.querySelectorAll('.coming-soon');
  if (comingSoonFuncCheck.length) {
    const allButtons = new Array();
    comingSoonFuncCheck.forEach((el) => {
      if (window.getComputedStyle(el).display != 'none') {
        const currentParent = el.parentNode;
        allButtons.push(currentParent);
      }
    });

    allButtons.forEach((button) => {
      const textEl = button.querySelector('.coming-soon');
      const originalText = textEl.textContent;
      const originalWidthOfEl = button.offsetWidth;

      const newText = 'Coming soon';

      button.addEventListener('mouseenter', function () {
        textEl.textContent = newText;
        if (originalWidthOfEl != '0') {
          // button.style.width = `${originalWidthOfEl}px`;
        }
      });

      button.addEventListener('mouseleave', function () {
        setTimeout(function () {
          textEl.textContent = originalText;
          // button.style.width = `auto`;
        }, 1000);
      });
    });
  }
};
