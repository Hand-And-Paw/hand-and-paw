import state from "../../data-access/state/state.js";
import { filterAnimals } from "../../data-access/animal-access/filter-animals.js";
import animalSearchResults from "../components/shared/animal-search-results.js";
import { getAnimals } from "../../data-access/animal-access/get-animals.js";
import { findYourPerfectCompanionComponent } from "../components/shared/find-perfect-companion.js";
import {
  searchMenu,
  searchResults,
} from "../components/shared/animal-search-menu.js";

export const backToSearchResultsHandler = async () => {
  if (Object.keys(state.filterParameters).length === 0) {
    const main = document.getElementById("main-container");
    main.innerHTML = "";
    main.appendChild(findYourPerfectCompanionComponent());
    main.appendChild(searchMenu());
    main.appendChild(searchResults());
    const animals = await getAnimals(state.filterParameters);
    const animalList = document.getElementById("animals-list");
    animalList.innerHTML = "";
    animalList.appendChild(animalSearchResults(animals));
    return;
  }
  const main = document.getElementById("main-container");
  main.innerHTML = "";
  main.appendChild(findYourPerfectCompanionComponent());
  main.appendChild(searchMenu());
  main.appendChild(searchResults());
  const filter = await filterAnimals(state.filterParameters);
  const animalList = document.getElementById("animals-list");
  animalList.innerHTML = "";
  animalList.appendChild(animalSearchResults(filter));
};
