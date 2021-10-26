import { performDelete } from "../api-calls/calls.js";

/**
 * - @param  Id of the animal.
 * - @returns a message.
 */

export const deleteAnimal = async (id = "") => {
  return performDelete(`animals/delete/${id}`);
};
