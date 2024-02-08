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
    const reqCheckboxes = document.querySelectorAll(".is-sign");
    if (reqCheckboxes.length) {
      reqCheckboxes.forEach((el) => {
        el.addEventListener("click", function() {
          el.previousElementSibling.click();
        });
      });
    }
    if (dropDownCheck) {
      const allDropdowns = document.querySelectorAll(".input.is-dropdown");
      allDropdowns.forEach((dropdown) => {
        const currentPlaceholder = dropdown.querySelector("[option-placeholder-value]");
        currentPlaceholder.setAttribute("option-placeholder-value", currentPlaceholder.textContent);
        const allCurrentInputs = dropdown.querySelectorAll("input");
        allCurrentInputs.forEach((input2) => {
          input2.addEventListener("change", function() {
            let placeHolderArray = new Array();
            allCurrentInputs.forEach((input_inner) => {
              if (input_inner.checked) {
                placeHolderArray.push(input_inner.value);
              }
            });
            let newPlaceholderValue = placeHolderArray.toString();
            newPlaceholderValue = newPlaceholderValue.replace(/,(\S)/g, ", $1");
            if (newPlaceholderValue != "") {
              currentPlaceholder.textContent = newPlaceholderValue;
            } else {
              currentPlaceholder.textContent = currentPlaceholder.getAttribute(
                "option-placeholder-value"
              );
            }
          });
        });
      });
      const allDropdownCheckboxWrappers = document.querySelectorAll(".is-dropdown .checkbox-wrapper");
      allDropdownCheckboxWrappers.forEach((wrapper) => {
        wrapper.addEventListener("click", function(e) {
          wrapper.querySelector(".checkbox-icon").click();
        });
      });
      const input = document.querySelector(".is-business input");
      const errorMessage = document.createElement("div");
      errorMessage.style.color = "white";
      errorMessage.textContent = "Please use a business email address";
      errorMessage.style.display = "none";
      input.parentNode.insertBefore(errorMessage, input.nextSibling);
      input.addEventListener("input", function(e) {
        const nonBusinessEmails = [
          "gmx.com",
          "fastmail.com",
          "t-online.de",
          "web.de",
          "cox.net",
          "charter.net",
          "rediffmail.com",
          "libero.it",
          "tiscali.it",
          "virginmedia.com",
          "btinternet.com",
          "shaw.ca",
          "telus.net",
          "bigpond.com",
          "optonline.net",
          "rogers.com",
          "freenet.de",
          "alice.it",
          "laposte.net",
          "icloud.com",
          "zoho.com",
          "protonmail.com",
          "qq.com",
          "163.com",
          "sberbank.ru",
          "bk.ru",
          "inbox.ru",
          "list.ru",
          "gmail.com",
          "yahoo.com",
          "outlook.com",
          "hotmail.com",
          "aol.com",
          "mail.ru",
          "yandex.ru"
        ];
        const email = e.target.value;
        const emailDomain = email.split("@")[1];
        if (nonBusinessEmails.includes(emailDomain)) {
          input.style.color = "white";
          errorMessage.style.display = "block";
        } else {
          input.style.color = "black";
          errorMessage.style.display = "none";
        }
      });
      if (window.location.hash) {
        let currentHash = window.location.hash;
        currentHash = currentHash.slice(1);
        document.querySelector('[value="' + currentHash + '"]').click();
      }
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
      const allSlugLists = document.querySelectorAll('[fs-cmsnest-element="slugs"]');
      allSlugLists.forEach((list) => {
        const currentListValue = list.textContent;
        if (currentListValue != "") {
          const currentAppendWaiter = list.parentNode;
          const arrayForValues = currentListValue.split(",");
          arrayForValues.forEach((el) => {
            el = el.replace(/\s+/g, "");
            const findClonableEl = document.querySelector('[nest-by-name-item="' + el + '"]');
            if (findClonableEl) {
              const findClonableElAdditional = findClonableEl.cloneNode(true);
              currentAppendWaiter.appendChild(findClonableElAdditional);
            }
          });
        }
      });
      document.querySelectorAll(".button.is-solution")[0].click();
      const allCaseStudyLink = document.querySelectorAll(
        ".clw_section_solutions-content .case-study-link a"
      );
      allCaseStudyLink.forEach((link) => {
        const currentHrefValue = link.getAttribute("href");
        const closestParentCli = link.closest("[current-client-type-slug]");
        const currentClientTypeSlug = closestParentCli.getAttribute("current-client-type-slug");
        link.setAttribute("href", currentHrefValue.replace(/\*/g, currentClientTypeSlug));
      });
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

  // src/utils/coming-soon.ts
  var comingSoonFunc = () => {
    const comingSoonFuncCheck = document.querySelectorAll(".coming-soon");
    if (comingSoonFuncCheck.length) {
      const allButtons = new Array();
      comingSoonFuncCheck.forEach((el) => {
        if (window.getComputedStyle(el).display != "none") {
          const currentParent = el.parentNode;
          allButtons.push(currentParent);
        }
      });
      allButtons.forEach((button) => {
        const textEl = button.querySelector(".coming-soon");
        const originalText = textEl.textContent;
        const originalWidthOfEl = button.offsetWidth;
        const newText = "Coming soon";
        button.addEventListener("mouseenter", function() {
          textEl.textContent = newText;
          if (originalWidthOfEl != "0") {
          }
        });
        button.addEventListener("mouseleave", function() {
          setTimeout(function() {
            textEl.textContent = originalText;
          }, 1e3);
        });
      });
    }
  };

  // src/utils/download-form.ts
  var downloadFormFunc = () => {
    const downloadFormFuncCheck = document.querySelectorAll(".button.is-download-open-trigger");
    if (downloadFormFuncCheck.length) {
      const popupBody = document.querySelector(".download-form-popup");
      const currentForm = document.querySelector("form");
      const closeButton = document.querySelector(".popup-close-button");
      const closeButtonBg = document.querySelector(".download-form-popup-bg");
      const successDownloadButton = document.querySelector(".button.success-download");
      closeButton.addEventListener("click", function() {
        popupBody.classList.add("hide");
      });
      closeButtonBg.addEventListener("click", function() {
        popupBody.classList.add("hide");
      });
      currentForm.addEventListener("submit", function() {
        localStorage.setItem("userAuthorized", "true");
        document.querySelector(".download-file-link").click();
      });
      downloadFormFuncCheck.forEach((button) => {
        button.addEventListener("click", function() {
          if (localStorage.getItem("userAuthorized") === "true") {
            document.querySelector(".download-file-link").click();
          } else {
            popupBody.classList.remove("hide");
          }
        });
      });
    }
  };

  // src/utils/share-link.ts
  var shareFunc = () => {
    const shareFuncChecker = document.querySelectorAll("[data-url]");
    if (shareFuncChecker.length) {
      shareFuncChecker.forEach((el) => {
        const currentUrl = window.location.href;
        el.setAttribute("data-url", currentUrl);
      });
    }
  };

  // src/utils/product-page_empty-testimonils.ts
  var testimonialsSectionFunc = () => {
    const testimonialsSectionFunc_checking = document.querySelectorAll(
      ".swiper-slide.is-swiper-testimonials"
    );
    if (testimonialsSectionFunc_checking.length) {
    } else {
      const currentSlider = document.querySelector(".section_testimonials-swiper");
      if (currentSlider) {
        currentSlider.classList.add("hide");
      }
    }
  };

  // src/utils/product-checkbox.ts
  var productCheckboxFunc = () => {
    const productCheckboxFunc_checker = document.querySelector(".form-cta_form-block");
    if (productCheckboxFunc_checker) {
      if (window.location.hash) {
        const allProductInputs = document.querySelectorAll(".input-wrapper.is-product-list input");
        allProductInputs.forEach((input) => {
          let currentCategory = input.getAttribute("id");
          currentCategory = "#" + currentCategory;
          if (currentCategory === window.location.hash) {
            const closestClicker = input.closest(".dropdotwn-options_field");
            setTimeout(function() {
              closestClicker.click();
            }, 500);
          }
        });
      }
    }
  };

  // src/utils/tags-remover.ts
  var tagsRemoverFunc = () => {
    const tagsRemoverFunc_checker = document.querySelectorAll("form label");
    if (tagsRemoverFunc_checker.length) {
      tagsRemoverFunc_checker.forEach((label) => {
        function removeHTMLTagsFromString(text) {
          return text.replace(/<[^>]*>/g, "");
        }
        let textContent = label.textContent;
        textContent = textContent.toString();
        const cleanText = removeHTMLTagsFromString(textContent);
        label.textContent = cleanText;
      });
    }
  };

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
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
})();
//# sourceMappingURL=index.js.map
