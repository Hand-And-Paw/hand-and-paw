import createModal from "../components/shared/modal.js";
import { loginForm } from "../components/shared/login-form.js";

const callForm = (event) => {
  // check if there is modal in body - if yes, close old, open new
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
    const body = document.querySelector("body");
    body.removeChild(modal);
  }
};

export default callForm;
