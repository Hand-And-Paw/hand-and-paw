import { performDelete } from "../api-calls/calls.js";

/**
 * - @param  Id of the user.
 * - @returns an object with `message` as property and the value is a success message with the id of the user removed.
 */

export const deleteUser = async (id = "") => {
  return performDelete(`users/delete/${id}`);
};
