const dropDownHandler = (e) => {
  if (e.target.id === "avatar-image" || e.target.id === "profile-picture") {
    document.querySelector(".dropdown-content").classList.toggle("active");
  }
};

export default dropDownHandler;
