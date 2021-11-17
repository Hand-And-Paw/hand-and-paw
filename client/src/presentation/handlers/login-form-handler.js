import { registerForm } from "../components/shared/register-form.js";

export const registerUserHandler = () => {
  // hide login
  const modalContent = document.querySelector(".modal-content");
  const loginForm = document.getElementById("login-form");
  modalContent.removeChild(loginForm);
  // call register form
  modalContent.appendChild(registerForm());
};
