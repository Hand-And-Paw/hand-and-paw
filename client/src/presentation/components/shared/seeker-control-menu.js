import addToFavoritesBtn from "../layout/add-to-favorites-button.js";

/**
 * @param {boolean} isFavorite if animal is added to favorites
 * @param {string} className  class name
 * @returns div with buttons for seeker user
 */

const seekerControlMenu = (className, isFavorite) => {
  const menu = document.createElement("div");
  menu.id = "seeker-menu";
  menu.className = className;
  menu.appendChild(addToFavoritesBtn(isFavorite));

  return menu;
};

export default seekerControlMenu;
