const dropDownHandler = (e) => {
  if ((e.target.id = "open-dropdown")) {
    console.log(111);
    e.target.parentNode.classList.toggle("active");
  }
};

export default dropDownHandler;
