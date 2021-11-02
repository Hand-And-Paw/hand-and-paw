import callForm from "../../handlers/call-form.js";

const createLoginSignupMenu = () => {
  const loginSignupMenu = document.createElement("div");
  loginSignupMenu.className = "account-menu";
  const button = document.createElement("button");
  button.id = "account-menu";
  button.innerText = "Log in / Sign up";
  const avatar = document.createElement("div");
  avatar.className = "avatar";
  const avatarImage = document.createElement("img");
  avatarImage.src = "/assets/icons/header_codicon_account.svg";
  avatar.appendChild(avatarImage);
  loginSignupMenu.appendChild(button);
  loginSignupMenu.appendChild(avatar);
  loginSignupMenu.addEventListener("click", callForm);
  return loginSignupMenu;
};

export default createLoginSignupMenu;
