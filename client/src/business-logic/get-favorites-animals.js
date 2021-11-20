/* eslint-disable no-underscore-dangle */
/* eslint-disable no-await-in-loop */
import { getAnimal } from "../data-access/animal-access/get-animal.js";
import { getUser } from "../data-access/user-access/get-user.js";
import { removeFavorite } from "../data-access/user-access/remove-favorite.js";

/**
 * - @returns an array of animals added by current user
 */

const getFavoritesAnimals = async () => {
  const currentUser = await getUser(localStorage.getItem("userId"));
  const favoriteAnimalsIds = currentUser[0].favorites;

  const addedAnimals = [];
  for await (const animalId of favoriteAnimalsIds) {
    const animal = await getAnimal(animalId);
    if (animal.length === 0) {
      await removeFavorite(currentUser[0]._id, animalId);
    }
    addedAnimals.push(animal[0]);
  }
  return addedAnimals;
};

export default getFavoritesAnimals;
