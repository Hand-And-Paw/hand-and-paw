/* eslint-disable no-param-reassign */
/* eslint-disable no-invalid-this */
/* eslint-disable func-names */
import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import { burgerHandler } from "../handlers/burger-handler.js";
import { faqListHandler } from "../handlers/faq-list.js";

const buildPage = async () => {
  document.getElementById("menu").appendChild(await navbar());
  document.querySelector("footer").appendChild(footer());
  // faqListHandler;
  faqListHandler();
  // add burger menu
  burgerHandler();
};
buildPage();
