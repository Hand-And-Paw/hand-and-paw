import { performFetch } from "../api-calls/calls.js";

/**
 * - @returns an array of objects that are the users.
 */

export const getUsers = async () => {
  return performFetch("users");
};
