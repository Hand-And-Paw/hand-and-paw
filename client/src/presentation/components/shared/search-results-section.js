const searchResults = () => {
  const animalSearchResultsSection = document.createElement("section");
  animalSearchResultsSection.id = "animals-list";
  animalSearchResultsSection.className = "animal-search-results";
  //section appends container
  return animalSearchResultsSection;
};

export default searchResults;
