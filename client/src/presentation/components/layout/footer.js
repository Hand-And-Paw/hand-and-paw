import githubRepo from "./github-link.js";
import createLogo from "./logo.js";
import contactUs from "./contact-us.js";
import goToTopBottom from "./go-to-top-button.js";
import mainMenuComponent from "./main-menu-component.js";

const footer = () => {
  // create footer content
  const footerContent = document.createElement("div");
  footerContent.className = "footer-content";
  //// logo
  footerContent.appendChild(
    createLogo({
      imageSource: "/assets/images/ui/logo-footer.svg",
    })
  );
  //// main menu
  footerContent.appendChild(mainMenuComponent());
  //// about
  const about = document.createElement("div");
  about.className = "footer-about-project";
  about.innerHTML = `<p>Created by students of</p><p>HackYourFuture Belgium</p>
  <p><a href="www.hackyourfuture.be"> hackyourfuture.be</a></p>`;
  footerContent.appendChild(about);
  //// contact
  const contact = document.createElement("div");
  contact.className = "contact";
  // to the top
  contact.appendChild(goToTopBottom());
  // contact us
  contact.appendChild(contactUs());
  // github repo link
  contact.appendChild(githubRepo());
  footerContent.appendChild(contact);

  return footerContent;
};

export default footer;
