import getAnimalPrincipalPicture from "../../../business-logic/get-animal-principal-picture.js";
import { b64toBlob } from "../../../business-logic/base-to-blob.js";

export const animalCard = (animal, className) => {
  const { type, breed, gender, character, age, pictures, location } = animal;
  // create card
  const card = document.createElement("div");
  card.className = "animal-card";
  card.classList.add(className);
  // create photo div
  const photo = document.createElement("div");
  photo.className = "card-photo";
  const img = document.createElement("img");
  // looks for principal picture
  const picture = getAnimalPrincipalPicture(pictures);
  const blob = b64toBlob(picture.picture.data, picture.picture.contentType);
  const url = URL.createObjectURL(blob);
  img.src = url;
  photo.appendChild(img);
  // create info div
  const info = document.createElement("div");
  info.className = "card-info";
  info.innerHTML = `
  <div class="animal-name"> <h3>${animal.name}</h3> </div> <br>
  Type: <span> ${type} </span> <br>
  Breed: <span> ${breed} </span> <br>
  Gender: <span> ${gender}</span><br>
  Character: <span>${character}</span><br>
  Age: <span> ${age} </span><br>
  Location: <span> ${location}</span> <br>
  `;
  // append div
  card.appendChild(photo);
  card.appendChild(info);
  return card;
};
