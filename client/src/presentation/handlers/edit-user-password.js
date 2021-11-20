/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { updateUser } from "../../data-access/user-access/update-user.js";
import state from "../../data-access/state/state.js";
import { navbar } from "../components/layout/navbar.js";
import { burgerHandler } from "./burger-handler.js";
import {
  checkLength,
  checkPasswordMatch,
} from "../../business-logic/modal-form-validation.js";

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
      sessionStorage.removeItem("isLoggedIn");
      const header = document.getElementById("menu");
      const navbarEl = document.getElementById("top-navbar");
      header.removeChild(navbarEl);
      header.appendChild(await navbar());
      burgerHandler();
      return;
    }

    const span = document.createElement("span");
    span.id = "password-error-message";
    const br = document.createElement("br");
    br.id = "password-error-message-space";
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
  // delete existing error if the is to append new one
  if (document.getElementById("error-message")) {
    const errorMessages = document.querySelectorAll("#error-message");
    [...errorMessages].forEach((element) => element.remove());
  }

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
