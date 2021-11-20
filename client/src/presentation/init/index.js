import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import { burgerHandler } from "../handlers/burger-handler.js";

const buildPage = async () => {
  document.getElementById("menu").appendChild(await navbar());
  document.querySelector("footer").appendChild(footer());
  burgerHandler();
};
buildPage();
