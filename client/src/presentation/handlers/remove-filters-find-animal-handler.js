import state from "../../data-access/state/state.js";
import { filterAnimalsHandler } from "./filter-animals-handler.js";
import { getAnimals } from "../../data-access/animal-access/get-animals.js";
import animalSearchResults from "../components/shared/animal-search-results.js";

const removeFilterFindAnimal = async () => {
  const form = document.getElementById("search-animal-form");
  form.reset();
  state.filterParameters = {};
  filterAnimalsHandler();
  // re-render animals
  const array = await getAnimals();
  const animalList = document.getElementById("animals-list");
  animalList.innerHTML = "";
  animalList.appendChild(await animalSearchResults(array));
};
export default removeFilterFindAnimal;
