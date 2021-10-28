const dropDownHandler = (e) => {
  if ((e.target.id = "open-dropdown")) {
    document.querySelector(".dropdown-content").classList.toggle("active");
  }
};

export default dropDownHandler;
