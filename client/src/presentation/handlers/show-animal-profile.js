/* eslint-disable no-underscore-dangle */
import { getAnimal } from "../../data-access/animal-access/get-animal.js";
import contactShelter from "../components/layout/contact-shelter-button.js";
import backToSearchResults from "../components/layout/back-to-results-button.js";
import animalPhoto from "../components/shared/animal-photo.js";
import animalInfo from "../components/shared/animal-info.js";
import aboutAnimal from "../components/shared/animal-story.js";
import { backToSearchResultsHandler } from "./back-to-search-results-handler.js";
import state from "../../data-access/state/state.js";

const showAnimalProfile = async (e, id) => {
  const animalId = !id ? e.target.closest(".animal-card").id : id;
  const animal = await getAnimal(animalId);
  state.userId = animal[0].userId;
  state.animalId = animal[0]._id;
  // create animal profile
  // clean page content
  const main = document.querySelector(".main");
  main.innerHTML = "";
  // build profile
  const animalProfile = document.createElement("div");
  animalProfile.className = "animal-profile-page container";
  animalProfile.id = animalId;
  // back to search results
  animalProfile.appendChild(backToSearchResults(backToSearchResultsHandler));
  // add photo
  animalProfile.appendChild(animalPhoto(animal[0], "animal-photo"));
  // add basic info
  animalProfile.appendChild(animalInfo(animal[0], "animal-info"));
  // contact shelter btn
  animalProfile.appendChild(contactShelter(animal[0]._id));
  // add animal story
  animalProfile.appendChild(aboutAnimal(animal[0], "animal-story"));
  // append components to the page
  main.appendChild(animalProfile);
};

export default showAnimalProfile;
