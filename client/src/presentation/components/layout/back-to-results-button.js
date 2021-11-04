const backToSearchResults = () => {
  const button = document.createElement("button");
  button.id = "to-search-results";
  const img = document.createElement("img");
  img.src = "#";
  button.appendChild(img);
  button.innerText = "Back to search results";
  button.className = "button";
  button.classList.add("link-button");
  button.addEventListener("click", () =>
    console.log("working back to search results listener")
  );
  return button;
};

export default backToSearchResults;
