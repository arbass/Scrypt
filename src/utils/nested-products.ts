/* eslint-disable no-console */

export const nestedProduct = () => {
  const nestDiv = document.querySelector('.nested-src');
  if (nestDiv) {
    const allSlugLists = document.querySelectorAll('[fs-cmsnest-element="slugs"]');
    allSlugLists.forEach((list) => {
      const currentTypeOfEl = list.getAttribute('fs-cmsnest-collection');
      const currentListValue = list.textContent;

      if (currentListValue != '') {
        const currentAppendWaiter = list.parentNode;
        const arrayForValues = currentListValue.split(',');
        arrayForValues.forEach((el) => {
          el = el.replace(/\s+/g, '');
          const findClonableEl = document
            .querySelector('[nest-by-name-item="' + el + '"]')
            .cloneNode(true);
          currentAppendWaiter.appendChild(findClonableEl);
        });
      }
    });

    document.querySelectorAll('.button.is-solution')[0].click();
  }
};
