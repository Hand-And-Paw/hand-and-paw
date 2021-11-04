import githubRepo from "./github-link.js";
import createLogo from "./logo.js";
import contactUsButton from "./contact-us-button.js";
import goToTopButton from "./to-the-top.js";
import mainMenuComponent from "./main-menu-component.js";

const footer = () => {
  // create footer content
  const footerContent = document.createElement("div");
  footerContent.className = "footer-content";
  // logo
  footerContent.appendChild(createLogo());
  // main menu
  footerContent.appendChild(mainMenuComponent({"className":'my-specific-footer-class-comes-here'}));
  // created by
  const about = document.createElement("p");
  about.className = "footer-about-project";
  about.innerHTML = `Created by students of HackYourFuture Belgium<br>
  <a href="www.hackyourfuture.be"> hackyourfuture.be</a>`;
  footerContent.appendChild(about);
  // github repo link
  footerContent.appendChild(githubRepo());
  // contact us
  footerContent.appendChild(contactUsButton());
  // to the top
  footerContent.appendChild(goToTopButton());
  return footerContent;
};

export default footer;
