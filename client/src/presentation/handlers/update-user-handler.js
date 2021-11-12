import { updateUser } from "../../data-access/user-access/update-user.js";

export const updateUserHandler = async () => {
  const form = document.querySelector("#edit-user-profile");
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
};

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
