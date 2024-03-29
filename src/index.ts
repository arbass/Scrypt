import { faq } from '$utils/faq';
import { formFunc } from '$utils/form';
import { formDropdownFunc } from '$utils/form-dropdowns';
import { menuFunc } from '$utils/menu';
import { nestedProduct } from '$utils/nested-products';
import { newsTagDuplicate } from '$utils/news-tags-duplicate';
// import { reasonCardsHover } from '$utils/reason-cards-hover';
import { popupFunct } from '$utils/team-popup';
import { comingSoonFunc } from '$utils/coming-soon';
import { downloadFormFunc } from '$utils/download-form';
import { shareFunc } from '$utils/share-link';
import { testimonialsSectionFunc } from '$utils/product-page_empty-testimonils';
import { productCheckboxFunc } from '$utils/product-checkbox';
import { tagsRemoverFunc } from '$utils/tags-remover';
import { requestCallFunc } from '$utils/request-call';
import { apiPasswordPage_func } from '$utils/api-password-page';

window.Webflow ||= [];
window.Webflow.push(() => {
  apiPasswordPage_func();
  requestCallFunc();
  tagsRemoverFunc();
  productCheckboxFunc();
  nestedProduct();
  faq();
  testimonialsSectionFunc();
  formFunc();
  popupFunct();
  formDropdownFunc();
  menuFunc();
  newsTagDuplicate();
  comingSoonFunc();
  downloadFormFunc();
  shareFunc();
});
