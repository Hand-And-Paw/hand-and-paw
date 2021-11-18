const closeDropdown = () => {
  const dropdown = document.querySelector(".dropdown-content");
  setTimeout(() => {
    dropdown.classList.remove("active");
  }, 600);
};

export default closeDropdown;
