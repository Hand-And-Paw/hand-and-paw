import openModal from "../../handlers/call-login-form.js";
import contactShelterForm from "./contact-shelter-form.js";
import { contactGiverPostHandler } from "../../handlers/get-in-touch-post.js";

const contactShelter = () => {
  const button = document.createElement("button");
  button.id = "contact-shelter";
  button.innerText = "Get in touch";
  button.className = "button regular-button";

  button.addEventListener("click", async () => {
    openModal(
      await contactShelterForm(
        "Get in touch",
        "contact-giver-form",
        contactGiverPostHandler
      )
    );
  });

  return button;
};

export default contactShelter;
