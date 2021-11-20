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
    <input id="${formId}-name" type="name" name="name"/>

  </div>
  <div class="form-control">
    <label for="phone-number">Phone number</label><br />
    <input id="${formId}-phone" type="text" name="phone" />

  </div>
  <div class="form-control">
    <label for="email">Email</label><br />
    <input id="${formId}-email" type="email" name="email" autocomplete="email"  required/>
 
  </div>
  <div class="form-control">
    <label for="Message">Message</label><br />
    <textarea id="${formId}-message" name="message" rows="14" cols="60" required> </textarea>
  </div>
   `;
  const divEl = document.createElement("div");
  divEl.id = "get-in-touch-btn-container";
  const button = document.createElement("button");
  button.id = `${formId}-submit`;
  button.classList.add("button", "regular-button");
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
