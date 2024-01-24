"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/faq.ts
  var faq = () => {
    const faqSection = document.querySelector(".section_faq");
    if (faqSection) {
      const faqItems = document.querySelectorAll(".cl-i_faq");
      faqItems.forEach((faqItem) => {
        const svgElements = faqItem.querySelectorAll(".cl-i_faq-svg");
        svgElements.forEach((svgElement) => {
          svgElement.classList.add("hide");
        });
        const randomIndex = Math.floor(Math.random() * svgElements.length);
        svgElements[randomIndex].classList.remove("hide");
      });
    }
  };

  // src/utils/form.ts
  var formFunc = () => {
    const formEl = document.querySelector(".input-wrapper.is-dropdown");
    if (formEl) {
      const allInputsDropdown = document.querySelectorAll(".input-wrapper.is-dropdown");
      allInputsDropdown.forEach((el) => {
        el.addEventListener("click", function() {
          allInputsDropdown.forEach((el_drop) => {
            el_drop.classList.remove("z-index-4");
          });
          el.classList.add("z-index-4");
        });
      });
    }
  };

  // src/utils/form-dropdowns.ts
  var formDropdownFunc = () => {
    const dropDownCheck = document.querySelector(".input.is-dropdown");
    if (dropDownCheck) {
      const allDropdownOptions = document.querySelectorAll(".input.is-dropdown input");
      const allPlaceholders = document.querySelectorAll("[option-placeholder-value]");
      allPlaceholders.forEach((placeholder) => {
        placeholder.setAttribute("option-placeholder-value", placeholder.textContent);
      });
      allDropdownOptions.forEach((input) => {
        input.addEventListener("change", function() {
          const inputsParent = input.closest(".input.is-dropdown");
          const currentPlaceholder = inputsParent.querySelector("[option-placeholder-value]");
          const currentAllInputs = inputsParent.querySelectorAll("input");
          const optionArray = [];
          currentAllInputs.forEach((current_input) => {
            if (current_input.checked) {
              if (current_input.getAttribute("type") === "radio") {
                optionArray.push(current_input.value);
              } else {
                optionArray.push(current_input.name);
              }
            }
            if (optionArray.length) {
              const str = optionArray;
              const phrase = str.join(" ");
              let spaced;
              if (current_input.getAttribute("type") === "radio") {
                currentPlaceholder.textContent = phrase;
              } else {
                spaced = phrase.replaceAll(" ", ", ");
                currentPlaceholder.textContent = spaced;
              }
            } else {
              currentPlaceholder.textContent = currentPlaceholder.getAttribute(
                "option-placeholder-value"
              );
            }
          });
        });
      });
    }
  };

  // src/utils/menu.ts
  var menuFunc = () => {
    const menuCheck = document.querySelector(".section_menu");
    if (menuCheck) {
      const allMenuItems = document.querySelectorAll(".menu_nav-item");
      const allDropdowns = document.querySelectorAll(".section_menu .dropdown-toggle");
      const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
          allMenuItems.forEach((el) => {
            el.classList.add("menu-disabled");
            const allDropdowns_open = document.querySelectorAll(".section_menu .w--open");
            if (allDropdowns_open.length > 0) {
              allDropdowns_open.forEach((el2) => {
                const closestParent = el2.closest(".menu_nav-item");
                closestParent.classList.remove("menu-disabled");
              });
            } else {
              allMenuItems.forEach((el2) => {
                el2.classList.remove("menu-disabled");
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

  // src/utils/nested-products.ts
  var nestedProduct = () => {
    const nestDiv = document.querySelector(".nested-src");
    if (nestDiv) {
      fsAttributes.cmsnest.loading.then((result) => {
        const elements = document.querySelectorAll(".is-finsweet-link");
        elements.forEach((element) => {
          element.removeAttribute("href");
        });
        const allCaseCardsWrappers = document.querySelectorAll(
          ".solutions-content_relevant-grid.is-waiter"
        );
        allCaseCardsWrappers.forEach((el) => {
          if (el.childElementCount === 0) {
            el.classList.add("hide");
            el.previousElementSibling.classList.add("hide");
          }
        });
      }).catch((error) => {
        console.error("error:", error);
      });
      const allRichTags = document.querySelectorAll(".solutions-content_header-tag-wrapper.hide");
      allRichTags.forEach((el) => {
        el.classList.remove("hide");
        const currentTagsRichWaiter = el.nextElementSibling.querySelector(
          ".solutions-content_tags-wrapper"
        );
        currentTagsRichWaiter.appendChild(el);
      });
      const allSectionsOpenButtons = document.querySelectorAll(".button.is-solution");
      setTimeout(function() {
        allSectionsOpenButtons[0].click();
        console.log("test");
      }, 4e3);
    }
  };

  // src/utils/news-tags-duplicate.ts
  var newsTagDuplicate = () => {
    const newsChecker = document.querySelector(".clw_news.is-news-page");
    if (newsChecker) {
      setInterval(function() {
        const allVisibleCards = document.querySelectorAll(".cl-i_news");
        allVisibleCards.forEach((card) => {
          if (card.classList.contains("tags-ready") === false) {
            const allHeaders = card.querySelectorAll(".news_card-header");
            const appendWaiter = allHeaders[0];
            const cloneAbleListOfTags = allHeaders[1].querySelector(".news_card-category-wrapper-parent").cloneNode(true);
            const cloneAbleItem = cloneAbleListOfTags.querySelectorAll(".news_card-category-wrapper");
            cloneAbleItem.forEach((item) => {
              item.classList.add("is-no-cover");
              const cloneAbleItemText = item.querySelector(".ui-s");
              cloneAbleItemText.classList.add("is-no-cover");
            });
            appendWaiter.appendChild(cloneAbleListOfTags);
            card.classList.add("tags-ready");
          }
        });
      }, 700);
    }
  };

  // src/utils/reason-cards-hover.ts
  var reasonCardsHover = () => {
    const reasonCards_el = document.querySelector(".card.is-reason");
    if (reasonCards_el) {
      const allReasonCards = document.querySelectorAll(".card.is-reason");
      allReasonCards.forEach((card) => {
        card.addEventListener("click", function() {
          allReasonCards.forEach((el) => {
            el.classList.remove("z-index-2");
            el.classList.add("opacity-70");
            if (el.classList.contains("opened") && el.classList.contains("leaved")) {
              el.click();
              el.classList.add("opacity-70");
              card.classList.remove("leaved");
            }
          });
          card.classList.remove("leaved");
          card.classList.add("z-index-2");
          card.classList.remove("opacity-70");
          card.classList.toggle("opened");
          if (card.classList.contains("opened")) {
            allReasonCards.forEach((el) => {
            });
          } else {
            allReasonCards.forEach((el) => {
              el.classList.remove("z-index-2");
              el.classList.remove("opacity-70");
            });
          }
        });
        card.addEventListener("mouseleave", function() {
          card.classList.add("leaved");
        });
      });
    }
  };

  // src/utils/team-popup.ts
  var popupFunct = () => {
    const popUpEl = document.querySelector("[trigger-popup-slug]");
    if (popUpEl) {
      const allPopupTriggers = document.querySelectorAll("[trigger-popup-slug]");
      const allCloseButtons = document.querySelectorAll(".button.is-visionary-team");
      allCloseButtons.forEach((button) => {
        button.addEventListener("click", function() {
          button.closest(".visionary-team_popup-wrapper").classList.add("hide");
        });
      });
      allPopupTriggers.forEach((trigger) => {
        trigger.addEventListener("click", function() {
          const currentSlug = trigger.getAttribute("trigger-popup-slug");
          document.querySelector('[popup-slug="' + currentSlug + '"]').classList.remove("hide");
        });
      });
    }
  };

  // src/index.ts
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
})();
//# sourceMappingURL=index.js.map
