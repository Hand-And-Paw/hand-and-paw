import deleteAnimalBtn from "../layout/delete-animal-button.js";
import editAnimalProfile from "../layout/edit-animal-button.js";

const ownerControlMenu = () => {
  const menu = document.createElement("div");
  menu.className = "owner-menu";
  menu.appendChild(deleteAnimalBtn());
  menu.appendChild(editAnimalProfile());
  return menu;
};

export default ownerControlMenu;
