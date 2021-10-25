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
  const isLoggedIn = true;

  if (isLoggedIn) {
    ul.innerHTML = `
    <li> <a href = "./src/presentation/components/pages/find-animal.html"> Find an animal</a></li>
    <li> <button id="register-animal-btn"> Register animal</button></li>
    <li> <a href =  "./src/presentation/components/pages/find-shelter.html"> Find a shelter</a></li>
    <li> <a href =  "./src/presentation/components/pages/about-adoption.html"> About adoption</a></li>
    <li> <button class="log-in"> Sign Out</button></li>
    `;
  } else {
    ul.innerHTML = `
  <li> <a href = "./src/presentation/components/pages/find-animal.html">Find an animal</a></li>
  <li> <a href =  "./src/presentation/components/pages/find-shelter.html"> Find a shelter</a></li>
  <li> <a href =  "./src/presentation/components/pages/about-adoption.html"> About adoption</a></li>
  <li> <button class="log-in"> Log In/Sign Up</button></li>
  `;
  }
  navbarEl.appendChild(ul);
  navbarEl.addEventListener("click", (e) =>
    console.log("I am working Navbar listener.")
  );
  return navbarEl;
};
