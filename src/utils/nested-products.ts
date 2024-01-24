/* eslint-disable no-console */

export const nestedProduct = () => {
  const nestDiv = document.querySelector('.nested-src');
  if (nestDiv) {
    // const allProductEmbed = document.querySelectorAll('[has-content]');
    // allProductEmbed.forEach((el_productEmbed) => {
    //   const currentCustomerCategory_el = el_productEmbed.getAttribute('customer-category');

    //   const allNestWaiters = document.querySelectorAll('[nest-product-here]');
    //   allNestWaiters.forEach((nestWaiter) => {
    //     const currentCustomerCategory_waiter = nestWaiter.getAttribute('nest-product-here');
    //     if (currentCustomerCategory_el === currentCustomerCategory_waiter) {
    //       const closestTagToAppend = el_productEmbed.closest('.solutions-content_product-tag');
    //       nestWaiter.appendChild(closestTagToAppend);
    //     }
    //   });
    //   setTimeout(function () {
    //     allNestWaiters.forEach((nestWaiter) => {
    //       if (nestWaiter.childElementCount === 0) {
    //         nestWaiter.classList.add('hide');
    //         nestWaiter.previousElementSibling.classList.add('hide');
    //       }
    //     });
    //   }, 100);
    // });

    // const allSectionDiscriptionWrapper = document.querySelectorAll(
    //   '.solutions-content_text-wrapper'
    // );
    // allSectionDiscriptionWrapper.forEach((el) => {
    //   const description = el.querySelector('.accent-m');

    //   if (description.classList.contains('w-dyn-bind-empty')) {
    //     description.classList.add('hide');
    //   }
    // });

    fsAttributes.cmsnest.loading
      .then((result) => {
        const elements = document.querySelectorAll('.is-finsweet-link');

        elements.forEach((element) => {
          element.removeAttribute('href');
        });

        //–––
        const allCaseCardsWrappers = document.querySelectorAll(
          '.solutions-content_relevant-grid.is-waiter'
        );

        allCaseCardsWrappers.forEach((el) => {
          if (el.childElementCount === 0) {
            el.classList.add('hide');
            el.previousElementSibling.classList.add('hide');
          }
        });
      })
      .catch((error) => {
        console.error('error:', error);
      });

    const allRichTags = document.querySelectorAll('.solutions-content_header-tag-wrapper.hide');
    allRichTags.forEach((el) => {
      el.classList.remove('hide');
      const currentTagsRichWaiter = el.nextElementSibling.querySelector(
        '.solutions-content_tags-wrapper'
      );

      currentTagsRichWaiter.appendChild(el);
    });

    const allSectionsOpenButtons = document.querySelectorAll('.button.is-solution');

    setTimeout(function () {
      allSectionsOpenButtons[0].click();
      console.log('test');
    }, 4000);
  }
};
