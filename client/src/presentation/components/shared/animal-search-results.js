import { animalCard } from "./animal-card.js";
import noAnimalsFound from "./no-animals-found-message.js";

/**
 * @param {array} array array of animal profile objects
 * @param {string} searchResultPlaceholder message for when search returns 0 matches
 * @returns div with animal cards
 */

const animalSearchResults = async (array, searchResultPlaceholder) => {
  const container = document.createElement("div");
  container.className = "container search-results";
  if (array.length !== 0) {
    for await (const animal of array) {
      container.appendChild(await animalCard(animal, "search-result-card"));
    }
  } else {
    container.appendChild(noAnimalsFound(searchResultPlaceholder));
  }
  return container;
};

export default animalSearchResults;
