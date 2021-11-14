import openModal from "../../handlers/call-login-form.js";
import { loginForm } from "../shared/login-form.js";

const mainMenuComponent = (props) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
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

  return mainMenu;
};

export default mainMenuComponent;
