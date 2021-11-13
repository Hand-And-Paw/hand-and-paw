/* eslint-disable no-await-in-loop */
import { getAnimal } from "../data-access/animal-access/get-animal.js";
import { getUser } from "../data-access/user-access/get-user.js";

/**
 * - @returns an array of animals added by current user
 */

const getFavoritesAnimals = async () => {
  const currentUser = await getUser(localStorage.getItem("userId"));
  const favoriteAnimalsIds = currentUser[0].favorites;

  const addedAnimals = [];
  for (let i = 0; i < favoriteAnimalsIds.length; i++) {
    let animal = await getAnimal(favoriteAnimalsIds[i]);
    addedAnimals.push(animal[0]);
  }
  return addedAnimals;
};

export default getFavoritesAnimals;
