/* eslint-disable no-console */

export const formDropdownFunc = () => {
  const dropDownCheck = document.querySelector('.input.is-dropdown');
  const reqCheckboxes = document.querySelectorAll('.is-sign');

  if (reqCheckboxes.length) {
    reqCheckboxes.forEach((el) => {
      el.addEventListener('click', function () {
        el.previousElementSibling.click();
      });
    });
  }

  if (dropDownCheck) {
    // let array_optionParams;
    const dropdownPlaceholderAll = document.querySelectorAll('[option-placeholder-value]');
    dropdownPlaceholderAll.forEach((el) => {
      el.setAttribute('option-placeholder-value', el.textContent);
    });
    // const dropdownPlaceholder = document.querySelector('[option-placeholder-value]');
    // const dropdownPlaceholderValue = dropdownPlaceholder.textContent;

    const allDropdownCheckboxWrappers = document.querySelectorAll('.is-dropdown .checkbox-wrapper');

    allDropdownCheckboxWrappers.forEach((wrapper) => {
      wrapper.addEventListener('click', function (e) {
        wrapper.querySelector('.checkbox-icon').click();
      });
    });

    const allCheckBoxes = document.querySelectorAll('.is-dropdown .checkbox-icon');
    allCheckBoxes.forEach((checkbox) => {
      checkbox.addEventListener('change', function () {
        let array_optionParams;
        const currentParentDropdown = checkbox.closest('.input.is-contact-us-page.is-dropdown');
        const dropdownPlaceholder = currentParentDropdown.querySelector(
          '[option-placeholder-value]'
        );
        console.log(currentParentDropdown);

        array_optionParams = new Array();
        allCheckBoxes.forEach((checkbox_inner) => {
          if (checkbox_inner.checked) {
            array_optionParams = [];
            array_optionParams.push(checkbox_inner.value);
          }
        });
        let placeholderNewValue = array_optionParams.toString();
        placeholderNewValue = placeholderNewValue.replace(/,(\S)/g, ', $1');

        if (placeholderNewValue === '') {
          dropdownPlaceholder.textContent = dropdownPlaceholder.getAttribute(
            'option-placeholder-value'
          );
        } else {
          dropdownPlaceholder.textContent = placeholderNewValue;
        }
      });
    });

    //––––
    if (window.location.hash) {
      let currentHash = window.location.hash;
      currentHash = currentHash.slice(1);

      document.querySelector('[value="' + currentHash + '"]').click();
    }
  }
};
