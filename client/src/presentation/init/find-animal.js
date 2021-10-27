import animalSearchResults from "../components/shared/animal-search-results.js";
import { getAnimals } from "../../data-access/animal-access/get-animals.js";
import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";

const buildPage = async () => {
  document.getElementById("menu").appendChild(navbar());
  document.querySelector("footer").appendChild(footer());

  const array = await getAnimals();
  document
    .querySelector(".animal-search-results")
    .appendChild(animalSearchResults(array));
};
buildPage();
