import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import { animalCard } from "../components/shared/animal-card.js";

const chosenAnimal = {
  name: "Peach",
  type: "Cat",
  breed: "siamese",
  gender: "male",
  character: "angry",
  dateBirth: "11/01/12",
  pictures: [],
};

const buildPage = () => {
  document.getElementById("menu").appendChild(navbar("top-navbar"));
  document.querySelector("footer").appendChild(footer("footer-navigation"));
  document.querySelector(".animal-info").appendChild(animalCard(chosenAnimal));
};
buildPage();
