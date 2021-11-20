import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import { editUserProfile } from "../components/layout/edit-user-profile.js";
import { showAvatarImage } from "../../business-logic/show-avatar-image.js";
import { addValuesToEditUser } from "../../business-logic/add-values-to-edit-user.js";
import { getUser } from "../../data-access/user-access/get-user.js";
import { burgerHandler } from "../handlers/burger-handler.js";

const buildPage = async () => {
  document.getElementById("menu").appendChild(await navbar());
  document.querySelector("footer").appendChild(footer());
  document.getElementById("main-container").appendChild(editUserProfile());
  // add values
  const userId = localStorage.getItem("userId");
  const user = await getUser(userId);
  addValuesToEditUser(user[0]);
  const imgInput = document.getElementById("upload-avatar-image");
  imgInput.addEventListener("change", showAvatarImage);
  burgerHandler();
};
buildPage();
