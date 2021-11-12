import addToFavoritesHandler from "../../handlers/add-to-favorites-handler.js";

const addToFavoritesBtn = (isFavorite) => {
  const addToFavorites = document.createElement("img");
  if (isFavorite) {
    addToFavorites.src = "/assets/icons/red_heart.svg";
  } else {
    addToFavorites.src = "/assets/icons/white_heart.svg";
  }
  addToFavorites.id = "favorite-animal";
  addToFavorites.className = "favorite-animal";
  addToFavorites.addEventListener("click", addToFavoritesHandler);
  return addToFavorites;
};

export default addToFavoritesBtn;
