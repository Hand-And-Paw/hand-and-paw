import { updateUser } from "../../data-access/user-access/update-user.js";

export const updateUserHandler = async () => {
  const form = document.querySelector("#edit-user-profile");
  debugger;
  // let isValidated;
  // if (isValidated === false) {
  //   isValidated = undefined;
  // }
  const isValidated = validateForm();

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
      return;
    }
    renderFailedSpan();
    setTimeout(clearFailedSpan, 1000);
  }
};
////////// helper functions //////////////////////
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

function renderFailedSpan() {
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

function validateForm() {
  const form = document.querySelector("#edit-user-profile");
  const website = form.querySelector("#website-input");
  const phone = form.querySelector("#phone-input");
  const name = form.querySelector("#name-input");

  let isValid = true;

  if (!checkUrl(website)) {
    isValid = false;
  }

  if (!checkPhoneNumber(phone)) {
    isValid = false;
  }

  if (!checkLength(name, 3, 50)) {
    isValid = false;
  }
  return isValid;
}

const checkPhoneNumber = (input) => {
  const re =
    /^(\+{1}\d{2,3}\s?[(]{1}\d{1,3}[)]{1}\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}$/;
  if (re.test(input.value.trim())) {
    return true;
  }
  input.style.borderColor = "red";
  renderMessage(
    "Phone is not valid.",
    "phone-small-edit-profile-form",
    "failText"
  );
  setTimeout(removePhoneError, 1500);
  return false;
};

const checkUrl = (input) => {
  const re = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
  if (re.test(input.value.trim())) {
    return true;
  }
  input.style.borderColor = "red";
  renderMessage(
    "Url is not valid.",
    "website-small-edit-profile-form",
    "failText"
  );
  setTimeout(removeUrlError, 1500);
  return false;
};

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    input.style.borderColor = "red";
    renderMessage(
      `Input must be at least ${min} characters`,
      "name-small-edit-profile-form",
      "failText"
    );
    setTimeout(removeNameError, 1500);
    return false;
  }
  if (input.value.length > max) {
    input.style.borderColor = "red";
    renderMessage(
      `Name must be less then ${max} characters`,
      "name-small-edit-profile-form",
      "failText"
    );
    setTimeout(removeNameError, 1500);
    return false;
  }
  return true;
};

function renderMessage(text, id, className) {
  const small = document.getElementById(id);
  small.innerHTML = text;
  small.className = className;
}

function removeNameError() {
  document.getElementById("name-small-edit-profile-form").innerHTML = "";
  document.getElementById("name-input").style.borderColor = "black";
}

function removePhoneError() {
  document.getElementById("phone-small-edit-profile-form").innerHTML = "";
  document.getElementById("phone-input").style.borderColor = "black";
}

function removeUrlError() {
  document.getElementById("website-small-edit-profile-form").innerHTML = "";
  document.getElementById("website-input").style.borderColor = "black";
}
