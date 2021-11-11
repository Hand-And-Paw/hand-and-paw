import { performPostJson } from "../api-calls/calls.js";

/**
 * - @params  Object received as json includes (name, password, repeatPassword, email).
 * - @returns an array with one element object that is the user registered.
 */

export const contactUsPostEmail = async (newEmail = {}) => {
  return performPostJson(`emails/contact-us`, newEmail);
};
