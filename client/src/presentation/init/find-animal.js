import animalSearchResults from "../components/shared/animal-search-results.js";
import { getAnimals } from "../../data-access/animal-access/get-animals.js";
import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import { findYourPerfectCompanionComponent } from "../components/shared/find-perfect-companion.js";
import searchMenu from "../components/shared/animal-search-menu.js";
import searchResults from "../components/shared/search-results-section.js";
import { burgerHandler } from "../handlers/burger-handler.js";

const buildPage = async () => {
  document.getElementById("menu").appendChild(navbar());
  document.querySelector("footer").appendChild(footer());
  const main = document.getElementById("main-container");
  main.appendChild(findYourPerfectCompanionComponent());
  main.appendChild(searchMenu());
  main.appendChild(searchResults("animal-search-results"));
  const array = await getAnimals();
  document
    .getElementById("animals-list")
    .appendChild(await animalSearchResults(array));
    burgerHandler();  
};
buildPage();
