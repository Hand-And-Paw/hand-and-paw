import { performFetch } from "../api-calls/calls.js";

/**
 *
 * @returns An array of all animals
 */

export const fetchAnimals = async () => {
  return performFetch("animals");
};
