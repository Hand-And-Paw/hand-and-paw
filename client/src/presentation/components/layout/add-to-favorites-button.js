import addToFavoritesHandler from "../../handlers/add-to-favorites-handler.js";

const addToFavoritesBtn = (isFavorite, animalId) => {
  const addToFavorites = document.createElement("img");
  addToFavorites.id = "heart";
  addToFavorites.src = "/assets/icons/red_heart.svg";
  if (isFavorite) {
    addToFavorites.classList.add("active");
  }
  addToFavorites.id = "favorite-animal";
  addToFavorites.classList.add("favorite-animal");
  // store the id
  window.localStorage.setItem("animalId", animalId);
  addToFavorites.addEventListener("click", addToFavoritesHandler);
  return addToFavorites;
};

export default addToFavoritesBtn;
