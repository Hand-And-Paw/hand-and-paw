import deleteAnimalHandler from "../../handlers/delete-animal-handler.js";

const deleteAnimalBtn = () => {
  const deleteAnimalButton = document.createElement("img");
  deleteAnimalButton.src = "/assets/icons/cross.svg";
  deleteAnimalButton.id = "delete-animal";
  deleteAnimalButton.className = "delete-animal";
  deleteAnimalButton.addEventListener("click", deleteAnimalHandler);
  return deleteAnimalButton;
};

export default deleteAnimalBtn;
