import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import { editUserProfile } from "../components/layout/edit-user-profile.js";
import { showAnimalImage } from "../handlers/show-animal-image.js";

const buildPage = () => {
  document.getElementById("menu").appendChild(navbar());
  document.querySelector("footer").appendChild(footer());
  document.getElementById("main-container").appendChild(editUserProfile());
  const imgInput = document.getElementById("avatar-image");
  imgInput.addEventListener("change", showAnimalImage);
};
buildPage();
