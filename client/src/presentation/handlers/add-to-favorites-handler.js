import { addFavorite } from "../../data-access/user-access/add-favorite.js";
import { removeFavorite } from "../../data-access/user-access/remove-favorite.js";

const addToFavoritesHandler = async (event) => {
  event.stopPropagation();
  const { target } = event;
  console.log(target);
  //change front-end
  let imgFile = target.closest("#heart").src.split("/").pop();
  console.log(imgFile);
  if (imgFile === "heart.svg") {
    target.src = "/assets/icons/active-heart.svg";
  } else {
    target.src = "/assets/icons/heart.svg";
    //change DB
    const userId = localStorage.getItem("userId");
    const animalId = event.target.closest(".animal").id;
    console.log(animalId);
    target.classList.toggle("favorite");
    if ([...target.classList].includes("favorite")) {
      await addFavorite(userId, animalId);
      return;
    }
    await removeFavorite(userId, animalId);
  }
};
export default addToFavoritesHandler;
