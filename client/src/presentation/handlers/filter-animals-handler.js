/* eslint-disable no-continue */
import { filterAnimals } from "../../data-access/animal-access/filter-animals.js";
import animalSearchResults from "../components/shared/animal-search-results.js";
import state from "../../data-access/state/state.js";
import { getAnimals } from "../../data-access/animal-access/get-animals.js";

export const filterAnimalsHandler = async (event) => {
  event.preventDefault();
  const form = document.getElementById("search-animal-form");
  const formData = new FormData(form);

  const parametersObj = {};
  for (const key of formData.keys()) {
    if (key === "breed" && formData.get(key) === "") {
      continue;
    }
    if (key === "type" && formData.get(key) === "") {
      continue;
    }
    if (formData.get(key) === "all") {
      continue;
    }
    if (key === "type") {
      parametersObj[key] = formData.get(key).toLowerCase().trim();
      continue;
    }
    if (key === "breed") {
      parametersObj[key] = formData.get(key).toLowerCase().trim();
      continue;
    }

    parametersObj[key] = formData.get(key);
  }
  if (Object.keys(parametersObj).length === 0) {
    const animals = await getAnimals(parametersObj);
    const animalList = document.getElementById("animals-list");
    animalList.innerHTML = "";
    animalList.appendChild(animalSearchResults(animals));
    return;
  }
  state.filterParameters = parametersObj;
  const filter = await filterAnimals(parametersObj);
  const animalList = document.getElementById("animals-list");
  animalList.innerHTML = "";
  animalList.appendChild(animalSearchResults(filter));
};
