import { performDelete } from "../api-calls/calls.js";

/**
 * - @param  Id of the user.
 * - @returns a message.
 */

export const deleteUser = async (id = "") => {
  return performDelete(`users/delete/${id}`);
};
