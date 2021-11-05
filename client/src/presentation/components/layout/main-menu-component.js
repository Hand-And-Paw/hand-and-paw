const mainMenuComponent = (props) => {
  // Init properties
  let className = props?.className || "pages-menu";
  // Create component
  const mainMenu = document.createElement("div");
  mainMenu.className = className;
  mainMenu.innerHTML = `
        <div><a href = "/src/presentation/components/pages/find-animal.html">Find an animal</a></div>
        <div><a href = "/src/presentation/components/pages/add-animal.html">Register an animal</a></div>
        <div><a href = "/src/presentation/components/pages/find-shelter.html">Find a shelter</a></div>
        <div><a href = "/src/presentation/components/pages/about-adoption.html">About adoption</a></div>
      `;
  return mainMenu;
};

export default mainMenuComponent;
