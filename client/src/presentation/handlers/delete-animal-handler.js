import deleteAnimalRegistration from "../../data-access/user-access/delete-animal-registration.js";

const deleteAnimalHandler = async (e) => {
  e.stopPropagation();
  // get current user id
  const currentUser = localStorage.getItem("userId");
  // delete animal
  const animalToDelete = e.target.closest(".animal-card").id;
  await deleteAnimalRegistration(currentUser, animalToDelete);
  // update search results
  const deleteCard = e.target.closest(".animal-card");
  deleteCard.remove();
};
export default deleteAnimalHandler;
