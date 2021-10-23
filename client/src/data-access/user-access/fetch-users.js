import { performFetch } from "../api-calls/calls.js";

export const fetchUsers = async () => {
  return performFetch("user-subscriber");
};
