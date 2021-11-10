import { performSpecificUpdateJson } from "../api-calls/calls.js";

/**
 *
 * - @param {userId = ""}  the id of the user.
 * - @param {stateAnimalId = ""}  the id of the animal.
 * - @returns message from the server.
 */

const deleteAnimalRegistration = async (userId = "", stateAnimalId = "") => {
  return performSpecificUpdateJson(`users/delete-animal/${userId}`, {
    animalId: stateAnimalId,
  });
};

export default deleteAnimalRegistration;
