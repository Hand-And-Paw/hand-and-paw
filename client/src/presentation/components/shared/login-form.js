import loginFormHandler from "../../handlers/login-form-handler.js";

export const loginForm = () => {
  const form = document.createElement("form");
  form.id = "login-form";
  const header = document.createElement("h1");
  header.innerText = "Register an account.";
  form.innerHTML = `
  <label for="email">Email:</label><br />
    <input type="email" name="email" autocomplete="email"  required/><br />
    <label for="password">Password:</label><br />
    <input
      type="password"
      name="password"
      autocomplete="current-password"
      required
    />
    <br />
    <button class="open-register-form">Create an account</button>
    <button class="submit-btn">Log In</button>
  `;

  form.addEventListener("click", loginFormHandler);
  return form;
};
