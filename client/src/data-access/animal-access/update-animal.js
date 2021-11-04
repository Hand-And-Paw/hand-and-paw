import { performUpdate } from "../api-calls/calls.js";

/**
 * - @params {animalId = ""} the id of the animal
 * - @params {newDta = {}} Object received as multiform/data
 * - @returns an array with one element object that is the user registered.
 */

export const updateAnimal = async (animalId, newData = {}) => {
  return performUpdate(`animals/update/${animalId}`, newData);
};
