import callForm from "../../handlers/call-form.js";
import state from "../../../data-access/state/state.js";

export const navbar = () => {
  const navbarEl = document.createElement("navbar");
  navbarEl.id = "main-navbar";
  // logo
  const logo = document.createElement("div");
  logo.className = "logo";
  const img = document.createElement("img");
  img.src = "./#";
  logo.appendChild(img);
  navbarEl.appendChild(logo);
  // menu
  const ul = document.createElement("ul");
  ul.className = "menu";
  // visitor or logged in user
  const isLoggedIn = state.isLoggedIn;

  if (isLoggedIn) {
    ul.innerHTML = `
    <li> <a href = "./src/presentation/components/pages/find-animal.html"> Find an animal</a></li>
    <li> <a href = ".src/presentation/components/pages/add-animal.html"> Register an animal</li>
    <li> <a href =  "./src/presentation/components/pages/find-shelter.html"> Find a shelter</a></li>
    <li> <a href =  "./src/presentation/components/pages/about-adoption.html"> About adoption</a></li>
    <li> <div id="account-menu"><button id="log-out"> Log out </button></div></li>
    `;
    const accountMenu = document.createElement("div");
    accountMenu.id = "account-menu";
    const button = document.createElement("button");
    button.innerText = "Account settings";
    accountMenu.appendChild(button);
    navbarEl.appendChild(accountMenu);

    navbarEl.addEventListener("click", () =>
      console.log("drop down menu handler")
    );
  } else {
    ul.innerHTML = `
  <li> <a href = "./src/presentation/components/pages/find-animal.html">Find an animal</a></li>
  <li> <button id="register-animal-btn"> Register animal</button></li>
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
