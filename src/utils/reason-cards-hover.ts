/* eslint-disable no-console */

export const reasonCardsHover = () => {
  const reasonCards_el = document.querySelector('.card.is-reason');
  if (reasonCards_el) {
    const allReasonCards = document.querySelectorAll('.card.is-reason');
    allReasonCards.forEach((card) => {
      card.addEventListener('click', function () {
        allReasonCards.forEach((el) => {
          el.classList.remove('z-index-2');
          el.classList.add('opacity-70');
          if (el.classList.contains('opened') && el.classList.contains('leaved')) {
            el.click();
            el.classList.add('opacity-70');
            card.classList.remove('leaved');
          }
        });
        card.classList.remove('leaved');
        card.classList.add('z-index-2');
        card.classList.remove('opacity-70');
        card.classList.toggle('opened');
        if (card.classList.contains('opened')) {
          allReasonCards.forEach((el) => {});
        } else {
          allReasonCards.forEach((el) => {
            el.classList.remove('z-index-2');
            el.classList.remove('opacity-70');
          });
        }
      });

      card.addEventListener('mouseleave', function () {
        card.classList.add('leaved');
      });
    });
  }
};
