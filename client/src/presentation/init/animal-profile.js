import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";

const buildPage = () => {
  document.getElementById("menu").appendChild(navbar("top-navbar"));
  document.querySelector("footer").appendChild(footer("footer-navigation"));
};
buildPage();
