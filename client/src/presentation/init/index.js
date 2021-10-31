import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";

const buildPage = () => {
  document.getElementById("menu").appendChild(navbar("top-navbar"));
  document.querySelector("footer").appendChild(footer("footer-navigation"));
  console.log("Hello! This is index page JS file.");
  const footerNavbar = document.getElementById("footer-navigation");
  const login = document.querySelectorAll("#account-menu")[1];
  footerNavbar.removeChild(login);
};
buildPage();
