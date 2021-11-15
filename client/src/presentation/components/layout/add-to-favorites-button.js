import addToFavoritesHandler from "../../handlers/add-to-favorites-handler.js";

const addToFavoritesBtn = (e, isFavorite) => {
  const addToFavorites = document.createElement("img");
  addToFavorites.id = "heart";
  addToFavorites.src = "/assets/icons/heart.svg";
  if (isFavorite) {
    addToFavorites.src = "/assets/icons/active_heart.svg";
  }
  addToFavorites.id = "favorite-animal";
  addToFavorites.classList.add("favorite-animal");
  // store the id
  addToFavorites.addEventListener("click", addToFavoritesHandler);
  return addToFavorites;
};

export default addToFavoritesBtn;
