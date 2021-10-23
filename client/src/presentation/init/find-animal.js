import animalSearchResults from "../components/shared/animal-search-results.js";
import { fetchAnimals } from "../../data-access/animal-access/fetch-animals.js";

const buildPage = async () => {
  debugger;
  const array = await fetchAnimals();
  document
    .querySelector(".animal-search-results")
    .appendChild(animalSearchResults(array));
};
buildPage();
