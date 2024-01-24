/* eslint-disable no-console */

export const newsTagDuplicate = () => {
  const newsChecker = document.querySelector('.clw_news.is-news-page');
  if (newsChecker) {
    setInterval(function () {
      const allVisibleCards = document.querySelectorAll('.cl-i_news');
      allVisibleCards.forEach((card) => {
        if (card.classList.contains('tags-ready') === false) {
          const allHeaders = card.querySelectorAll('.news_card-header');
          const appendWaiter = allHeaders[0];
          const cloneAbleListOfTags = allHeaders[1]
            .querySelector('.news_card-category-wrapper-parent')
            .cloneNode(true);
          const cloneAbleItem = cloneAbleListOfTags.querySelectorAll('.news_card-category-wrapper');
          cloneAbleItem.forEach((item) => {
            item.classList.add('is-no-cover');
            const cloneAbleItemText = item.querySelector('.ui-s');
            cloneAbleItemText.classList.add('is-no-cover');
          });

          // console.log(cloneAbleItem);

          appendWaiter.appendChild(cloneAbleListOfTags);
          card.classList.add('tags-ready');
        }
      });
    }, 700);
  }
};
