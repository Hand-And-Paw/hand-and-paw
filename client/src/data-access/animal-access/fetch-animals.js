import { performFetch } from "../api-calls/calls.js";

export const fetchAnimals = async () => {
  return performFetch("publish-animal");
};
