import animalSearchResults from "../components/shared/animal-search-results.js";
import { getAnimals } from "../../data-access/animal-access/get-animals.js";

const buildPage = async () => {
  const array = await getAnimals();
  document
    .querySelector(".animal-search-results")
    .appendChild(animalSearchResults(array));
};
buildPage();
