import { getAnimal } from "../../../data-access/animal-access/get-animal.js";
import animalPhoto from "../shared/animal-photo.js";
import state from "../../../data-access/state/state.js";

const contactShelterForm = async (title, formId, handler) => {
  const form = document.createElement("form");
  form.className = "modal-form";
  form.id = formId;
  form.action = "#";
  form.innerHTML = `
  <h1 id="form-title">${title}</h1>
  <div class="form-control">
    <label for="name">Name</label><br />
    <input type="name" name="name"/><br />
    <small> Error message </small>
  </div>
  <div class="form-control">
    <label for="phone-number">Phone number</label><br />
    <input type="number" name="phone" /><br />
    <small> Error message </small>
  </div>
  <div class="form-control">
    <label for="email">Email</label><br />
    <input type="email" name="email" autocomplete="email"  required/><br />
    <small> Error message </small>
  </div>
  <div class="form-control">
    <label for="Message">Message</label><br />
    <textarea name="message" rows="14" cols="60" required> </textarea>
    <small> Error message </small>
  </div>
   `;
  const divEl = document.createElement("div");
  const button = document.createElement("button");
  button.id = `${formId}-submit`;
  button.classList.add("button", "form-button");
  button.type = "submit";
  button.innerHTML = "Send";
  button.addEventListener("click", handler);
  const br = document.createElement("br");
  const span = document.createElement("span");
  span.id = "status";
  divEl.appendChild(button);
  divEl.appendChild(br);
  divEl.appendChild(span);
  form.appendChild(divEl);
  const referredAnimal = document.createElement("div");
  referredAnimal.className = "referred-animal";
  const animal = await getAnimal(state.animalId);
  referredAnimal.appendChild(animalPhoto(animal[0], "subject-animal"));
  const animalName = document.createElement("h3");
  animalName.innerText = animal[0].name;
  referredAnimal.appendChild(animalName);
  form.firstElementChild.after(referredAnimal);

  return form;
};

export default contactShelterForm;
