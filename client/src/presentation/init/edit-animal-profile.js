/* eslint-disable no-continue */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable no-use-before-define */
import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import { editAnimalProfileHandler } from "../handlers/edit-animal-profile-handler.js";
import { showAnimalImage } from "../handlers/show-animal-image.js";
import { getAnimal } from "../../data-access/animal-access/get-animal.js";
import { addValuesToEditAnimal } from "../../business-logic/add-values-to-edit-animal.js";

const buildPage = async () => {
  document.getElementById("menu").appendChild(navbar());
  document.querySelector("footer").appendChild(footer());
  const form = document.getElementById("update-animal-form");
  form.addEventListener("submit", editAnimalProfileHandler);
  const animalId = localStorage.getItem("animalId");
  const animal = await getAnimal(animalId);
  // adding values
  addValuesToEditAnimal(animal[0]);
  const imgInput = document.getElementById("animal-image");
  imgInput.addEventListener("change", showAnimalImage);
};
buildPage();
