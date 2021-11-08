import { performPostJson } from "../api-calls/calls.js";

/**
 * - @params  Object received as json includes (name, phone, email, subject, id).
 * - @returns an array with one element object that is the user registered.
 */

export const contactGiverPostEmail = async (newEmail = {}) => {
  return performPostJson(`emails/contact-giver`, newEmail);
};
