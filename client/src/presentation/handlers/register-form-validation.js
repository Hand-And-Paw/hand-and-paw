import {
  checkEmail,
  checkLength,
  checkPasswordMatch,
  checkRequired,
} from "../../business-logic/modal-form-validation.js";

export const registerFormValidation = (event) => {
  event.preventDefault();

  const form = event.target;
  // delete existing error if the is to append new one
  if (document.getElementById("error-message")) {
    const errorMessages = document.querySelectorAll("#error-message");
    [...errorMessages].forEach((element) => element.remove());
  }
  const username = form.querySelector("#name");
  const email = form.querySelector("#email");
  const password = form.querySelector("#password");
  const password2 = form.querySelector("#repeat-password");

  let isValid = true;
  if (!checkRequired([username, email, password, password2])) {
    isValid = false;
  }
  if (!checkLength(username, 3, 15)) {
    isValid = false;
  }
  if (!checkLength(password, 6, 25)) {
    isValid = false;
  }
  if (!checkEmail(email)) {
    isValid = false;
  }
  if (!checkPasswordMatch(password, password2)) {
    isValid = false;
  }
  return isValid;
};
