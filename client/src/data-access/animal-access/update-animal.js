import { performUpdate } from "../api-calls/calls.js";

/**
 * - @params {animalId = ""} the id of the animal
 * - @params {newDta = {}} Object received as multiform/data
 * - @returns an object with message property.
 */

export const updateAnimal = async (animalId, newData = {}) => {
  return performUpdate(`animals/update/${animalId}`, newData);
};
