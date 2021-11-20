/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { updateAnimal } from "../../data-access/animal-access/update-animal.js";
import createModal from "../components/shared/modal.js";
import goToAnimalProfile from "./go-to-animal-profile-handler.js";
import { validateForm } from "../../business-logic/regular-form-input-validation.js";

// import { showAnimalImage } from "./show-animal-image.js";

export const editAnimalProfileHandler = async (event) => {
  event.preventDefault();

  const name = getInput("edit-name", "name-small");
  const phone = getInput("edit-phone", "phone-small");
  const website = getInput("edit-webSite", "website-small");

  const isValid = validateForm(name, phone, website);

  if (isValid) {
    const form = document.getElementById("update-animal-form");
    const animalId = window.localStorage.getItem("animalId");

    const formData = new FormData(form);
    formData.append("id", animalId);
    formData.append("userId", window.localStorage.getItem("userId"));

    const post = await updateAnimal(animalId, formData);
    if (post) {
      const divEl = document.createElement("div");
      const title = document.createElement("h1");
      title.innerText = "Animal updated successfully";
      const anchor = document.createElement("a");
      anchor.href = "#";
      anchor.innerHTML = "go to your animal card";
      anchor.addEventListener("click", (e) => {
        // eslint-disable-next-line no-use-before-define
        goToAnimalProfile(e, animalId);
      });
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
