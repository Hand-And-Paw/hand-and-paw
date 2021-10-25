import { navbar } from "../components/layout/navbar.js";

const buildPage = () => {
  document.getElementById("menu").appendChild(navbar());

  console.log("Hello!");
};
buildPage();
