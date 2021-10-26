import { registerForm } from "../components/shared/register-form.js";

const loginFormHandler = (event) => {
  // is user is logged in - farm is not called
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
  }
};

export default loginFormHandler;
