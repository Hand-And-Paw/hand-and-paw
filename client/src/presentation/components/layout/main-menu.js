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

export default createMainMenu;
