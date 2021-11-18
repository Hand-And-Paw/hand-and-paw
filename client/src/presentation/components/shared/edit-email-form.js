/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { editEmailFormHandler } from "../../handlers/edit-email-form-handler.js";

export const editEmailForm = () => {
  const form = document.createElement("form");
  form.id = "edit-email-form";
  form.className = "modal-form";
  const title = document.createElement("h1");
  title.innerText = "Change email";
  form.appendChild(title);
  form.appendChild(createInput("text", "email", "Email"));
  form.appendChild(createInput("text", "repeatEmail", "Repeat email"));
  form.appendChild(
    button("Change email", "change-email", editEmailFormHandler)
  );
  return form;
};

function container(className) {
  const containerEl = document.createElement("div");
  containerEl.className = className;
  return containerEl;
}

function createInput(type, name, nameLabel) {
  const containerEl = container("form-control");
  const inputEl = document.createElement("input");
  inputEl.type = type;
  inputEl.name = name;
  inputEl.id = `${name}-input`;
  inputEl.setAttribute("required", "");
  const label = document.createElement("label");
  const br = document.createElement("br");
  label.htmlFor = inputEl.id;
  label.innerHTML = nameLabel;
  containerEl.appendChild(label);
  containerEl.appendChild(br);
  containerEl.appendChild(inputEl);

  return containerEl;
}

function button(innerHtml, id, handler) {
  const btn = document.createElement("button");
  btn.id = id;
  btn.classList.add("button", "regular-button");
  btn.innerHTML = innerHtml;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    handler(e);
  });
  return btn;
}
