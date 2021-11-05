/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable no-underscore-dangle */
import { registerAnimal } from "../../data-access/animal-access/register-animal.js";
import createModal from "../components/shared/modal.js";
import state from "../../data-access/state/state.js";
import showAnimalProfile from "./show-animal-profile.js";
import closeModal from "./close-modal.js";

export const registerAnimalFormHandler = async (event) => {
  event.preventDefault();
  const form = document.getElementById("register-animal-form");
  const formData = new FormData(form);

  formData.append("userId", window.localStorage.getItem("userId"));

  const post = await registerAnimal(formData);
  state.animalId = post._id;
  if (post) {
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
  }
};

async function goToAnimalProfile(e, animalId) {
  const modal = document.querySelector(".modal-background");
  if (document.body.contains(modal)) {
    closeModal();
  }
  await showAnimalProfile(e, animalId);
  const button = document.getElementById("to-search-results");
  button.remove();
}
