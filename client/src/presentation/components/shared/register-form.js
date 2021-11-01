import { registerFormValidation } from "../../../business-logic/register-form-validation.js";

export const registerForm = () => {
  const form = document.createElement("form");
  form.className = "modal-form";
  form.id = "register-form";
  form.action = "#";
  form.innerHTML = `
  <h1> Register an account. </h1>
  <div class="form-control">
    <label for="name"> Name:</label><br />
    <input type="name" id="name" name="name" required/><br />
    <small> Error message </small>
  </div>
  <div class="form-control">
    <label for="email">Email:</label><br />
    <input type="email" id="email" name="email" autocomplete="email" required /><br />
    <small> Error message </small>
  </div>
  <div class="form-control">
    <label for="password">Password:</label><br />
    <input
      type="password"
      id="password"
      name="password"
      autocomplete="new-password" required
    />
    <br />
    <small>Error message.</small>
  </div>
  <div class="form-control">
    <label for="repeat-password">Repeat password:</label><br />
    <input
      type="password"
      id="repeat-password"
      name="repeatPassword"
      autocomplete="new-password" 
      required
    /></br>
    <small>Error message</small>
  </div>
    <button id="submit-register-form" class="button form-button">Register</button>
  `;
  form.addEventListener("mouseover", registerFormValidation);
  return form;
};
