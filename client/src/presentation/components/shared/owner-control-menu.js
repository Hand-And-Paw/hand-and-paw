import deleteAnimalBtn from "../layout/delete-animal-button.js";
import editAnimalProfile from "../layout/edit-animal-button.js";
import deleteAnimalHandler from "../../handlers/delete-animal-handler.js";

const ownerControlMenu = (className) => {
  const menu = document.createElement("div");
  menu.id = "owner-menu";
  menu.className = className;
  menu.appendChild(deleteAnimalBtn(deleteAnimalHandler));
  menu.appendChild(editAnimalProfile());
  return menu;
};

export default ownerControlMenu;
