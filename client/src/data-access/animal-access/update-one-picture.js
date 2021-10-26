import { performSpecificUpdate } from "../api-calls/calls.js";

/**
 *
 * - @params {animalId = ""} the id of the animal
 * - @params {newPictures = {}} Object received as multiform/data
 * - @returns message from the server.
 */

export const updateOnePicture = async (animalId = "", newPicture) => {
  return performSpecificUpdate(
    `animals/update-picture/${animalId}`,
    newPicture
  );
};
