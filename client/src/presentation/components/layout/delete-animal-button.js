const deleteAnimalBtn = (handler) => {
  const deleteAnimalButton = document.createElement("img");
  deleteAnimalButton.src = "/assets/icons/purple_cross.svg";
  deleteAnimalButton.id = "delete-animal";
  deleteAnimalButton.className = "delete-animal";
  deleteAnimalButton.addEventListener("click", handler);
  return deleteAnimalButton;
};

export default deleteAnimalBtn;
