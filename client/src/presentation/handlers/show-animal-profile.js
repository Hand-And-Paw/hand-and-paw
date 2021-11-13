/* eslint-disable no-underscore-dangle */
import { getAnimal } from "../../data-access/animal-access/get-animal.js";
import contactShelter from "../components/layout/contact-shelter-button.js";
import backToSearchResults from "../components/layout/back-to-results-button.js";
import animalPhoto from "../components/shared/animal-photo.js";
import animalInfo from "../components/shared/animal-info.js";
import aboutAnimal from "../components/shared/animal-story.js";
import { backToSearchResultsHandler } from "./back-to-search-results-handler.js";
import state from "../../data-access/state/state.js";
import ownerControlMenu from "../components/shared/owner-control-menu.js";
import seekerControlMenu from "../components/shared/seeker-control-menu.js";

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
  animalProfile.appendChild(
    backToSearchResults(
      "to-search-results",
      "Back to search results",
      backToSearchResultsHandler
    )
  );
  // add photo
  animalProfile.appendChild(animalPhoto(animal[0], "animal-photo"));
  // add basic info
  animalProfile.appendChild(animalInfo(animal[0], "animal-info"));
  // contact shelter btn
  animalProfile.appendChild(contactShelter(animal[0]._id));
  // add animal story
  animalProfile.appendChild(aboutAnimal(animal[0], "animal-story"));
  // append card menu
  const currentUser = localStorage.getItem("userId");
  const animalGiver = animal[0].userId;
  if (currentUser === animalGiver) {
    animalProfile.appendChild(ownerControlMenu("animal-profile-menu"));
  } else {
    animalProfile.appendChild(
      seekerControlMenu("animal-profile-menu favorites")
    );
  }
  // append components to the page
  main.appendChild(animalProfile);
};

export default showAnimalProfile;
