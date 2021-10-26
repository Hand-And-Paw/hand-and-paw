import { navbar } from "../components/layout/navbar.js";

const buildPage = () => {
  document.getElementById("menu").appendChild(navbar());
  console.log("Hello! This is index page JS file.");
};
buildPage();
