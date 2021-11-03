import callForm from "../../handlers/call-form.js";
import dropDownHandler from "../../handlers/dropdown-handler.js";
import logOut from "../../handlers/logout-handler.js";

export const navbar = () => {
  // Is the user logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  //////////////////////////////////
  // Create the navbar
  //////////////////////////////////
  const navbarEl = document.createElement("navbar");
  navbarEl.id = "top-navbar";

  // Add the logo
  const logo = createLogo();
  navbarEl.appendChild(logo);

  // Add the mainmenu
  const mainMenu = createMainMenu();
  navbarEl.appendChild(mainMenu);

  // Add additional login/logout/signup
  if (isLoggedIn) {
    const logoutMenu = createLogoutMenu();
    const profileDropDownMenu = createProfileDropDownMenu();
    logoutMenu.appendChild(profileDropDownMenu);
    navbarEl.appendChild(logoutMenu);
  } else {
    const loginSignupMenu = createLoginSignupMenu();
    navbarEl.appendChild(loginSignupMenu);
  }

  return navbarEl;
};

const createLogo = () => {
  const logo = document.createElement("div");
  logo.className = "logo";
  const anchor = document.createElement("a");
  anchor.href = "/index.html";
  const img = document.createElement("img");
  img.src = "/assets/images/ui/home/figma-images/Logo.png";
  anchor.appendChild(img);
  logo.appendChild(anchor);
  return logo;
};

const createMainMenu = () => {
  const mainMenu = document.createElement("ul");
  mainMenu.className = "pages-menu";
  mainMenu.innerHTML = `
        <li> <a href = "/src/presentation/components/pages/find-animal.html">Find an animal</a></li>
        <li> <a href = "/src/presentation/components/pages/add-animal.html">Register an animal</li>
        <li> <a href = "/src/presentation/components/pages/find-shelter.html">Find a shelter</a></li>
        <li> <a href = "/src/presentation/components/pages/about-adoption.html">About adoption</a></li>
      `;
  return mainMenu;
};

const createLoginSignupMenu = () => {
  const loginSignupMenu = document.createElement("div");
  loginSignupMenu.className = "account-menu";
  const button = document.createElement("button");
  button.id = "account-menu";
  button.innerText = "Log in / Sign up";
  // const avatar = document.createElement("div");
  // avatar.className = "avatar";
  // const avatarImage = document.createElement("img");
  // avatarImage.src = "/assets/icons/header_codicon_account.svg";
  // avatar.appendChild(avatarImage);
  loginSignupMenu.appendChild(button);
  // loginSignupMenu.appendChild(avatar);
  loginSignupMenu.addEventListener("click", callForm);
  return loginSignupMenu;
};

const createLogoutMenu = () => {
  const logoutMenu = document.createElement("div");
  logoutMenu.className = "account-menu";
  logoutMenu.id = "account-menu";
  // log out btn
  const logOutBtn = document.createElement("button");
  logOutBtn.innerText = "Log out";
  logOutBtn.id = "log-out";
  logoutMenu.appendChild(logOutBtn);
  // avatar
  const avatar = document.createElement("div");
  avatar.className = "avatar";
  const avatarImage = document.createElement("img");
  avatarImage.src = "/assets/icons/header_codicon_account.svg";
  avatarImage.id = "open-dropdown";
  avatar.appendChild(avatarImage);
  logoutMenu.appendChild(avatar);
  // handle click events
  logOutBtn.addEventListener("click", logOut);
  avatar.addEventListener("click", dropDownHandler);
  return logoutMenu;
};

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
      <img src="/assets/icons/dropdown menu/dropdownmenu_codicon_account.svg" alt="Animal"> 
  </div>
      `;
  return profileMenu;
};
