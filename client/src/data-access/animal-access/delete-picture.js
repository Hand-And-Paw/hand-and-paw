import { performSpecificUpdateJson } from "../api-calls/calls.js";

/**
 *
 * - @param {animalId = ""}  the id of the animal.
 * - @param {pictureId = ""}  the id of the picture.
 * - @returns message from the server.
 */

export const deletePicture = async (animalId = "", statePictureId = "") => {
  return performSpecificUpdateJson(`animals/delete-picture/${animalId}`, {
    pictureId: statePictureId,
  });
};
