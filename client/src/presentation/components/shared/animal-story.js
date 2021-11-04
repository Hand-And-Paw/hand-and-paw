const aboutAnimal = (animal, className) => {
  const animalStory = document.createElement("div");
  animalStory.className = className;
  const title = document.createElement("h3");
  title.innerText = `About ${animal.name}`;
  title.className = "animal-name";
  animalStory.appendChild(title);
  const text = document.createElement("p");
  text.innerText = animal.describeAnimal;
  animalStory.appendChild(text);
  return animalStory;
};

export default aboutAnimal;
