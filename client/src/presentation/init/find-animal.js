import animalSearchResults from "../components/shared/animal-search-results.js";
import { getAnimals } from "../../data-access/animal-access/get-animals.js";
import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import showAnimalProfile from "../handlers/show-animal-profile.js";
import { filterAnimalsHandler } from "../handlers/filter-animals-handler.js";
import removeFilterFindAnimal from "../handlers/remove-filters-find-animal-handler.js";

const buildPage = async () => {
  document.getElementById("menu").appendChild(navbar());
  document.querySelector("footer").appendChild(footer());

  const array = await getAnimals();
  document
    .getElementById("animals-list")
    .appendChild(animalSearchResults(array));

  const animalCards = document.querySelectorAll(".animal-card");
  animalCards.forEach((card) =>
    card.addEventListener("click", showAnimalProfile)
  );

  const submitSearch = document.getElementById("submit-animal-search-form");
  submitSearch.addEventListener("click", filterAnimalsHandler);

  const removeFilters = document.getElementById("remove-filters");
  removeFilters.addEventListener("click", removeFilterFindAnimal);
};
buildPage();
