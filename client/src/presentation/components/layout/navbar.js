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
    <li> <a href = "#"> Find an animal</a></li>
    <li> <button class="register-animal"> Register animal</button></li>
    <li> <a href = "#"> Find a shelter</a></li>
    <li> <a href = "#"> About adoption</a></li>
    <li> <button class="log-in"> Sign Out</button></li>
    `;
  } else {
    ul.innerHTML = `
  <li> <a href = "#"> Find an animal</a></li>
  <li> <a href = "#"> Find a shelter</a></li>
  <li> <a href = "#"> About adoption</a></li>
  <li> <button class="log-in"> Log In/Sign Up</button></li>
  `;
  }

  // li.className = item.replaceAll(" ", "-").toLowerCase();

  navbarEl.appendChild(ul);
  return navbarEl;
};

const item = document.getElementsByClassName("find-an-animal");
