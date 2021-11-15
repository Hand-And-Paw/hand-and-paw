import { filterAnimalsHandler } from "../../handlers/filter-animals-handler.js";
import removeFilterFindAnimal from "../../handlers/remove-filters-find-animal-handler.js";

// animal search section
const searchMenu = () => {
  const searchSection = document.createElement("section");
  searchSection.className = "animal-search-menu";
  // inner container
  const searchContainer = document.createElement("div");
  searchContainer.className = "container";
  // remove filters
  const filtersControl = document.createElement("div");
  filtersControl.className = "filters-control";
  const removeFiltersBtn = document.createElement("button");
  removeFiltersBtn.id = "remove-filters";
  removeFiltersBtn.className = "button link-button";
  removeFiltersBtn.innerText = "Remove filters";
  removeFiltersBtn.addEventListener("click", removeFilterFindAnimal);
  filtersControl.appendChild(removeFiltersBtn);
  searchContainer.appendChild(filtersControl);
  // search menu
  const searchDropDownMenu = document.createElement("div");
  searchDropDownMenu.className = "search-dropdown-menu";
  searchDropDownMenu.innerHTML = `
  <form action="#" id="search-animal-form" class="input-select">
  <input type="text" name="type" placeholder="All animals" />
  <!-- <select name="breed"> -->
  <input type="text" name="breed" placeholder="All breeds" />
  <!-- add options from DB -->
  <!-- </select> -->

  <select name="age">
    <option value="all">All ages</option>
    <option value="1">1 year</option>
    <option value="2">2 years</option>
    <option value="3">3 years</option>
    <option value="4">4 years</option>
    <option value="5">5 years</option>
    <option value="6">6 years</option>
    <option value="7">7 years</option>
    <option value="8">8 years</option>
    <option value="9">9 years</option>
    <option value="10">10 years</option>
    <option value="11">Greater than 10</option>
    <!-- add options from DB -->
  </select>

  <select name="gender">
    <option value="all">All genders</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <!-- add options from DB -->
  </select>

  <select name="character">
    <option value="all">All characters</option>
    <option value="happy">Happy</option>
    <option value="sympathetic">Sympathetic</option>
    <option value="angry">Angry</option>
    <option value="jealousy">Jealousy</option>
    <option value="fear">Fear</option>
  </select>
  <select name="province">
    <option value="all">All provinces</option>
    <option value="brussels">Brussels</option>
    <option value="antwerp">Antwerp</option>
    <option value="east-flanders">East-Flanders</option>
    <option value="flemish-Brabant">Flemish Brabant</option>
    <option value="limburg">Limburg</option>
    <option value="west-flanders">West-Flanders</option>
    <option value="hainaut">Hainaut</option>
    <option value="liege">Liege</option>
    <option value="luxembourg">luxembourg</option>
    <option value="namur">Namur</option>
    <option value="Wallon-Brabant">Wallon-Brabant</option>
    <!-- add options from DB -->
  </select>
</form>`;
  searchContainer.appendChild(searchDropDownMenu);
  // submit button
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.id = "submit-animal-search-form";
  submitBtn.className = "button regular-button";
  submitBtn.innerHTML = "Search";
  submitBtn.addEventListener("click", filterAnimalsHandler);
  searchContainer.appendChild(submitBtn);
  // section appends container
  searchSection.appendChild(searchContainer);
  return searchSection;
};

export default searchMenu;
