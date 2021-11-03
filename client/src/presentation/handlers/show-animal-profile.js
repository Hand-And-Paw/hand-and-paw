import { getAnimal } from "../../data-access/animal-access/get-animal.js";
import { animalCard } from "../components/shared/animal-card.js";
import contactShelter from "../components/layout/contact-shelter-button.js";
import backToSearchResults from "../components/layout/back-to-results-button.js";

const showAnimalProfile = async (e, id) => {
  const animalId = !id ? e.target.closest(".animal-card").id : id;
  const animal = await getAnimal(animalId);
  const main = document.querySelector(".main");
  main.innerHTML = "";
  main.appendChild(backToSearchResults());
  main.appendChild(animalCard(animal[0], "animal-profile"));
  main.appendChild(contactShelter());
  const animalStory = document.createElement("div");
  animalStory.className = "animal-story";
  animalStory.innerText = animal[0].describeAnimal;
  main.appendChild(animalStory);
};

export default showAnimalProfile;
