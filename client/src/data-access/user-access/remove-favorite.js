import { performSpecificUpdateJson } from "../api-calls/calls.js";

/**
 * - @params  {userId} the id of the user where is going to be removed the favorite.
 * - @params  {animalId} the id of the animal to be removed from favorites.
 * - @returns an array with one element object that is the user registered.
 */

export const removeFavorite = async (userId = "", animalId) => {
  return performSpecificUpdateJson(`users/remove-favorite/${userId}`, {
    animalId,
  });
};
