import { faq } from '$utils/faq';
import { formFunc } from '$utils/form';
import { formDropdownFunc } from '$utils/form-dropdowns';
import { menuFunc } from '$utils/menu';
import { nestedProduct } from '$utils/nested-products';
import { newsTagDuplicate } from '$utils/news-tags-duplicate';
import { reasonCardsHover } from '$utils/reason-cards-hover';
import { popupFunct } from '$utils/team-popup';

window.Webflow ||= [];
window.Webflow.push(() => {
  nestedProduct();
  faq();
  reasonCardsHover();
  formFunc();
  popupFunct();
  formDropdownFunc();
  menuFunc();
  newsTagDuplicate();
});
