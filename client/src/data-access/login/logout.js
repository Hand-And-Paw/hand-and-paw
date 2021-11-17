import { performFetch } from "../api-calls/calls.js";

export const logout = async () => {
  return performFetch(`logout`);
};
