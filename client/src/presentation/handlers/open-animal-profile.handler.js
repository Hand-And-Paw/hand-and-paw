import { getAnimal } from "../../data-access/animal-access/get-animal.js";

const openAnimalProfileHandler = async (e) => {
  // console.log(e.target.closest(".animal-card").id);
  const animalId = e.target.closest(".animal-card").id;
  const animal = await getAnimal(animalId);
  console.log(animal);
  return animal;
};

export default openAnimalProfileHandler;
