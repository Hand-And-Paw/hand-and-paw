export const loginForm = () => {
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
    <button class="submit-btn">Log In</button>
  `;
  form.addEventListener("click", (e) => console.log("workig listener"));
  return form;
};
