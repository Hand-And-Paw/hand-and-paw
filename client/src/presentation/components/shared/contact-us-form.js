/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { contactUsPostHandler } from "../../handlers/contact-us-post.js";

export const contactUsForm = () => {
  const form = document.createElement("form");
  form.id = "contact-us-form";
  form.action = "contact-us.php";
  form.appendChild(inputForm("text", "name", "full name", true));
  form.appendChild(inputForm("text", "email", "person@example.com", true));
  form.appendChild(
    inputForm("textarea", "message", "enter your message", true)
  );
  const divEl = document.createElement("div");
  const button = document.createElement("button");
  button.id = "send-contact-message";
  button.type = "submit";
  button.innerHTML = "Submit";
  button.addEventListener("click", contactUsPostHandler);
  const span = document.createElement("span");
  span.id = "status";
  divEl.appendChild(button);
  divEl.appendChild(span);
  form.appendChild(divEl);
  return form;
};

function inputForm(type, id, text, boolean) {
  const div = document.createElement("div");
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.placeholder = text;
  input.required = boolean;
  const label = document.createElement("label");
  label.id = id;
  label.innerHTML = id;
  div.appendChild(label);
  div.appendChild(input);
  return input;
}
