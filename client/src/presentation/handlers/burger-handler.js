export const burgerHandler = () => {
  const menu = document.querySelector(".responsive-menu");
  const menuItems = document.querySelectorAll(".responsive-menu-item");
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      menu.classList.remove("responsive-menu_active");
    });
  });

  const burgerItem = document.querySelector(".burger");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("responsive-menu_active");
  });

  const menuCloseItem = document.querySelector(".responsive-menu-close");
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("responsive-menu_active");
  });  
};
