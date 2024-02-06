/* eslint-disable no-console */

export const formDropdownFunc = () => {
  const dropDownCheck = document.querySelector('.input.is-dropdown');
  if (dropDownCheck) {
    let array_optionParams;
    const dropdownPlaceholder = document.querySelector('[option-placeholder-value]');
    const dropdownPlaceholderValue = dropdownPlaceholder.textContent;

    const allDropdownCheckboxWrappers = document.querySelectorAll('.is-dropdown .checkbox-wrapper');

    allDropdownCheckboxWrappers.forEach((wrapper) => {
      wrapper.addEventListener('click', function (e) {
        wrapper.querySelector('.checkbox-icon').click();
      });
    });

    const allCheckBoxes = document.querySelectorAll('.is-dropdown .checkbox-icon');
    allCheckBoxes.forEach((checkbox) => {
      checkbox.addEventListener('change', function () {
        array_optionParams = new Array();
        allCheckBoxes.forEach((checkbox_inner) => {
          if (checkbox_inner.checked) {
            array_optionParams.push(checkbox_inner.value);
          }
        });
        let placeholderNewValue = array_optionParams.toString();
        placeholderNewValue = placeholderNewValue.replace(/,(\S)/g, ', $1');

        if (placeholderNewValue === '') {
          dropdownPlaceholder.textContent = dropdownPlaceholderValue;
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
