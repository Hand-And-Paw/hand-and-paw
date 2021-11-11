import { updateAnimal } from "../../data-access/animal-access/update-animal.js";
import createModal from "../components/shared/modal.js";
import closeModal from "./close-modal.js";

export const editAnimalProfileHandler = async (event) => {
  event.preventDefault();
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
    divEl.appendChild(title);
    divEl.appendChild(anchor);
    document
      .querySelector("body")
      .insertAdjacentElement("beforeend", createModal(divEl));
    setTimeout(closeModal, 3000);
    form.reset();
  }
};
