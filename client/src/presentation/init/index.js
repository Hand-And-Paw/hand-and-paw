import { navbar } from "../components/layout/navbar.js";

const buildPage = () => {
  document.querySelector(".container").appendChild(navbar());
  console.log("Hello!");
};
buildPage();
