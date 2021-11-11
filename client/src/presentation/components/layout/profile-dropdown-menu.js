const createProfileDropDownMenu = () => {
  const profileMenu = document.createElement("div");
  profileMenu.id = "navbar-dropdown";
  profileMenu.className = "dropdown-content";
  profileMenu.innerHTML = `
   <div id="show-favorites" class="profile-menu-item">
      <img class="profile-menu-image" src="/assets/icons/dropdown menu/akar-icons_heart.svg" alt="Favorites"> 
      <a href="/src/presentation/components/pages/favorites.html">Favorites</a>
   </div>
   <div id="show-my-animals" class="profile-menu-item">
      <img class="profile-menu-image" file-menu-image" src="/assets/icons/dropdown menu/ph_dog.svg" alt="Animal"> 
      <a href="/src/presentation/components/pages/my-animals.html">My animals</a>
   </div>
   <div id="edit-profile" class="profile-menu-item">
      <img class="profile-menu-image" src="/assets/icons/dropdown menu/dropdownmenu_codicon_account.svg" alt="Avatar"> 
      <a href="/src/presentation/components/pages/edit-user-profile.html">Edit profile</a>
   </div>
`;

  return profileMenu;
};

export default createProfileDropDownMenu;
