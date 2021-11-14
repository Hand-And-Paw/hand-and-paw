import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import { editUserProfile } from "../components/layout/edit-user-profile.js";
import { showAnimalImage } from "../handlers/show-animal-image.js";
import { addValuesToEditUser } from "../../business-logic/add-calues-to-edit-user.js";
import { getUser } from "../../data-access/user-access/get-user.js";

const buildPage = async () => {
  debugger;
  document.getElementById("menu").appendChild(navbar());
  document.querySelector("footer").appendChild(footer());
  document.getElementById("main-container").appendChild(editUserProfile());
  // add values
  const userId = localStorage.getItem("userId");
  const user = await getUser(userId);
  addValuesToEditUser(user[0]);
  const imgInput = document.getElementById("avatar-image");
  imgInput.addEventListener("change", showAnimalImage);
};
buildPage();
