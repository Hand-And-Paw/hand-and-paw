import { getAnimal } from "../../data-access/animal-access/get-animal.js";
import { animalCard } from "../components/shared/animal-card.js";
import contactShelter from "../components/layout/contact-shelter-button.js";

const showAnimalProfile = async (e) => {
  const animalId = e.target.closest(".animal-card").id;
  const animal = await getAnimal(animalId);
  const main = document.querySelector(".main");
  main.innerHTML = "";
  main.appendChild(animalCard(animal[0]));
  main.appendChild(contactShelter());
  const animalStory = document.createElement("div");
  animalStory.innerText = animal[0].describeAnimal;
  main.appendChild(animalStory);
};

export default showAnimalProfile;
