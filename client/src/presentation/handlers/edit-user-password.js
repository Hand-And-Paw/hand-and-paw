/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { updateUser } from "../../data-access/user-access/update-user.js";
import { checkPasswordMatch } from "../../business-logic/form-validation.js";
import state from "../../data-access/state/state.js";
import { navbar } from "../components/layout/navbar.js";

export const editPasswordFormHandler = async () => {
  const form = document.querySelector("#edit-password-form");

  const isValidated = validatePassword();

  if (isValidated) {
    const formData = new FormData(form);
    const userId = window.localStorage.getItem("userId");
    formData.append("id", window.localStorage.getItem("userId"));

    const post = await updateUser(userId, formData);
    if (post[0]?._id) {
      form.innerHTML = "<h2>Password updated successfully</h2>";
      state.token = undefined;
      state.userId = undefined;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("isLoggedIn");
      const header = document.getElementById("menu");
      const navbarEl = document.getElementById("top-navbar");
      header.removeChild(navbarEl);
      header.appendChild(navbar());
      return;
    }

    const span = document.createElement("span");
    const br = document.createElement("br");
    span.innerHTML = `${post.message}`;
    span.style.color = "red";
    form.appendChild(br);
    form.appendChild(span);
  }
};

function validatePassword() {
  const form = document.querySelector("#edit-password-form");
  const password = form.querySelector("#newPassword-input");
  const confirmPassword = form.querySelector("#confirmPassword-input");

  let isValid = true;

  if (!checkLength(password, 6, 25)) {
    isValid = false;
  }

  if (!checkLength(confirmPassword, 6, 25)) {
    isValid = false;
  }

  if (!checkPasswordMatch(password, confirmPassword)) {
    isValid = false;
  }
  return isValid;
}

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    input.value = "";
    showError(input, `To short min ${min} characters`);
    return false;
  }
  if (input.value.length > max) {
    input.value = "";
    showError(input, `To large max ${max} characters`);
    return false;
  }
  return true;
};

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};
