import openModal from "../../handlers/call-login-form.js";
import contactForm from "./contact-form.js";

// const call = () => {
//   openModal(contactForm("Get in touch", "contact-shelter"));
// };

const contactShelter = () => {
  const button = document.createElement("button");
  button.id = "contact-shelter";
  button.innerText = "Get in touch";
  button.className = "button regular-button";
  button.addEventListener("click", () => {
    openModal(contactForm("Get in touch", "contact-shelter"));
  });
  return button;
};

export default contactShelter;
