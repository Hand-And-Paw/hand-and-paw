import createModal from "../components/shared/modal.js";
import { loginForm } from "../components/shared/login-form.js";

const createModalHandler = (event) => {
  if (event.target.id === "register-animal-btn") {
    document
      .querySelector("body")
      .insertAdjacentElement("beforeend", createModal(loginForm()));
  }
};

export default createModalHandler;
