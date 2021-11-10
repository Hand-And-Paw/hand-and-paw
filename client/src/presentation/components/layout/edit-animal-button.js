// import { editAnimalProfileHandler } from "../../handlers/edit-animal-profile-handler.js";

const editAnimalProfile = () => {
  const editAnimalProfileBtn = document.createElement("img");
  editAnimalProfileBtn.src = "/assets/icons/edit-icon.svg";
  editAnimalProfileBtn.id = "edit-animal";
  editAnimalProfileBtn.className = "edit-animal";
  // editAnimalProfileBtn.addEventListener("click", editAnimalProfileHandler);
  return editAnimalProfileBtn;
};

export default editAnimalProfile;
