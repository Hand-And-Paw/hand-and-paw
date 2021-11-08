import openModal from "./call-login-form.js";
import { contactUsForm } from "../components/shared/contact-us-form.js";

export const callContactForm = () => {
  openModal(contactUsForm());
};
