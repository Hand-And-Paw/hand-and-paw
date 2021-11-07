import state from "../../data-access/state/state.js";

const removeFilterFindAnimal = () => {
  const form = document.getElementById("search-animal-form");
  form.reset();
  state.filterParameters = {};
};
export default removeFilterFindAnimal;
