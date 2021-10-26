import { performSpecificUpdate } from "../api-calls/calls.js";

/**
 *
 * - @params {animalId = ""} the id of the animal
 * - @params {pictures = {}} Object received as multiform/data
 * - @returns message from the server.
 */

export const uploadPictures = async (animalId = "", pictures) => {
  return performSpecificUpdate(`animals/upload-pictures/${animalId}`, pictures);
};
