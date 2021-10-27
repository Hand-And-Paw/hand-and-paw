import { registerForm } from "../components/shared/register-form.js";
import closeModal from "./close-modal.js";

const loginFormHandler = (event) => {
  if (event.target.className === "open-register-form") {
    // hide login
    const modalContent = document.querySelector(".modal-content");
    const child = document.getElementById("login-form");
    modalContent.removeChild(child);
    // call register form
    modalContent.appendChild(registerForm());
  }
  if (event.target.className === "submit-btn") {
    // submitting login password

    // close modal
    closeModal();
  }
};

export default loginFormHandler;
