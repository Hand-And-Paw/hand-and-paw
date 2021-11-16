import { performFetch } from "../api-calls/calls.js";

/**
 * - @returns an array with one element object that is the user registered.
 */

export const logout = async () => {
  return performFetch(`logout`);
};
