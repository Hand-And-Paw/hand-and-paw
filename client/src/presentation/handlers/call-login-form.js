import createModal from "../components/shared/modal.js";
import { loginForm } from "../components/shared/login-form.js";
import closeModal from "./close-modal.js";

const callLoginForm = (event) => {
  const modal = document.querySelector(".modal-background");
  if (!document.body.contains(modal)) {
    if (
      event.target.id === "register-animal-btn" ||
      event.target.id === "account-menu-btn"
    ) {
      document
        .querySelector("body")
        .insertAdjacentElement("beforeend", createModal(loginForm()));
    }
  } else {
    closeModal();
  }
};

export default callLoginForm;
