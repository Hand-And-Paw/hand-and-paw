import { animalCard } from "./animal-card.js";
import noAnimalsFound from "./no-animals-found-message.js";

const animalSearchResults = (array, searchResultPlaceholder) => {
  const container = document.createElement("div");
  container.className = "container search-results";
  if (array.length !== 0) {
    array.forEach((animal) => {
      container.appendChild(animalCard(animal, "search-result-card"));
    });
  } else {
    container.appendChild(noAnimalsFound(searchResultPlaceholder));
  }
  return container;
};

export default animalSearchResults;
