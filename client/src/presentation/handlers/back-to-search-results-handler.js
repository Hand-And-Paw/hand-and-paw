import state from "../../data-access/state/state.js";
import { filterAnimals } from "../../data-access/animal-access/filter-animals.js";
import animalSearchResults from "../components/shared/animal-search-results.js";
import { getAnimals } from "../../data-access/animal-access/get-animals.js";
import { findYourPerfectCompanionComponent } from "../components/shared/find-perfect-companion.js";
import searchMenu from "../components/shared/animal-search-menu.js";
import searchResults from "../components/shared/search-results-section.js";

export const backToSearchResultsHandler = async () => {
  const message =
    "Sorry, there are no matches for your request today. Try to change your request or come back tomorrow!";
  if (Object.keys(state.filterParameters).length === 0) {
    const main = document.getElementById("main-container");
    main.innerHTML = "";
    main.appendChild(findYourPerfectCompanionComponent());
    main.appendChild(searchMenu());
    main.appendChild(searchResults("animal-search-results"));
    const animals = await getAnimals(state.filterParameters);
    const animalList = document.getElementById("animals-list");
    animalList.innerHTML = "";
    animalList.appendChild(await animalSearchResults(animals, message));
    return;
  }
  const main = document.getElementById("main-container");
  main.innerHTML = "";
  main.appendChild(findYourPerfectCompanionComponent());
  main.appendChild(searchMenu());
  main.appendChild(searchResults("animal-search-results"));
  const filter = await filterAnimals(state.filterParameters);
  const animalList = document.getElementById("animals-list");
  animalList.innerHTML = "";
  animalList.appendChild(await animalSearchResults(filter));
};
