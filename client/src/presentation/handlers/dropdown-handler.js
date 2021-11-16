const dropDownHandler = (e) => {
  if (e.target.id === "avatar-image") {
    document.querySelector(".dropdown-content").classList.toggle("active");
  }
};

export default dropDownHandler;
