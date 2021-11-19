import { addFavorite } from "../../data-access/user-access/add-favorite.js";
import { removeFavorite } from "../../data-access/user-access/remove-favorite.js";
import openModal from "./call-login-form.js";
import { loginForm } from "../components/shared/login-form.js";

const addToFavoritesHandler = async (event) => {
  event.stopPropagation();
  if (!sessionStorage.getItem("isLoggedIn")) {
    openModal(loginForm("modal-form"));
    return;
  }
  const { target } = event;
  // change front-end
  const imgFile = target.closest("#heart").src.split("/").pop();
  const userId = localStorage.getItem("userId");
  const animalId = event.target.closest(".animal").id;

  if (imgFile === "heart.svg") {
    target.src = "/assets/icons/active-heart.svg";
    // change DB
    target.classList.toggle("favorite");
    if ([...target.classList].includes("favorite")) {
      await addFavorite(userId, animalId);
    }
  } else {
    target.src = "/assets/icons/heart.svg";

    await removeFavorite(userId, animalId);
  }
};
export default addToFavoritesHandler;
