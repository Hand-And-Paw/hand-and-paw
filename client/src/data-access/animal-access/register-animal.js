import { performPostFormData } from "../api-calls/calls.js";

/**
 * - @params  Object received as multiform/data following the structure of the data/schemas/register-animal.json
 * - @returns an array with one element object that is the user registered.
 */

export const registerAnimal = async (newAnimal = {}) => {
  return performPostFormData(`animals/register`, newAnimal);
};
