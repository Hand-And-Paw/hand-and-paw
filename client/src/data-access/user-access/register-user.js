import { performPostFormData } from "../api-calls/calls.js";

/**
 * - @params  Object received as multiform/data includes (name, password, repeatPassword, email).
 * - @returns an array with one element object that is the user registered.
 */

export const registerUser = async (newUser = {}) => {
  return performPostFormData(`users/register`, newUser);
};
