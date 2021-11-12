import openModal from "./call-login-form.js";
import contactForm from "../components/layout/contact-form.js";
import { contactUsPostHandler } from "./contact-us-post.js";

export const callContactForm = () => {
  openModal(contactForm("Contact Us", "contact-us-form", contactUsPostHandler));
};
