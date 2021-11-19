/* eslint-disable import/named */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow/prefer-arrow-functions */

import { publicAccessComponent } from "../shared/public-access.js";
import openModal from "../../handlers/call-login-form.js";
import { editPasswordForm } from "../shared/edit-password-form.js";
import { updateUserHandler } from "../../handlers/update-user-handler.js";
import { editEmailForm } from "../shared/edit-email-form.js";

export const editUserProfile = () => {
  const form = document.createElement("form");
  form.id = "edit-user-profile";
  form.className = "edit-user-profile-class";

  form.appendChild(createInput("text", "name", "Name", "Your name"));
  form.appendChild(createInput("text", "phone", "Phone", "+32123456789"));
  form.appendChild(createInput("text", "location", "City", "Your city"));
  form.appendChild(
    createInput("text", "website", "Website", "http://www.yourpage.com")
  );
  form.appendChild(
    button("edit-button", "Edit email", openModal, editEmailForm)
  );
  form.appendChild(
    button("edit-button", "Edit password", openModal, editPasswordForm)
  );

  const p = document.createElement("p");
  p.innerHTML = "Would you like to specify public access hours?";
  form.appendChild(p);

  const checkboxContainer = container("checkbox");
  const yesCheckbox = createCheckbox("yes", "Yes");
  // render the public access form
  yesCheckbox.addEventListener("click", (event) => {
    const publicAccess = document.getElementById("public-access");
    if (event.target.checked === true) {
      if (publicAccess) {
        return;
      }
      const updateButton = document.getElementById("update-button");
      updateButton.before(publicAccessComponent());
    } else if (publicAccess) {
      publicAccess.remove();
    }
  });
  // avatar section
  checkboxContainer.appendChild(yesCheckbox);
  form.appendChild(checkboxContainer);

  form.appendChild(avatarImage());

  // Update account button
  const updateButton = button(
    "update-account button regular-button",
    "Update account",
    updateUserHandler
  );
  updateButton.id = "update-button";
  form.appendChild(updateButton);

  return form;
};

function button(className, innerHtml, handler, component) {
  const btn = document.createElement("button");
  btn.className = className;
  btn.innerHTML = innerHtml;
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    if (component) {
      handler(component());
      return;
    }
    handler(event);
  });

  return btn;
}

function container(className) {
  const containerEl = document.createElement("div");
  containerEl.className = className;
  return containerEl;
}

function createInput(type, name, nameLabel, placeHolder) {
  const containerEl = container("input-form");
  const inputEl = document.createElement("input");
  inputEl.className = "input-select";
  inputEl.type = type;
  inputEl.name = name;
  inputEl.id = `${name}-input`;
  inputEl.placeholder = placeHolder;
  const label = document.createElement("label");
  label.htmlFor = inputEl.id;
  label.innerHTML = nameLabel;
  const br = document.createElement("br");
  const small = document.createElement("small");
  small.id = `${name}-small-edit-profile-form`;
  containerEl.appendChild(label);
  containerEl.appendChild(inputEl);
  containerEl.appendChild(br);
  containerEl.appendChild(small);

  return containerEl;
}

function createCheckbox(name, text) {
  const containerEl = document.createElement("div");
  containerEl.className = `${name}-checkbox`;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = name;
  checkbox.id = `${name}-check`;
  containerEl.appendChild(checkbox);
  const label = document.createElement("label");
  label.htmlFor = `${name}-check`;
  label.innerHTML = text;
  containerEl.appendChild(label);
  return containerEl;
}

function avatarImage() {
  const imageContainer = container("upload-images");
  const inputImageContainer = container("input-image-container");
  const inputUploadImage = document.createElement("input");
  inputUploadImage.type = "file";
  inputUploadImage.name = "avatar";
  inputUploadImage.id = `upload-avatar-image`;
  inputUploadImage.classList.add("link-button", "update-animal-image-button");
  inputUploadImage.setAttribute("accept", "image/*");
  const labelInputImage = document.createElement("label");
  labelInputImage.htmlFor = inputUploadImage.id;
  labelInputImage.innerHTML = " Upload Image";
  labelInputImage.className = "update-animal-image-upload";
  inputImageContainer.appendChild(labelInputImage);
  inputImageContainer.appendChild(inputUploadImage);
  const avatarPreviewContainer = container("avatar-preview-container");
  const avatarImageEl = document.createElement("img");
  avatarImageEl.id = "avatar-preview";
  avatarImageEl.className = "avatar-preview";
  avatarPreviewContainer.appendChild(avatarImageEl);
  imageContainer.appendChild(inputImageContainer);
  imageContainer.appendChild(avatarPreviewContainer);
  return imageContainer;
}
