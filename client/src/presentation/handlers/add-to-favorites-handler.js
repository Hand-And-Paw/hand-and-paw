import { addFavorite } from "../../data-access/user-access/add-favorite.js";
import { removeFavorite } from "../../data-access/user-access/remove-favorite.js";

const addToFavoritesHandler = async (event) => {
  event.stopPropagation();
  const { target } = event;
  const userId = localStorage.getItem("userId");
  const animalId = event.target.closest(".animal").id;

  target.classList.toggle("active");
  if ([...target.classList].includes("active")) {
    await addFavorite(userId, animalId);
    return;
  }
  await removeFavorite(userId, animalId);
};

export default addToFavoritesHandler;
