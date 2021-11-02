import callForm from "../../handlers/call-form.js";

const createLoginSignupMenu = () => {
  const loginSignupMenu = document.createElement("div");
  loginSignupMenu.className = "account-menu";
  const button = document.createElement("button");
  button.id = "account-menu";
  button.innerText = "Log in / Sign up";
  loginSignupMenu.appendChild(button);
  loginSignupMenu.addEventListener("click", callForm);
  return loginSignupMenu;
};

export default createLoginSignupMenu;
