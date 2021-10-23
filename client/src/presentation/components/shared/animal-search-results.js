import { animalCard } from "./animal-card.js";

const animalSearchResults = (array) => {
  const container = document.createElement("div");
  container.className = "container";
  if (array.length !== 0) {
    array.forEach((animal) => {
      container.appendChild(animalCard(animal));
    });
  } else {
    container.innerText =
      "Sorry, there are no matches for your request today. Try to change your request or come back tomorrow!";
  }
  return container;
};

export default animalSearchResults;
