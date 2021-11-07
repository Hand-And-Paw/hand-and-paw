import { performFetch } from "../api-calls/calls.js";

/**
 * - @param  Id of the animal.
 * - @returns an array with one element object that is the animal.
 */

export const getAnimal = async (id = "") => {
  return performFetch(`animals/${id}`);
};
