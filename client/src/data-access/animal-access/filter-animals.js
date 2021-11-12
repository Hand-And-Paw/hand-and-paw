import { performPostJson } from "../api-calls/calls.js";

/**
 *
 * @param {object} searchParameters - An object with all the search parameters.
 * @returns An array of filtered animals.
 */

export const filterAnimals = async (searchParameters = {}) => {
  return performPostJson(`animals/filter-animals`, searchParameters);
};
