import animalSearchResults from "../components/shared/animal-search-results.js";
import { fetchAnimals } from "../../data-access/animal-access/fetch-animals.js";
import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";

const buildPage = async () => {
  document.getElementById("menu").appendChild(navbar());
  document.querySelector("footer").appendChild(footer());
  // fetch added animals
  const array = await fetchAnimals();
  document
    .querySelector(".favorites-sort-results")
    .appendChild(animalSearchResults(array));
};
buildPage();
