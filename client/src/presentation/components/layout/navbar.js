import callForm from "../../handlers/call-form.js";

export const navbar = () => {
  const navbarEl = document.createElement("navbar");
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

  const isLoggedIn = false;

  if (isLoggedIn) {
    ul.innerHTML = `
    <li> <a href = "./src/presentation/components/pages/find-animal.html"> Find an animal</a></li>
    <li> <a href = ".src/presentation/components/pages/add-animal.html"> Register an animal</li>
    <li> <a href =  "./src/presentation/components/pages/find-shelter.html"> Find a shelter</a></li>
    <li> <a href =  "./src/presentation/components/pages/about-adoption.html"> About adoption</a></li>
    <li> <button id="log-out"> Log out </button></li>
    `;
    navbarEl.addEventListener("click", () =>
      console.log("drop down menu handler")
    );
  } else {
    ul.innerHTML = `
  <li> <a href = "./src/presentation/components/pages/find-animal.html">Find an animal</a></li>
  <li> <button id="register-animal-btn"> Register animal</button></li>
  <li> <a href =  "./src/presentation/components/pages/find-shelter.html"> Find a shelter</a></li>
  <li> <a href =  "./src/presentation/components/pages/about-adoption.html"> About adoption</a></li>
  <li> <button id="log-in"> Log In/Sign Up</button></li>
  `;
    navbarEl.addEventListener("click", callForm);
  }
  navbarEl.appendChild(ul);

  return navbarEl;
};
