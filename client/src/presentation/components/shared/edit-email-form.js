/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { editEmailFormHandler } from "../../handlers/edit-email-form-handler.js";

export const editEmailForm = () => {
  const form = document.createElement("form");
  form.id = "edit-email-form";
  const title = document.createElement("h2");
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
  label.htmlFor = inputEl.id;
  label.innerHTML = nameLabel;
  const br = document.createElement("br");
  const small = document.createElement("small");
  small.id = `${name}-small`;
  small.innerHTML = "Error message";
  containerEl.appendChild(label);
  containerEl.appendChild(inputEl);
  containerEl.appendChild(br);
  containerEl.appendChild(small);

  return containerEl;
}

function button(innerHtml, id, handler) {
  const btn = document.createElement("button");
  btn.id = id;
  btn.classList.add("button", "form-button");
  btn.innerHTML = innerHtml;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    handler(e);
  });
  return btn;
}
