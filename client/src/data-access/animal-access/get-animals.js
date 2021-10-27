import { performFetch } from "../api-calls/calls.js";

/**
 * - @returns an array with elements objects that are the animals.
 */

export const getAnimals = async () => {
  return performFetch("animals");
};
