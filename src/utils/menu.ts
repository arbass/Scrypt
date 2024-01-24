/* eslint-disable no-console */

export const menuFunc = () => {
  const menuCheck = document.querySelector('.section_menu');
  if (menuCheck) {
    const allMenuItems = document.querySelectorAll('.menu_nav-item');
    const allDropdowns = document.querySelectorAll('.section_menu .dropdown-toggle');

    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        allMenuItems.forEach((el) => {
          el.classList.add('menu-disabled');
          const allDropdowns_open = document.querySelectorAll('.section_menu .w--open');
          if (allDropdowns_open.length > 0) {
            allDropdowns_open.forEach((el) => {
              const closestParent = el.closest('.menu_nav-item');
              closestParent.classList.remove('menu-disabled');
            });
          } else {
            allMenuItems.forEach((el) => {
              el.classList.remove('menu-disabled');
            });
          }
        });
      });
    });

    const config = { attributes: true, childList: true, subtree: true };

    allDropdowns.forEach((dropdown) => {
      observer.observe(dropdown, config);
    });
  }
};
