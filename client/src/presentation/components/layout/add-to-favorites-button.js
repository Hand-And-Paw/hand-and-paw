import addToFavoritesHandler from "../../handlers/add-to-favorites-handler.js";

const addToFavoritesBtn = (isFavorite) => {
  const addToFavorites = document.createElement("img");
  addToFavorites.id = "heart";
  addToFavorites.src = "/assets/icons/red_heart.svg";
  if (isFavorite) {
    addToFavorites.className = "active";
  }
  addToFavorites.id = "favorite-animal";
  addToFavorites.className = "favorite-animal";
  addToFavorites.addEventListener("click", (e) =>
    window.localStorage.setItem("animalId", e.target.closest(".animal-card").id)
  );
  addToFavorites.addEventListener("click", addToFavoritesHandler);
  return addToFavorites;
};

export default addToFavoritesBtn;
