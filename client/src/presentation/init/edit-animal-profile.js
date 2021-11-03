import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import { updateAnimalFormHandler } from "../handlers/update-animal-form-handler.js";

const buildPage = () => {
  document.getElementById("menu").appendChild(navbar());
  document.querySelector("footer").appendChild(footer());
  const form = document.getElementById("update-animal-form");
  form.addEventListener("submit", updateAnimalFormHandler);
};
buildPage();
