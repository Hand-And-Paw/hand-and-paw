/* eslint-disable no-await-in-loop */
import { getAnimal } from "../data-access/animal-access/get-animal.js";
import { getUser } from "../data-access/user-access/get-user.js";

/**
 * - @returns an array of animals added by current user
 */

const getAddedAnimals = async () => {
  const currentUser = await getUser(localStorage.getItem("userId"));
  const addedAnimalsIds = currentUser[0].registeredAnimals;

  const addedAnimals = [];
  for (let i = 0; i < addedAnimalsIds.length; i++) {
    let animal = await getAnimal(addedAnimalsIds[i]);
    addedAnimals.push(animal[0]);
  }
  return addedAnimals;
};

export default getAddedAnimals;
