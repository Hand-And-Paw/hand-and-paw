import closeDropdown from "./profile-dropdown-menu-close.js";

const dropDownHandler = (e) => {
  if (e.target.id === "avatar-image" || e.target.id === "profile-picture") {
    const dropdown = document.querySelector(".dropdown-content");
    dropdown.classList.toggle("active");
    const accountMenu = document.getElementById("account-menu");
    accountMenu.addEventListener("mouseleave", closeDropdown);
  }
};

export default dropDownHandler;
