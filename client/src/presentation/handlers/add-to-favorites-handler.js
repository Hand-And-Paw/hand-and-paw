const addToFavoritesHandler = (e) => {
  e.stopPropagation();
  e.target.classList.toggle("active");
};

export default addToFavoritesHandler;
