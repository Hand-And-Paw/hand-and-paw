/* eslint-disable no-underscore-dangle */
import { registerAnimal } from "../../data-access/animal-access/register-animal.js";
import createModal from "../components/shared/modal.js";
import closeModal from "./close-modal.js";
import state from "../../data-access/state/state.js";
import showAnimalProfile from "./show-animal-profile.js";

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
    anchor.href = "#";
    anchor.innerHTML = "go to your animal card";
    anchor.addEventListener("click", (e) =>
      showAnimalProfile(e, state.animalId)
    );
    // delete back to search result option
    divEl.appendChild(title);
    divEl.appendChild(anchor);
    document
      .querySelector("body")
      .insertAdjacentElement("beforeend", createModal(divEl));
    setTimeout(closeModal, 4000);
    form.reset();
  }
};
