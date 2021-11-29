import { performPostJson } from "../api-calls/calls.js";

/**
 * - @params  Object that includes (name, password, repeatPassword, email).
 * - @returns an object that is the user registered.
 */

export const registerUser = async (newUser = {}) => {
  return performPostJson(`users/register`, newUser);
};
