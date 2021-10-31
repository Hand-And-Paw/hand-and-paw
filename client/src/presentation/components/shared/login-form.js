import loginFormHandler from "../../handlers/login-form-handler.js";

export const loginForm = () => {
  const form = document.createElement("form");
  form.className = "modal-form";
  form.id = "login-form";
  form.action = "#";
  form.innerHTML = `
  <h1> Log in </h1>
  <label for="email">Email</label><br />
    <input type="email" name="email" placeholder="Enter your e-mail" autocomplete="email"  required/><br />
    <label for="password">Password</label><br />
    <input
      type="password"
      name="password"
      autocomplete="current-password"
      placeholder ="Enter your password"
      required
    />
    <br />
    
    <button id="open-register-form" class="link-button">Create an account</button><br>
    
    <button id="login-submit-btn" class="button form-button">Submit</button>
    
  `;

  form.addEventListener("click", loginFormHandler);
  return form;
};
