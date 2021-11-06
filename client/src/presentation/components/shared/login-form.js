import loginFormHandler from "../../handlers/login-form-handler.js";

export const loginForm = (className) => {
  const form = document.createElement("form");
  // form.className = "modal-form";
  form.className = className;
  form.id = "login-form";
  form.action = "#";
  form.innerHTML = `
  <h1> Log in </h1>
  <p class="error" id="login-error"> Incorrect login or password. </p>
  <div class="form-control">
     <label for="email">Email</label><br />
    <input type="email" id="email" name="email" placeholder="Enter your e-mail" autocomplete="email"  required/><br />
    <img src = "/assets/icons/login-email-avatar.svg">
  </div>
  <div class="form-control">
    <label for="password">Password</label><br />
    <input
      type="password"
      name="password"
      id="password"
      autocomplete="current-password"
      placeholder ="Enter your password"
      required
    />
    <br />
    <img src = "/assets/icons/login-password-lock.svg">
  <div>
    <button id="open-register-form" class="link-button">Create an account</button><br>
    
    <button id="login-submit-btn" class="button form-button">Submit</button>
    
  `;

  form.addEventListener("click", loginFormHandler);
  return form;
};
