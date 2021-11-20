import animalSearchResults from "../components/shared/animal-search-results.js";
import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import getFavoritesAnimals from "../../business-logic/get-favorites-animals.js";
import deleteAnimalBtn from "../components/layout/delete-animal-button.js";
import removeFavoriteHandler from "../handlers/remove-favorite.js";
import { burgerHandler } from "../handlers/burger-handler.js";

const buildPage = async () => {
  const message = 'You have no animals added into "Favorites", yet.';
  document.getElementById("menu").appendChild(await navbar());
  document.querySelector("footer").appendChild(footer());
  const addedAnimals = await getFavoritesAnimals();
  const animalSortResults = document.querySelector(".favorites-sort-results");

  animalSortResults.appendChild(
    await animalSearchResults(addedAnimals, message)
  );

  const cardPhotos = document.querySelectorAll(".card-photo");

  [...cardPhotos].forEach((card) => {
    const menu = document.createElement("div");
    menu.id = "favorites-menu";
    menu.className = "search-card-menu";
    document.getElementById("seeker-menu").remove();
    menu.appendChild(deleteAnimalBtn(removeFavoriteHandler));
    card.appendChild(menu);
  });
  burgerHandler();
};

buildPage();
