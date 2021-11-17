/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable no-underscore-dangle */
import { registerAnimal } from "../../data-access/animal-access/register-animal.js";
import createModal from "../components/shared/modal.js";
import state from "../../data-access/state/state.js";
import goToAnimalProfile from "./go-to-animal-profile-handler.js";
import { validateForm } from "../../business-logic/regular-form-input-validation.js";

export const registerAnimalFormHandler = async (event) => {
  event.preventDefault();

  const name = getInput("name-input", "name-small");
  const phone = getInput("phone-input", "phone-small");
  const website = getInput("website-input", "website-small");

  const isValid = validateForm(name, phone, website);

  if (isValid) {
    const form = document.getElementById("register-animal-form");
    const formData = new FormData(form);

    formData.append("userId", window.localStorage.getItem("userId"));

    const post = await registerAnimal(formData);

    if (post._id) {
      state.animalId = post._id;
      const divEl = document.createElement("div");
      const title = document.createElement("h1");
      title.innerText = "Animal registered successfully";
      const anchor = document.createElement("a");
      anchor.id = "go-to-your-animal-card";
      anchor.href = "#";
      anchor.innerHTML = "go to your animal card";
      anchor.addEventListener("click", (e) => {
        // eslint-disable-next-line no-use-before-define
        goToAnimalProfile(e, state.animalId);
      });
      // delete back to search result option
      divEl.appendChild(title);
      divEl.appendChild(anchor);
      document
        .querySelector("body")
        .insertAdjacentElement("beforeend", createModal(divEl));
      // remove errors
      removeError(name);
      removeError(phone);
      removeError(website);
      return;
    }

    const divEl = document.createElement("div");
    const title = document.createElement("h1");
    title.innerText = "An error has occurred, try again later";
    // delete back to search result option
    divEl.appendChild(title);
    document
      .querySelector("body")
      .insertAdjacentElement("beforeend", createModal(divEl));
  }
};

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
