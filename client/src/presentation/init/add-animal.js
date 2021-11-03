import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import { registerAnimalFormHandler } from "../handlers/register-animal-form-handler.js";

const buildPage = () => {
  document.getElementById("menu").appendChild(navbar());
  document.querySelector("footer").appendChild(footer());
  const form = document.getElementById("register-animal-form");
  form.addEventListener("submit", registerAnimalFormHandler);
};
buildPage();
