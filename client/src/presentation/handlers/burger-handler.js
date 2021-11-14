export const burgerHandler = () => {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".pages-menu");
  const menuItems = document.querySelectorAll(".pages-menu-item");
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      menu.classList.remove("pages-menu_active");
    });
  });

  const menuCloseItem = document.querySelector(".pages-menu-close");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("pages-menu_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("pages-menu_active");
  });
};
