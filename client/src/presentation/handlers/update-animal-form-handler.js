import { updateAnimal } from "../../../../api/data-access/animals.js";
import createModal from "../components/shared/modal.js";
import closeModal from "./close-modal.js";

export const updateAnimalFormHandler = async (event) => {
  event.preventDefault();
  const form = document.getElementById("register-animal-form");
  const formData = new FormData(form);

  formData.append("userId", window.localStorage.getItem("userId"));

  const post = await updateAnimal(formData);
  if (post) {
    const divEl = document.createElement("div");
    const title = document.createElement("h1");
    title.innerText = "Animal registered successfully";
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
