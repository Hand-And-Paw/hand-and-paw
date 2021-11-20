/* eslint-disable no-underscore-dangle */
import { getAnimal } from "../../data-access/animal-access/get-animal.js";
import contactShelter from "../components/layout/contact-shelter-button.js";
import backToSearchResults from "../components/layout/back-to-results-button.js";
import animalPhoto from "../components/shared/animal-photo.js";
import animalInfo from "../components/shared/animal-info.js";
import aboutAnimal from "../components/shared/animal-story.js";
import { backToSearchResultsHandler } from "./back-to-search-results-handler.js";
import state from "../../data-access/state/state.js";
import seekerControlMenu from "../components/shared/seeker-control-menu.js";
import { getUser } from "../../data-access/user-access/get-user.js";
import toMyAnimalsBtn from "../components/layout/go-to-added-animals.js";
import { publicAccessHoursComponent } from "../components/shared/public-access-hours.js";

const showAnimalProfile = async (e, id) => {
  const animalId = !id ? e.target.closest(".animal").id : id;
  const animal = await getAnimal(animalId);
  state.userId = animal[0].userId;
  state.animalId = animal[0]._id;
  // create animal profile
  // clean page content
  const main = document.querySelector(".main");
  main.innerHTML = "";
  // build profile
  const animalProfile = document.createElement("div");
  animalProfile.className = "animal animal-profile-page container";

  animalProfile.id = animalId;

  // back to search results

  // append back to search/favorites/added

  // my animals
  if (
    window.location.pathname ===
    "/src/presentation/components/pages/my-animals.html"
  ) {
    animalProfile.appendChild(
      toMyAnimalsBtn(
        "go-to-my-animals",
        "Go to my animals",
        "/src/presentation/components/pages/my-animals.html"
      )
    );
  }
  // favorites
  if (
    window.location.pathname ===
    "/src/presentation/components/pages/favorites.html"
  ) {
    animalProfile.appendChild(
      toMyAnimalsBtn(
        "go-to-favorite-animals",
        "Go to favorite animals",
        "/src/presentation/components/pages/favorites.html"
      )
    );
  }
  // find animal
  if (
    window.location.pathname ===
    "/src/presentation/components/pages/find-animal.html"
  ) {
    animalProfile.appendChild(
      backToSearchResults(
        "to-search-results",
        "Back to search results",
        backToSearchResultsHandler
      )
    );
  }

  // add photo
  animalProfile.appendChild(animalPhoto(animal[0], "animal-photo"));
  // add basic info
  animalProfile.appendChild(animalInfo(animal[0], "animal-info"));
  // contact shelter btn
  animalProfile.appendChild(contactShelter(animal[0]._id));

  // add animal story
  animalProfile.appendChild(aboutAnimal(animal[0], "animal-story"));
  // append card menu
  const currentUser = await getUser(localStorage.getItem("userId"));
  const checkFavorite = currentUser[0]?.favorites.some(
    (favoriteId) => favoriteId === state.animalId
  );
  const belongsToUser = currentUser[0]?.registeredAnimals.some(
    (addedAnimalId) => addedAnimalId === state.animalId
  );
  if (!belongsToUser) {
    animalProfile.appendChild(
      seekerControlMenu(
        "animal-profile-menu favorites",
        checkFavorite,
        state.animalId
      )
    );
  }

  const giver = await getUser(animal[0].userId);
  if (giver[0].publicAccess || giver[0].website || animal[0].webSite) {
    animalProfile.appendChild(publicAccessHoursComponent(giver[0], animal[0]));
  }

  // append components to the page
  main.appendChild(animalProfile);
};

export default showAnimalProfile;
