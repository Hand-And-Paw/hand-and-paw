import { registerForm } from "../components/shared/register-form.js";
import { registerUserFormHandler } from "./register-user-form-handler-.js";
import closeModal from "./close-modal.js";
import { loginAuthHandler } from "./login-auth-handler.js";

const loginFormHandler = (event) => {
  if (event.target.className === "open-register-form") {
    // hide login
    const modalContent = document.querySelector(".modal-content");
    const loginForm = document.getElementById("login-form");
    modalContent.removeChild(loginForm);
    // call register form
    modalContent.appendChild(registerForm());
    const submitUser = document.getElementById("submit-register-form");
    submitUser.addEventListener("click", registerUserFormHandler);
  }
  if (event.target.id === "login-submit-btn") {
    // submitting login password
    loginAuthHandler(event);

    // closeModal in 1 second
    setTimeout(closeModal, 800);
  }
};

export default loginFormHandler;
