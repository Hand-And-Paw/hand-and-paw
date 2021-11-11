import { performPostJson } from "../api-calls/calls.js";

/**
 * - @params  Object received asjson includes (name, password, repeatPassword, email).
 * - @returns an array with one element object that is the user registered.
 */

export const registerUser = async (newUser = {}) => {
  return performPostJson(`users/register`, newUser);
};
