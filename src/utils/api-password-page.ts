/* eslint-disable no-console */

export const apiPasswordPage_func = () => {
  const apiPasswordPage_checker = document.querySelector('[password-form]');
  if (apiPasswordPage_checker) {
    apiPasswordPage_checker.classList.remove('hide');
    const formWaiter = document.querySelector('[password-form-append-waiter]');
    formWaiter.appendChild(apiPasswordPage_checker);
  }
};
