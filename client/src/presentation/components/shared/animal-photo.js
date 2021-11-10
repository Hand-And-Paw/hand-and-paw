import getAnimalPrincipalPicture from "../../../business-logic/get-animal-principal-picture.js";
import { b64toBlob } from "../../../business-logic/base-to-blob.js";

const animalPhoto = (animal, className) => {
  const { pictures } = animal;
  const photo = document.createElement("div");
  photo.className = className;
  const img = document.createElement("img");
  // looks for principal picture
  const picture = getAnimalPrincipalPicture(pictures);
  if (picture) {
    const blob = b64toBlob(picture.picture.data, picture.picture.contentType);
    const url = URL.createObjectURL(blob);
    img.src = url;
    photo.appendChild(img);
  } else {
    img.src =
      "../../../../assets//images/ui/animal-card/raw-images/default-no-image-1.png";
    photo.appendChild(img);
    return photo;
  }

  photo.appendChild(img);
  return photo;
};

export default animalPhoto;
