/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { contactUsPostHandler } from "../../handlers/contact-us-post.js";

export const contactUsForm = (className = "") => {
  const form = document.createElement("form");
  form.id = "contact-us-form";
  form.className = className;
  form.action = "contact-us.php";
  form.appendChild(inputForm("text", "name", "name", "full name", true));
  form.appendChild(inputForm("phone", "phone", "phone", "0471123456", true));
  form.appendChild(
    inputForm("text", "email", "email", "person@example.com", true)
  );
  form.appendChild(inputForm("text", "subject", "subject", "subject", true));
  form.appendChild(
    inputForm("textarea", "message", "message", "enter your message", true)
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

function inputForm(type, id, name, text, boolean) {
  const div = document.createElement("div");
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.name = name;
  input.placeholder = text;
  if (boolean) {
    input.setAttribute("required", "");
  }
  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.innerHTML = name;
  div.appendChild(label);
  div.appendChild(input);
  return div;
}
