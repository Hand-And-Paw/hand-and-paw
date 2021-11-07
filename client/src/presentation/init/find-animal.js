import animalSearchResults from "../components/shared/animal-search-results.js";
import { getAnimals } from "../../data-access/animal-access/get-animals.js";
import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import { findYourPerfectCompanionComponent } from "../components/shared/find-perfect-companion.js";
import { animalSearchMenuComponent } from "../components/shared/animal-search-menu.js";

const buildPage = async () => {
  document.getElementById("menu").appendChild(navbar());
  document.querySelector("footer").appendChild(footer());
  const main = document.getElementById("main-container");
  main.appendChild(findYourPerfectCompanionComponent());
  main.appendChild(animalSearchMenuComponent());
  const array = await getAnimals();
  document
    .getElementById("animals-list")
    .appendChild(animalSearchResults(array));
};
buildPage();
