const createProfileDropDownMenu = () => {
  const profileMenu = document.createElement("div");
  profileMenu.className = "dropdown-content";
  profileMenu.innerHTML = `
  <div>
  <a href="/src/presentation/components/pages/favorites.html">Favorites</a><br>
  <img src="/assets/icons/dropdown menu/akar-icons_heart.svg" alt="Favorites"> 
</div>
<div>
  <a href="/src/presentation/components/pages/my-animals.html">My animals</a><br>
  <img src="/assets/icons/dropdown menu/ph_dog.svg" alt="Animal"> 
</div>
<div>
  <a href="/src/presentation/components/pages/edit-user-profile.html">Edit profile</a><br>
  <img src="/assets/icons/dropdown menu/dropdownmenu_codicon_account.svg" alt="Avatar"> 
</div>
`;

  return profileMenu;
};

export default createProfileDropDownMenu;
