/* eslint-disable no-undefined */
import state from "../../data-access/state/state.js";
import { navbar } from "../components/layout/navbar.js";

const logOut = () => {
  // delete token, change isLoggedIn, change navbar
  state.token = undefined;
  state.userId = undefined;
  state.isLoggedIn = false;
  const header = document.getElementById("menu");
  const navbarEl = document.getElementById("main-navbar");
  header.removeChild(navbarEl);
  header.appendChild(navbar());
};

export default logOut;
