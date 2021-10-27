export const registerForm = () => {
  const form = document.createElement("form");
  form.action = "/users/register";
  form.method = "POST";
  form.enctype = "multipart/form-data";
  form.innerHTML = `
  <h1> Register an account. </h1>
  <label for="name"> Name:</label><br />
    <input type="name" name="name" required/><br />
  <label for="email">Email:</label><br />
    <input type="email" name="email" autocomplete="email" required /><br />
    <label for="password">Password:</label><br />
    <input
      type="password"
      name="password"
      autocomplete="new-password" required
    />
    <br />
    <label for="repeat-password">Repeat password:</label><br />
    <input
      type="password"
      name="repeatPassword"
      autocomplete="new-password" 
      required
    /></br>
    <button class="submit-btn">Register</button>
  `;

  form.addEventListener("click", () => console.log("working listener"));
  return form;
};
