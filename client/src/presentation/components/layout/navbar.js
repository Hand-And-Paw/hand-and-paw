import callForm from "../../handlers/call-form.js";
import dropDownHandler from "../../handlers/dropdown-handler.js";
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
  // const isLoggedIn = localStorage.getItem("isLoggedIn");
  const isLoggedIn = true;

  if (isLoggedIn) {
    ul.innerHTML = `
    <li> <a href = "./src/presentation/components/pages/find-animal.html"> Find an animal</a></li>
    <li> <a href = ".src/presentation/components/pages/add-animal.html"> Register an animal</li>
    <li> <a href =  "./src/presentation/components/pages/find-shelter.html"> Find a shelter</a></li>
    <li> <a href =  "./src/presentation/components/pages/about-adoption.html"> About adoption</a></li>
    
    `;
    const accountMenu = document.createElement("div");
    accountMenu.id = "account-menu";
    const logOut = document.createElement("button");
    logOut.innerText = "Log out";
    logOut.id = "log out";
    accountMenu.appendChild(logOut);
    const profileMenu = document.createElement("div");
    profileMenu.className = "dropdown";
    accountMenu.appendChild(profileMenu);
    const openMenu = document.createElement("button");
    openMenu.innerText = "Menu";
    openMenu.id = "open-dropdown";
    const dropDownContent = document.createElement("div");
    dropDownContent.className = "dropdown-menu";
    dropDownContent.innerText = "I dropped!";
    profileMenu.appendChild(dropDownContent);
    profileMenu.appendChild(openMenu);
    navbarEl.appendChild(accountMenu);

    navbarEl.addEventListener("click", dropDownHandler);
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
