export const loginForm = () => {
  // h1 Log In
  const form = document.createElement("form");
  form.innerHTML = `
  <label for="email">Email:</label><br />
    <input type="email" name="email" autocomplete="email" /><br />
    <label for="password">Password:</label><br />
    <input
      type="password"
      name="password"
      autocomplete="current-password"
    />
    <br />
    // Not registered? Create an account
    <button class="submit-btn">Log In</button>
  `;

  form.addEventListener("click", (e) => console.log("workig listener"));
  return form;
};
