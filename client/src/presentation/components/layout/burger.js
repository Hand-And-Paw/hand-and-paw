const burgerComponent = () => {
  const headerBurger = document.createElement("div");
  headerBurger.classList.add("header_burger", "burger");
  headerBurger.innerHTML = `
            <span class="burger_line burger_line_first"></span>
            <span class="burger_line burger_line_second"></span>
            <span class="burger_line burger_line_third"></span>
           `;
  return headerBurger;
};
export default burgerComponent;
