import animalSearchResults from "../components/shared/animal-search-results.js";
import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import getAddedAnimals from "../../business-logic/get-added-animals.js";
import ownerControlMenu from "../components/shared/owner-control-menu.js";
import { burgerHandler } from "../handlers/burger-handler.js";

const buildPage = async () => {
  const message = "You haven't added animals for adoption, yet.";
  document.getElementById("menu").appendChild(await navbar());
  document.querySelector("footer").appendChild(footer());
  // show added animals

  const addedAnimals = await getAddedAnimals();
  document
    .querySelector(".my-animals-sort-results")

    .appendChild(await animalSearchResults(addedAnimals, message));
  const cardPhotos = document.querySelectorAll(".card-photo");

  [...cardPhotos].forEach((card) => {
    card.appendChild(ownerControlMenu("search-card-menu"));
  });
  burgerHandler();
};
buildPage();
