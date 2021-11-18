/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { editPasswordFormHandler } from "../../handlers/edit-user-password.js";

export const editPasswordForm = () => {
  const form = document.createElement("form");
  form.id = "edit-password-form";
  form.className = "modal-form";
  const title = document.createElement("h1");
  title.innerText = "Change password";
  form.appendChild(title);
  form.appendChild(createInput("password", "oldPassword", "Current password"));
  form.appendChild(createInput("password", "newPassword", "Password"));
  form.appendChild(
    createInput("password", "confirmPassword", "Confirm password")
  );
  form.appendChild(
    button("Change password", "change-password", editPasswordFormHandler)
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
