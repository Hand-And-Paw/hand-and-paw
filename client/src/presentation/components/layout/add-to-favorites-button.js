import addToFavoritesHandler from "../../handlers/add-to-favorites-handler.js";

const addToFavoritesBtn = (isFavorite) => {
  const addToFavorites = document.createElement("img");
  addToFavorites.id = "heart";
  addToFavorites.className = "favorite-animal";

  if (isFavorite) {
    addToFavorites.src = "/assets/icons/active-heart.svg";
  } else {
    addToFavorites.src = "/assets/icons/heart.svg";
  }

  addToFavorites.addEventListener("click", addToFavoritesHandler);
  return addToFavorites;
};

export default addToFavoritesBtn;
