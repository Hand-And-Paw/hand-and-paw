/* eslint-disable no-continue */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable no-use-before-define */
import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import { editAnimalProfileHandler } from "../handlers/edit-animal-profile-handler.js";
import { showAnimalImage } from "../handlers/show-animal-image.js";
import { getAnimal } from "../../data-access/animal-access/get-animal.js";

const buildPage = async () => {
  debugger;
  document.getElementById("menu").appendChild(navbar());
  document.querySelector("footer").appendChild(footer());
  const form = document.getElementById("update-animal-form");
  form.addEventListener("submit", editAnimalProfileHandler);
  const animalId = localStorage.getItem("animalId");
  const animal = await getAnimal(animalId);
  addValues(animal[0]);
  const imgInput = document.getElementById("animal-image");
  imgInput.addEventListener("change", showAnimalImage);
};
buildPage();

function addValues(obj) {
  for (const [key, value] of Object.entries(obj)) {
    if (
      key === "isPrincipal" ||
      key === "fieldname" ||
      key === "_id" ||
      key === "userId" ||
      key === "registerDate" ||
      key === "updateDate" ||
      key === "_v"
    ) {
      continue;
    }

    // if (key === "pictures") {
    //   const picture = document.getElementsByName("picture1");
    //   picture.value = value[0].picture;
    // }
    const name = document.getElementsByName(key);
    name.value = value;
    console.log(name.value);
  }
}
