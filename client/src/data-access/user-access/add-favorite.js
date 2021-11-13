import { performSpecificUpdateJson } from "../api-calls/calls.js";

/**
 * - @params  {userId} the id of the user where is going to be added the favorite.
 * - @params  {animalId} the id of the animal to be added as favorite.
 * - @returns an array with one element object that is the user registered.
 */

export const addFavorite = async (userId = "", animalId) => {
  return performSpecificUpdateJson(`users/add-favorite/${userId}`, {
    animalId,
  });
};
