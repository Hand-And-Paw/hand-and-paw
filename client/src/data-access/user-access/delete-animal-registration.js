import { performSpecificUpdate } from "../api-calls/calls.js";

/**
 *
 * - @param {userId = ""}  the id of the user.
 * - @param {stateAnimalId = ""}  the id of the animal.
 * - @returns message from the server.
 */

export const deleteAnimalRegistration = async (
  userId = "",
  stateAnimalId = ""
) => {
  return performSpecificUpdate(`users/delete-animal/${userId}`, {
    animalId: stateAnimalId,
  });
};
