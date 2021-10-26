import { registerForm } from "../components/shared/register-form.js";

const loginFormHandler = (event) => {
  if (event.target.className === "open-register-form") {
    // hide login
    const modalContent = document.querySelector(".modal-content");
    const child = document.getElementById("login-form");
    modalContent.removeChild(child);
    modalContent.appendChild(registerForm());
    // call register form
  }
  if (event.target.className === "submit-btn") {
    // submitting login password
  }
};

export default loginFormHandler;
