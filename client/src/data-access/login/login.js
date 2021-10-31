import { performPostJson } from "../api-calls/calls.js";
import state from "../state/state.js";

/**
 * - @returns an array with one element object that is the user registered.
 */

export const loginUser = async () => {
  return performPostJson(`login`, {
    email: state.email,
    password: state.password,
  });
};
