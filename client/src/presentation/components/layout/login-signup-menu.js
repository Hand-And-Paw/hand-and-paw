import callLoginForm from "../../handlers/call-login-form.js";

const createLoginSignupMenu = () => {
  const loginSignupMenu = document.createElement("div");
  loginSignupMenu.className = "account-menu";
  const button = document.createElement("button");
  button.id = "account-menu-btn";
  button.innerText = "Log in / Sign up";
  loginSignupMenu.appendChild(button);
  loginSignupMenu.addEventListener("click", callLoginForm);
  // loginSignupMenu.addEventListener("click", console.log("i work"));
  return loginSignupMenu;
};

export default createLoginSignupMenu;
