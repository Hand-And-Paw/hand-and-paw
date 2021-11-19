/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { updateUser } from "../../data-access/user-access/update-user.js";
import { getUser } from "../../data-access/user-access/get-user.js";
import { addValuesToEditUser } from "../../business-logic/add-values-to-edit-user.js";
import { validateForm } from "../../business-logic/regular-form-input-validation.js";
import { navbar } from "../components/layout/navbar.js";

export const updateUserHandler = async () => {
  const form = document.querySelector("#edit-user-profile");

  const name = getInput("name-input", "name-small-edit-profile-form");
  const phone = getInput("phone-input", "phone-small-edit-profile-form");
  const website = getInput("website-input", "website-small-edit-profile-form");

  const isValidated = validateForm(name, phone, website);

  if (isValidated) {
    const formData = new FormData(form);
    const userId = window.localStorage.getItem("userId");
    formData.append("id", window.localStorage.getItem("userId"));

    const post = await updateUser(userId, formData);
    if (post[0]?._id) {
      const publicAccess = document.getElementById("public-access");
      if (publicAccess) {
        publicAccess.remove();
      }
      renderSuccessfullySpan();
      setTimeout(clearSuccessfullySpan, 1000);
      form.reset();
      // remove input errors
      removeError(name);
      removeError(phone);
      removeError(website);
      const user = await getUser(userId);

      setTimeout(() => addValuesToEditUser(user[0]), 1001);
      setTimeout(() => renderNavbar(), 1001);
      // eslint-disable-next-line no-return-await

      return;
    }
    renderFailedSpan(post);
    setTimeout(clearFailedSpan, 1000);
  }
};
/// /////// helper functions //////////////////////
function renderSuccessfullySpan() {
  const form = document.querySelector("#edit-user-profile");
  const isSpan = document.getElementById("update-account-result-text");
  const brEl = document.getElementById("next-line-update");
  if (isSpan && brEl) {
    isSpan.remove();
    brEl.remove();
  }
  const span = document.createElement("span");
  const br = document.createElement("br");
  br.id = "next-line-update";
  span.innerHTML = `Account updated successfully`;
  span.id = "update-account-result-text";
  span.style.color = "Green";
  span.style.display = "grid";
  span.style.justifyContent = "center";
  form.appendChild(br);
  form.appendChild(span);
}

function renderFailedSpan(post) {
  const form = document.querySelector("#edit-user-profile");
  const span = document.createElement("span");
  const br = document.createElement("br");
  br.id = "failed-next-line";
  span.innerHTML = `${post.message}`;
  span.id = "failed-update-account-message";
  span.style.color = "red";
  span.style.display = "grid";
  span.style.justifyContent = "center";
  form.appendChild(br);
  form.appendChild(span);
}

function clearSuccessfullySpan() {
  const isSpan = document.getElementById("update-account-result-text");
  const brEl = document.getElementById("next-line-update");
  if (isSpan && brEl) {
    isSpan.remove();
    brEl.remove();
  }
}

function clearFailedSpan() {
  const isSpan = document.getElementById("failed-update-account-message");
  const brEl = document.getElementById("failed-next-line");
  if (isSpan && brEl) {
    isSpan.remove();
    brEl.remove();
  }
}

function getInput(inputId, smallId) {
  const object = {};
  object.formInput = document.getElementById(inputId);
  object.formMessage = document.getElementById(smallId);

  return object;
}

function removeError(inputObj) {
  inputObj.formMessage.innerHTML = "";
  inputObj.formInput.style.borderColor = "black";
}

async function renderNavbar() {
  const navbarEl = document.getElementById("top-navbar");
  if (navbarEl) {
    navbarEl.remove();
    document.getElementById("menu").appendChild(await navbar());
  }
}
