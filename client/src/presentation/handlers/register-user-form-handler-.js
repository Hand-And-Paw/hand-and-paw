/* eslint-disable no-underscore-dangle */
import { registerUser } from "../../data-access/user-access/register-user.js";
import closeModal from "./close-modal.js";

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
    setTimeout(closeModal, 1500);
  }
  return post;
};
