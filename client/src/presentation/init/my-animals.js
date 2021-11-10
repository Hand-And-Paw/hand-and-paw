import animalSearchResults from "../components/shared/animal-search-results.js";
import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import getAddedAnimals from "../../business-logic/get-added-animals.js";

const buildPage = async () => {
  const message = "You haven't added animals for adoption, yet.";
  document.getElementById("menu").appendChild(navbar());
  document.querySelector("footer").appendChild(footer());
  const addedAnimals = await getAddedAnimals();
  document
    .querySelector(".my-animals-sort-results")
    .appendChild(animalSearchResults(addedAnimals, message));
};
buildPage();
