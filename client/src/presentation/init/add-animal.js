import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import { registerAnimalFormHandler } from "../handlers/register-animal-form-handler.js";
import { showAnimalImage } from "../handlers/show-animal-image.js";

const buildPage = () => {
  document.getElementById("menu").appendChild(navbar());
  document.querySelector("footer").appendChild(footer());
  const form = document.getElementById("register-animal-form");
  form.addEventListener("submit", registerAnimalFormHandler);
  const imgInput = document.getElementById("animal-image");
  imgInput.addEventListener("change", showAnimalImage);
};
buildPage();
