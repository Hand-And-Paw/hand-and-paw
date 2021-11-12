import state from "../../data-access/state/state.js";
import { filterAnimalsHandler } from "./filter-animals-handler.js";

const removeFilterFindAnimal = () => {
  const form = document.getElementById("search-animal-form");
  form.reset();
  state.filterParameters = {};
  filterAnimalsHandler();
};
export default removeFilterFindAnimal;
