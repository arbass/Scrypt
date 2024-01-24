/* eslint-disable no-console */

export const formDropdownFunc = () => {
  const dropDownCheck = document.querySelector('.input.is-dropdown');
  if (dropDownCheck) {
    const allDropdownOptions = document.querySelectorAll('.input.is-dropdown input');

    const allPlaceholders = document.querySelectorAll('[option-placeholder-value]');
    allPlaceholders.forEach((placeholder) => {
      placeholder.setAttribute('option-placeholder-value', placeholder.textContent);
    });

    allDropdownOptions.forEach((input) => {
      input.addEventListener('change', function () {
        const inputsParent = input.closest('.input.is-dropdown');
        const currentPlaceholder = inputsParent.querySelector('[option-placeholder-value]');
        const currentAllInputs = inputsParent.querySelectorAll('input');
        const optionArray = [];
        currentAllInputs.forEach((current_input) => {
          if (current_input.checked) {
            if (current_input.getAttribute('type') === 'radio') {
              optionArray.push(current_input.value);
            } else {
              optionArray.push(current_input.name);
            }
          }

          if (optionArray.length) {
            const str = optionArray;
            const phrase = str.join(' ');
            let spaced;

            if (current_input.getAttribute('type') === 'radio') {
              currentPlaceholder.textContent = phrase;
            } else {
              spaced = phrase.replaceAll(' ', ', ');
              currentPlaceholder.textContent = spaced;
            }
          } else {
            currentPlaceholder.textContent = currentPlaceholder.getAttribute(
              'option-placeholder-value'
            );
          }
        });
      });
    });
  }
};
