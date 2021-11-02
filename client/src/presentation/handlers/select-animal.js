import { getAnimal } from "../../data-access/animal-access/get-animal.js";
import { animalCard } from "../components/shared/animal-card.js";
//

const selectAnimal = async (e) => {
  // console.log(e.target.closest(".animal-card").id);
  const animalId = e.target.closest(".animal-card").id;
  const animal = await getAnimal(animalId);
  console.log(animal);
  return animal;
};

// const showAnimalProfileHandler = () => {
//   const main = document.querySelector(".main");
//   const fetchedAnimal = selectAnimal();
//   main.innerHTML = "";
//   main.appendChild(animalCard(fetchedAnimal));
// };

export default selectAnimal;
