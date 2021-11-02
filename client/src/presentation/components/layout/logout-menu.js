import dropDownHandler from "../../handlers/dropdown-handler.js";
import logOut from "../../handlers/logout-handler.js";

const createLogoutMenu = () => {
  const logoutMenu = document.createElement("div");
  logoutMenu.className = "account-menu";
  logoutMenu.id = "account-menu";
  // log out btn
  const logOutBtn = document.createElement("button");
  logOutBtn.innerText = "Log out";
  logOutBtn.id = "log-out";
  logoutMenu.appendChild(logOutBtn);
  // avatar
  const avatar = document.createElement("div");
  avatar.className = "avatar";
  const avatarImage = document.createElement("img");
  avatarImage.src = "#";
  avatarImage.id = "open-dropdown";
  avatar.appendChild(avatarImage);
  logoutMenu.appendChild(avatar);
  // handle click events
  logOutBtn.addEventListener("click", logOut);
  avatar.addEventListener("click", dropDownHandler);
  return logoutMenu;
};

export default createLogoutMenu;
