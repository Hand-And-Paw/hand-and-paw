import { performFetch } from "../api-calls/calls.js";

/**
 * - @returns an array with elements objects that are the users.
 */

export const getUsers = async () => {
  return performFetch("users");
};
