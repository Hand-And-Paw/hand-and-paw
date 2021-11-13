const backToSearchResults = (id, text, handler) => {
  const subNavigation = document.createElement("div");
  const button = document.createElement("button");
  subNavigation.id = id;
  const img = document.createElement("img");
  img.className = "arrow-back";
  img.src = "/assets/icons/blue_back-arrow.svg";
  subNavigation.appendChild(img);
  button.innerText = text;
  button.className = "button";
  button.classList.add("link-button");
  subNavigation.addEventListener("click", handler);
  subNavigation.appendChild(button);
  return subNavigation;
};

export default backToSearchResults;
