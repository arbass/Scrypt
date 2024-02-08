/* eslint-disable no-console */

export const formDropdownFunc = () => {
  const dropDownCheck = document.querySelector('.input.is-dropdown');
  const reqCheckboxes = document.querySelectorAll('.is-sign');
  const contactUsFormChecker = document.querySelector('.section_contact-us form');

  if (contactUsFormChecker) {
    const inputs = document.querySelectorAll('.is-product-list input');

    function checkInputsAndClick() {
      const isAnyChecked = Array.from(inputs).some((input) => input.checked);

      const productChecker = document.querySelector('.product-checker');

      if (productChecker) {
        productChecker.click();
      }
    }

    inputs.forEach((input) => {
      input.addEventListener('change', checkInputsAndClick);
    });
  }

  if (reqCheckboxes.length) {
    reqCheckboxes.forEach((el) => {
      el.addEventListener('click', function () {
        el.previousElementSibling.click();
      });
    });
  }

  if (dropDownCheck) {
    const allDropdowns = document.querySelectorAll('.input.is-dropdown');

    allDropdowns.forEach((dropdown) => {
      const currentPlaceholder = dropdown.querySelector('[option-placeholder-value]');
      currentPlaceholder.setAttribute('option-placeholder-value', currentPlaceholder.textContent);

      const allCurrentInputs = dropdown.querySelectorAll('.checkbox-wrapper input');

      allCurrentInputs.forEach((input) => {
        input.addEventListener('change', function () {
          let placeHolderArray = new Array();
          allCurrentInputs.forEach((input_inner) => {
            if (input_inner.checked) {
              placeHolderArray.push(input_inner.value);
            }
          });
          let newPlaceholderValue = placeHolderArray.toString();
          newPlaceholderValue = newPlaceholderValue.replace(/,(\S)/g, ', $1');
          if (newPlaceholderValue != '') {
            currentPlaceholder.textContent = newPlaceholderValue;
          } else {
            currentPlaceholder.textContent = currentPlaceholder.getAttribute(
              'option-placeholder-value'
            );
          }
        });
      });
    });

    const allDropdownCheckboxWrappers = document.querySelectorAll('.is-dropdown .checkbox-wrapper');

    allDropdownCheckboxWrappers.forEach((wrapper) => {
      wrapper.addEventListener('click', function (e) {
        wrapper.querySelector('.checkbox-icon').click();
      });
    });

    const input = document.querySelector('.is-business input');
    const errorMessage = document.createElement('div');
    errorMessage.style.color = 'white';
    errorMessage.textContent = 'Please use a business email address';
    errorMessage.style.display = 'none';
    input.parentNode.insertBefore(errorMessage, input.nextSibling);

    input.addEventListener('input', function (e) {
      const nonBusinessEmails = [
        'gmx.com',
        'fastmail.com',
        't-online.de',
        'web.de',
        'cox.net',
        'charter.net',
        'rediffmail.com',
        'libero.it',
        'tiscali.it',
        'virginmedia.com',
        'btinternet.com',
        'shaw.ca',
        'telus.net',
        'bigpond.com',
        'optonline.net',
        'rogers.com',
        'freenet.de',
        'alice.it',
        'laposte.net',
        'icloud.com',
        'zoho.com',
        'protonmail.com',
        'qq.com',
        '163.com',
        'sberbank.ru',
        'bk.ru',
        'inbox.ru',
        'list.ru',
        'gmail.com',
        'yahoo.com',
        'outlook.com',
        'hotmail.com',
        'aol.com',
        'mail.ru',
        'yandex.ru',
      ];
      const email = e.target.value;
      const emailDomain = email.split('@')[1];
      if (nonBusinessEmails.includes(emailDomain)) {
        // input.style.color = 'white';
        errorMessage.style.display = 'block';
        document.querySelector('.is-business input').classList.add('is-red');
        document
          .querySelector('.is-fake-form-button')
          .classList.add('is-disabled', 'pointer-events-off');
      } else {
        // input.style.color = 'black';
        errorMessage.style.display = 'none';
        document.querySelector('.is-business input').classList.remove('is-red');
        document
          .querySelector('.is-fake-form-button')
          .classList.remove('is-disabled', 'pointer-events-off');
      }
    });

    //––––
    if (window.location.hash) {
      let currentHash = window.location.hash;
      currentHash = currentHash.slice(1);

      document.querySelector('[value="' + currentHash + '"]').click();
    }
  }
};
