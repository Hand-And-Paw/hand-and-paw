import animalPhoto from "./animal-photo.js";
import animalInfo from "./animal-info.js";

export const animalCard = (animal, className) => {
  // create card
  const card = document.createElement("div");
  card.className = "animal-card";
  card.classList.add(className);
  // create photo div
  card.appendChild(animalPhoto(animal, "card-photo"));
  // create info div
  card.appendChild(animalInfo(animal, "card-info"));
  return card;
};
