import animalPhoto from "./animal-photo.js";
import animalInfo from "./animal-info.js";
import showAnimalProfile from "../../handlers/show-animal-profile.js";
import ownerControlMenu from "./owner-control-menu.js";

/**
 * @param {object} animal object with information about 1 animal
 * @param {string} className card class name
 * @returns div with animal picture and info, has id equal to animal id
 */

export const animalCard = (animal, className) => {
  // create card
  const { _id, userId } = animal;
  const card = document.createElement("div");
  card.id = _id;
  card.className = "animal-card";
  card.classList.add(className);
  // create photo div
  card.appendChild(animalPhoto(animal, "card-photo"));
  // create info div
  card.appendChild(animalInfo(animal, "card-info"));
  card.addEventListener("click", showAnimalProfile);
  // buttons: fave, edit, delete
  const currentUser = localStorage.getItem("userId");
  const animalGiver = userId;
  if (currentUser === animalGiver) {
    card.appendChild(ownerControlMenu("search-card-menu"));
  }
  // else -attach favorites icon

  return card;
};
