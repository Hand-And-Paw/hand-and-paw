import openModal from "../../handlers/call-login-form.js";
import { loginForm } from "../shared/login-form.js";
import logOut from "../../handlers/logout-handler.js";


const responsiveMenuComponent = (props) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
const responsiveMenu = document.createElement("div");
responsiveMenu.classList.add('responsive-menu');

// Find animal
const findAnimalDiv = document.createElement("div");
findAnimalDiv.className="responsive-menu_item";
const findAnimalAnchor = document.createElement("a");
findAnimalAnchor.className="header_link";
findAnimalAnchor.href = "/src/presentation/components/pages/find-animal.html";
findAnimalAnchor.innerHTML = "Find an animal";
findAnimalDiv.appendChild(findAnimalAnchor);
responsiveMenu.appendChild(findAnimalDiv);
// Register animal
const registerAnimalDiv = document.createElement("div");
registerAnimalDiv.className="responsive-menu_item";
const registerAnimalAnchor = document.createElement("a");
registerAnimalAnchor.className="header_link";
registerAnimalAnchor.id = "register-animal-navBar";
registerAnimalAnchor.href =
  "/src/presentation/components/pages/add-animal.html";
registerAnimalAnchor.innerHTML = "Register an animal";
if (!isLoggedIn) {
  registerAnimalAnchor.href = "#";
  registerAnimalDiv.addEventListener("click", () =>
    openModal(loginForm("modal-form"))
  );
}
registerAnimalDiv.appendChild(registerAnimalAnchor);
responsiveMenu.appendChild(registerAnimalDiv);
// About adoption
const aboutAdoptionDiv = document.createElement("div");
aboutAdoptionDiv.className="responsive-menu_item";
const aboutAdoptionAnchor = document.createElement("a");
aboutAdoptionAnchor.className="header_link";
aboutAdoptionAnchor.href =
    "/src/presentation/components/pages/about-adoption.html";
aboutAdoptionAnchor.innerHTML = "About adoption";
aboutAdoptionDiv.appendChild(aboutAdoptionAnchor);
responsiveMenu.appendChild(aboutAdoptionDiv);

// Logout
if (isLoggedIn) {
  const logoutDiv = document.createElement("div");
  logoutDiv.className="responsive-menu_item";
  const logoutLink = document.createElement("a");
  logoutLink.id = 'log-out';
  logoutLink.href =
  "/index.html";
  logoutLink.className="header_link";
  logoutLink.innerHTML = "Logout";
  logoutLink.addEventListener("click", async () => {logOut(event)} );
  logoutDiv.appendChild(logoutLink);
  responsiveMenu.appendChild(logoutDiv);
} else {
  const loginDiv = document.createElement("div");
  loginDiv.className="responsive-menu_item";
  const loginLink = document.createElement("a");
  loginLink.id = 'log-in';
/*   loginLink.href =
  "/index.html";
 */  loginLink.className="header_link";
  loginLink.innerHTML = "Login";
  loginLink.addEventListener("click", () => {openModal(loginForm("modal-form"))} );
  loginDiv.appendChild(loginLink);
  responsiveMenu.appendChild(loginDiv);
}


const responsiveMenuClose = document.createElement("div");
responsiveMenuClose.classList.add('responsive-menu-close');
responsiveMenuClose.innerHTML = `
  <span class="pages-menu-close-line"></span>
  <span class="pages-menu-close-line"></span>
`;

responsiveMenu.appendChild(responsiveMenuClose);

/* 
  // Init properties
  let className = props?.className || "pages-menu";
  // Create component
  const mainMenu = document.createElement("div");
  mainMenu.className = className;
  // find animal
  const findAnimalDiv = document.createElement("div");
  findAnimalDiv.className="pages-menu-item"
  const findAnimalAnchor = document.createElement("a");
  findAnimalAnchor.href = "/src/presentation/components/pages/find-animal.html";
  findAnimalAnchor.innerHTML = "Find an animal";
  findAnimalDiv.appendChild(findAnimalAnchor);
  mainMenu.appendChild(findAnimalDiv);
  // register animal
  const registerAnimalDiv = document.createElement("div");
  const registerAnimalAnchor = document.createElement("a");
  registerAnimalAnchor.id = "register-animal-navBar";
  registerAnimalAnchor.href =
    "/src/presentation/components/pages/add-animal.html";
  registerAnimalAnchor.innerHTML = "Register an animal";
  if (!isLoggedIn) {
    registerAnimalAnchor.href = "#";
    registerAnimalDiv.addEventListener("click", () =>
      openModal(loginForm("modal-form"))
    );
  }
  registerAnimalDiv.appendChild(registerAnimalAnchor);
  mainMenu.appendChild(registerAnimalDiv);
  // find shelter
  // const findShelterDiv = document.createElement("div");
  // const findShelterAnchor = document.createElement("a");
  // findShelterAnchor.href =
  //   "/src/presentation/components/pages/find-shelter.html";
  // findShelterAnchor.innerHTML = "Find a shelter";
  // findShelterDiv.appendChild(findShelterAnchor);
  // mainMenu.appendChild(findShelterDiv);
  // about adoption
  const aboutAdoptionDiv = document.createElement("div");
  const aboutAdoptionAnchor = document.createElement("a");
  aboutAdoptionAnchor.href =
    "/src/presentation/components/pages/about-adoption.html";
  aboutAdoptionAnchor.innerHTML = "About adoption";
  aboutAdoptionDiv.appendChild(aboutAdoptionAnchor);
  mainMenu.appendChild(aboutAdoptionDiv);
 */
  return responsiveMenu;
};

export default responsiveMenuComponent;
