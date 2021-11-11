const searchResults = (className) => {
  const animalSearchResultsSection = document.createElement("section");
  animalSearchResultsSection.id = "animals-list";
  animalSearchResultsSection.className = className;
  // section appends container
  return animalSearchResultsSection;
};

export default searchResults;
