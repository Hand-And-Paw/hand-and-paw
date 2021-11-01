import {
  checkEmail,
  checkLength,
  checkPasswordMatch,
  checkRequired,
} from "../../business-logic/form-validation.js";

export const registerFormValidation = () => {
  const username = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const password2 = document.getElementById("repeat-password");

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);
};
