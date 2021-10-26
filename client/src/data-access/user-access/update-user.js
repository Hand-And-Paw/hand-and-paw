import { performUpdate } from "../api-calls/calls.js";

/**
 * - @params  {updateData = {}}  Object received as multiform/data
 * - @returns an array with one element object that is the user registered.
 */

export const updateUser = async (userId = "", updateData = {}) => {
  return performUpdate(`users/update/${userId}`, updateData);
};