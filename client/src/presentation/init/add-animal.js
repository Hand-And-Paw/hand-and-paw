import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import { registerAnimalFormHandler } from "../handlers/register-animal-form-handler.js";
import { showAnimalImage } from "../handlers/show-animal-image.js";
import { burgerHandler } from "../handlers/burger-handler.js";
import openModal from "../handlers/call-login-form.js";
import { loginForm } from "../components/shared/login-form.js";

const buildPage = async () => {
  document.getElementById("menu").appendChild(await navbar());
  document.querySelector("footer").appendChild(footer());
  if (!sessionStorage.getItem("isLoggedIn")) {
    openModal(loginForm("modal-form"));
    return;
  }
  const form = document.getElementById("register-animal-form");
  form.addEventListener("submit", registerAnimalFormHandler);
  const imgInput = document.getElementById("animal-image");
  imgInput.addEventListener("change", showAnimalImage);
  burgerHandler();
};
buildPage();
