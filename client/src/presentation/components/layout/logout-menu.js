import dropDownHandler from "../../handlers/dropdown-handler.js";
import logOut from "../../handlers/logout-handler.js";
import { getUser } from "../../../data-access/user-access/get-user.js";
import { b64toBlob } from "../../../business-logic/base-to-blob.js";

const createLogoutMenu = async () => {
  const logoutMenu = document.createElement("div");
  logoutMenu.id = "account-menu";
  logoutMenu.className = "account-menu";
  // log out btn
  const logOutBtn = document.createElement("button");
  logOutBtn.innerText = "Log out";
  logOutBtn.id = "log-out";
  logOutBtn.className = "log-out";
  logoutMenu.appendChild(logOutBtn);
  // avatar
  const avatar = document.createElement("div");
  avatar.id = "open-dropdown";
  avatar.className = "avatar";
  // get avatar from database
  const userId = localStorage.getItem("userId");
  const user = await getUser(userId);
  // append if there is avatar
  const avatarImage = document.createElement("img");
  avatarImage.id = "avatar-image";

  if (user[0]?.avatar) {
    const blob = b64toBlob(user[0].avatar.data, user[0].avatar.contentType);
    const url = URL.createObjectURL(blob);
    avatarImage.src = url;
    avatar.appendChild(avatarImage);
  } else {
    avatarImage.src = "/assets/icons/header_codicon_account.svg";
    avatarImage.id = "profile-picture";
    avatar.appendChild(avatarImage);
  }
  logoutMenu.appendChild(avatar);
  // handle click events
  logOutBtn.addEventListener("click", logOut);
  avatar.addEventListener("click", dropDownHandler);
  return logoutMenu;
};

export default createLogoutMenu;
