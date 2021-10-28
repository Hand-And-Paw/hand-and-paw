import callForm from "../../handlers/call-form.js";
import dropDownHandler from "../../handlers/dropdown-handler.js";
import logOut from "../../handlers/logout-handler.js";

export const navbar = () => {
  const navbarEl = document.createElement("navbar");
  navbarEl.id = "top-navbar";
  // logo
  const logo = document.createElement("div");
  logo.className = "logo";
  const img = document.createElement("img");
  img.src = "./assets/images/ui/home/figma-images/Logo.png";
  logo.appendChild(img);
  navbarEl.appendChild(logo);
  // menu
  const ul = document.createElement("ul");
  ul.className = "pages-menu";
  // visitor or logged in user
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn) {
    ul.innerHTML = `
    <li> <a href = "./src/presentation/components/pages/find-animal.html"> Find an animal</a></li>
    <li> <a href = ".src/presentation/components/pages/add-animal.html"> Register an animal</li>
    <li> <a href =  "./src/presentation/components/pages/find-shelter.html"> Find a shelter</a></li>
    <li> <a href =  "./src/presentation/components/pages/about-adoption.html"> About adoption</a></li>
    
    `;
    //dropdown profile menu
    const accountMenu = document.createElement("div");
    accountMenu.id = "account-menu";
    //log out btn
    const logOutBtn = document.createElement("button");
    logOutBtn.innerText = "Log out";
    logOutBtn.id = "log-out";
    accountMenu.appendChild(logOutBtn);
    //profile menu
    //avatar
    const profileMenu = document.createElement("div");
    profileMenu.className = "avatar";
    const avatar = document.createElement("img");
    avatar.src = "#";
    avatar.id = "open-dropdown";
    profileMenu.appendChild(avatar);
    //dropdown
    //dropdown menu content
    const dropDownMenu = document.createElement("div");
    dropDownMenu.className = "dropdown-content";
    dropDownMenu.innerHTML = `
    <a href="./src/presentation/components/pages/favorites.html">Favorites</a><br>
    <a href="./src/presentation/components/pages/my-animals.html">My animals</a><br>
    <a href="./src/presentation/components/pages/edit-user-profile.html">Edit profile</a><br>
    `;

    profileMenu.appendChild(dropDownMenu);
    accountMenu.appendChild(profileMenu);
    navbarEl.appendChild(accountMenu);
    navbarEl.addEventListener("click", dropDownHandler);
    navbarEl.addEventListener("click", logOut);
  } else {
    ul.innerHTML = `
  <li> <a href = "./src/presentation/components/pages/find-animal.html">Find an animal</a></li>
  <li> <button id="register-animal-btn"> Register an animal</button></li>
  <li> <a href =  "./src/presentation/components/pages/find-shelter.html"> Find a shelter</a></li>
  <li> <a href =  "./src/presentation/components/pages/about-adoption.html"> About adoption</a></li>
  `;
    const accountMenu = document.createElement("div");
    accountMenu.id = "account-menu";
    const button = document.createElement("button");
    button.id = "account-menu";
    button.innerText = "Log in/Sign up";
    accountMenu.appendChild(button);
    navbarEl.appendChild(accountMenu);

    navbarEl.addEventListener("click", callForm);
  }
  navbarEl.appendChild(ul);

  return navbarEl;
};
