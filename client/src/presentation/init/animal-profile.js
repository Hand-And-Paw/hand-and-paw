import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";

const buildPage = async () => {
  document.getElementById("menu").appendChild(await navbar("top-navbar"));
  document.querySelector("footer").appendChild(footer("footer-navigation"));
};
buildPage();
