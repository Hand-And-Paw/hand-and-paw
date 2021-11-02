const createProfileDropDownMenu = () => {
  const profileMenu = document.createElement("div");
  profileMenu.className = "dropdown-content";
  profileMenu.innerHTML = `
  <a href="/src/presentation/components/pages/favorites.html">Favorites</a><br>
  <a href="/src/presentation/components/pages/my-animals.html">My animals</a><br>
  <a href="/src/presentation/components/pages/edit-user-profile.html">Edit profile</a><br>
  `;
  return profileMenu;
};

export default createProfileDropDownMenu;
