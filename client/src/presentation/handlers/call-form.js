import createModal from "../components/shared/modal.js";
import { loginForm } from "../components/shared/login-form.js";
import closeModal from "./close-modal.js";

const callForm = (event) => {
  const modal = document.querySelector(".modal-background");
  if (!document.body.contains(modal)) {
    if (
      event.target.id === "register-animal-btn" ||
      event.target.id === "log-in"
    ) {
      document
        .querySelector("body")
        .insertAdjacentElement("beforeend", createModal(loginForm()));
    }
  } else {
    closeModal();
  }
};

export default callForm;
