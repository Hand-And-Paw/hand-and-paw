/* eslint-disable no-undefined */
import state from "../../data-access/state/state.js";
import { navbar } from "../components/layout/navbar.js";

const logOut = async (event) => {
  if (event.target.id === "log-out") {
    // delete token, change isLoggedIn, change navbar
    state.token = undefined;
    state.userId = undefined;
    state.isLoggedIn = false;
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("isLoggedIn");
    const header = document.getElementById("menu");
    const navbarEl = document.getElementById("top-navbar");
    header.removeChild(navbarEl);
    header.appendChild(await navbar());
  }
};

export default logOut;
