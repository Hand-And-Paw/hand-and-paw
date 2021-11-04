import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
// import { animalCard } from "../components/shared/animal-card.js";

const buildPage = () => {
  document.getElementById("menu").appendChild(navbar("top-navbar"));
  document.querySelector("footer").appendChild(footer("footer-navigation"));
  // document.querySelector(".animal-info").appendChild(animalCard());
};
buildPage();
