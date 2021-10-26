import createModal from "../components/shared/modal.js";
import { loginForm } from "../components/shared/login-form.js";

export const createModalHandler = () => {
  document
    .querySelector("body")
    .insertAdjacentElement("beforeend", createModal(loginForm()));
};
