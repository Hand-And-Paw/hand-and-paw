const aboutAnimal = (animal, className) => {
  const animalStory = document.createElement("div");
  animalStory.className = className;
  animalStory.innerText = animal.describeAnimal;
  return animalStory;
};

export default aboutAnimal;
