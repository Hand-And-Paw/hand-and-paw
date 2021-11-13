/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable no-underscore-dangle */
import { registerAnimal } from "../../data-access/animal-access/register-animal.js";
import createModal from "../components/shared/modal.js";
import state from "../../data-access/state/state.js";
import showAnimalProfile from "./show-animal-profile.js";
import closeModal from "./close-modal.js";
import toMyAnimalsBtn from "../components/layout/go-to-added-animals.js";
import backToSearchResults from "../components/layout/back-to-results-button.js";

export const registerAnimalFormHandler = async (event) => {
  event.preventDefault();
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
};

async function goToAnimalProfile(e, animalId) {
  const modal = document.querySelector(".modal-background");
  if (document.body.contains(modal)) {
    closeModal();
  }
  await showAnimalProfile(e, animalId);
  const button = document.getElementById("to-search-results");
  button.remove();
  //
  const page = document.querySelector(".animal-profile-page.container");
  page.insertAdjacentElement(
    "afterbegin",
    toMyAnimalsBtn(
      "go-to-my-animals",
      "Back to my animals",
      "/src/presentation/components/pages/my-animals.html"
    )
  );
}
