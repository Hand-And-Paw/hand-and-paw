import openModal from "../../handlers/call-login-form.js";
import contactForm from "./contact-form.js";
import { contactGiverPostHandler } from "../../handlers/get-in-touch-post.js";

// const call = () => {
//   openModal(contactForm("Get in touch", "contact-shelter"));
// };

const contactShelter = () => {
  const button = document.createElement("button");
  button.id = "contact-shelter";
  button.innerText = "Get in touch";
  button.className = "button regular-button";
  button.addEventListener("click", () => {
    openModal(
      contactForm(
        "Get in touch",
        "contact-giver-form",
        "contact-giver-form-submit",
        contactGiverPostHandler
      )
    );
  });
  return button;
};

export default contactShelter;
