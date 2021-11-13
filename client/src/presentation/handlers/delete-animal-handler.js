import deleteAnimalRegistration from "../../data-access/user-access/delete-animal-registration.js";
import { backToSearchResultsHandler } from "./back-to-search-results-handler.js";

const deleteAnimalHandler = async (e) => {
  e.stopPropagation();
  // get current user id
  const currentUser = localStorage.getItem("userId");
  // delete animal
  const animalToDelete = e.target.closest(".animal").id;
  await deleteAnimalRegistration(currentUser, animalToDelete);
  // update search results
  const deleteCard = e.target.closest(".animal");
  if (e.target.parentElement.classList.contains("search-card-menu")) {
    deleteCard.remove();
  } else {
    backToSearchResultsHandler();
  }
};
export default deleteAnimalHandler;
