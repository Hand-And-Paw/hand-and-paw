import { performFetch } from "../api-calls/calls.js";

/**
 * - @param  Id of the user.
 * - @returns an array with one element object that is the user.
 */

export const getUser = async (id = "") => {
  return performFetch(`users/${id}`);
};
