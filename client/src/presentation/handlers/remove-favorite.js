import { removeFavorite } from "../../data-access/user-access/remove-favorite.js";

const removeFavoriteHandler = async (e) => {
  debugger;
  e.stopPropagation();
  // get current user id
  const currentUser = localStorage.getItem("userId");
  // delete animal
  const animalToDelete = e.target.closest(".animal-card").id;
  await removeFavorite(currentUser, animalToDelete);
  // update search results
  const deleteCard = e.target.closest(".animal-card");
  deleteCard.remove();
};
export default removeFavoriteHandler;