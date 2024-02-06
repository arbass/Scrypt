/* eslint-disable no-console */

export const tagsRemoverFunc = () => {
  const tagsRemoverFunc_checker = document.querySelectorAll('form label');
  if (tagsRemoverFunc_checker.length) {
    tagsRemoverFunc_checker.forEach((label) => {
      function removeHTMLTagsFromString(text) {
        return text.replace(/<[^>]*>/g, '');
      }

      let textContent = label.textContent;
      textContent = textContent.toString();

      const cleanText = removeHTMLTagsFromString(textContent);
      label.textContent = cleanText;
    });
  }
};
