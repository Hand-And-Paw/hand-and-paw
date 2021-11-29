import { performUpdate } from "../api-calls/calls.js";

/**
 * - @params  {updateData = {}}  Object received as multiform/data
 * - @params  {userId = ''} String user ID
 * - @returns an array with one element object that is the user updated
 */

export const updateUser = async (userId = "", updateData = {}) => {
  return performUpdate(`users/update/${userId}`, updateData);
};
