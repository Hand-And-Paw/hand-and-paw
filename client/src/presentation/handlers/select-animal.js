import { getAnimal } from "../../data-access/animal-access/get-animal.js";
import { animalCard } from "../components/shared/animal-card.js";
//

const selectAnimal = async (e) => {
  const animalId = e.target.closest(".animal-card").id;
  const animal = await getAnimal(animalId);
  const main = document.querySelector(".main");
  main.innerHTML = "";
  main.appendChild(animalCard(animal[0]));
  const animalStory = document.createElement("div");
  animalStory.innerText = animal[0].describeAnimal;
  main.appendChild(animalStory);
};

export default selectAnimal;
