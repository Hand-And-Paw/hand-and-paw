/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable no-underscore-dangle */
import { registerUser } from "../../data-access/user-access/register-user.js";
import closeModal from "./close-modal.js";
import openModal from "./call-login-form.js";
import { loginForm } from "../components/shared/login-form.js";

export const registerUserFormHandler = async (event) => {
  event.preventDefault();
  const form = document.getElementById("register-form");
  const formData = new FormData(form);
  const userObj = {};
  for (const key of formData.keys()) {
    userObj[key] = formData.get(key);
  }
  const post = await registerUser(userObj);

  if (post?.user?._id) {
    form.innerHTML = `<p>${post.message}</p>`;
    setTimeout(closeModal, 1000);
    setTimeout(renderLoginForm, 1120);
  }
  return post;
};

function renderLoginForm() {
  openModal(loginForm("modal-form"));
}
