/* eslint-disable no-use-before-define */
import { registerFormValidation } from "../../handlers/register-form-validation.js";
import { registerUserFormHandler } from "../../handlers/register-user-form-handler-.js";

export const registerForm = () => {
  const form = document.createElement("form");
  form.className = "modal-form";
  form.id = "register-form";
  form.action = "#";
  form.innerHTML = `
  <h1>Register an account</h1>
  <div class="form-control">
    <label for="name"> Name:</label><br />
    <input type="name" id="name" name="name"/>
  </div>
  <div class="form-control">
    <label for="email">Email:</label><br />
    <input type="email" id="email" name="email" />
  </div>
  <div class="form-control">
    <label for="password">Password:</label><br />
    <input
      type="password"
      id="password"
      name="password"
      autocomplete="new-password"
    />
  </div>
  <div class="form-control">
    <label for="repeat-password">Repeat password:</label><br />
    <input
      type="password"
      id="repeat-password"
      name="repeatPassword"
      autocomplete="new-password" 
    />

  </div>
    <button id="submit-register-form" type="sumbit" class="button regular-button">Register</button>
  `;
  // form.addEventListener("change", registerFormValidation);
  form.addEventListener("submit", registerHandler, false);

  return form;
};

const registerHandler = (event) => {
  if (registerFormValidation(event)) {
    registerUserFormHandler(event);
  }
};
