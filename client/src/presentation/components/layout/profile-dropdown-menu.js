const createProfileDropDownMenu = () => {
  const profileMenu = document.createElement("div");
  profileMenu.id = "navbar-dropdown";
  profileMenu.className = "dropdown-content";
  profileMenu.innerHTML = `
  <div id="show-favorites" class="dropdown-menu-item">
  <a href="/src/presentation/components/pages/favorites.html">Favorites</a>
  <img src="/assets/icons/dropdown menu/akar-icons_heart.svg" alt="Favorites"> 
</div>
<div id="show-my-animals" class="dropdown-menu-item">
  <a href="/src/presentation/components/pages/my-animals.html">My animals</a>
  <img src="/assets/icons/dropdown menu/ph_dog.svg" alt="Animal"> 
</div>
<div id="edit-profile" class="dropdown-menu-item">
  <a href="/src/presentation/components/pages/edit-user-profile.html">Edit profile</a>
  <img src="/assets/icons/dropdown menu/dropdownmenu_codicon_account.svg" alt="Avatar"> 
</div>
`;

  return profileMenu;
};

export default createProfileDropDownMenu;
