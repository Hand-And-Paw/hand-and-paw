export const registerForm = () => {
  const form = document.createElement("form");
  form.action = "/users/register";
  form.method = "POST";
  form.enctype = "multipart/form-data";
  const header = document.createElement("h1");
  header.innerText = "Register an account.";
  form.appendChild(header);
  form.innerHTML = `
  <label for="name"> Name:</label><br />
    <input type="name" name="name" required/><br />
  <label for="email">Email:</label><br />
    <input type="email" name="email" autocomplete="email" required /><br />
    <label for="password">Password:</label><br />
    <input
      type="password"
      name="password"
      autocomplete="current-password" required
    />
    <br />
    <label for="repeat-password">Repeat password:</label><br />
    <input
      type="password"
      name="repeatPassword"
      required
    /></br>
    <button class="submit-btn">Register</button>
  `;

  form.addEventListener("click", () => console.log("working listener"));
  return form;
};
