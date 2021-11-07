import { performSpecificUpdateJson } from "../api-calls/calls.js";

/**
 *
 * - @param {animalId = ""}  the id of the animal.
 * - @param {statePictureId = ""}  the id of the picture.
 * - @param {stateIsPrincipal = ""}  Boolean value of picture.
 * - @returns message from the server.
 */

export const updateIsPrincipalPicture = async (
  animalId = "",
  statePictureId = "",
  stateIsPrincipal
) => {
  return performSpecificUpdateJson(`animals/update-isPrincipal/${animalId}`, {
    pictureId: statePictureId,
    isPrincipal: stateIsPrincipal,
  });
};
