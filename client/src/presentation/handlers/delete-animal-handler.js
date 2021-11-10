import deleteAnimalRegistration from "../../data-access/user-access/delete-animal-registration.js";
// import animalSearchResults from "../components/shared/animal-search-results.js";
// import getAddedAnimals from "../../business-logic/get-added-animals.js";

const deleteAnimalHandler = async (e) => {
  debugger;
  // get current user id
  const currentUser = localStorage.getItem("userId");
  // delete animal
  const animalToDelete = e.target.closest(".animal-card").id;
  console.log("animal", animalToDelete);
  console.log("user", currentUser);
  await deleteAnimalRegistration(currentUser, animalToDelete);
  // const addedAnimals = await getAddedAnimals();
  // document
  //   .querySelector(".my-animals-sort-results")
  //   .appendChild(animalSearchResults(addedAnimals));
};
export default deleteAnimalHandler;
