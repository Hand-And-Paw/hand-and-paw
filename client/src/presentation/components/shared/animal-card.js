import animalPhoto from "./animal-photo.js";
import animalInfo from "./animal-info.js";
import showAnimalProfile from "../../handlers/show-animal-profile.js";

export const animalCard = (animal, className, id) => {
  // create card
  const { _id } = animal;
  const card = document.createElement("div");
  card.id = _id;
  card.className = "animal-card";
  card.classList.add(className);
  // create photo div
  card.appendChild(animalPhoto(animal, "card-photo"));
  // create info div
  card.appendChild(animalInfo(animal, "card-info"));
  card.addEventListener("click", showAnimalProfile);
  return card;
};
