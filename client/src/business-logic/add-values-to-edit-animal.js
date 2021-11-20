/* eslint-disable no-continue */
import { b64toBlob } from "./base-to-blob.js";

export const addValuesToEditAnimal = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    if (
      key === "isPrincipal" ||
      key === "fieldname" ||
      key === "_id" ||
      key === "userId" ||
      key === "registerDate" ||
      key === "updateDate" ||
      key === "__v"
    ) {
      continue;
    }

    if (key === "pictures") {
      const animalPreview = document.getElementById("animal-preview");
      if (value.length) {
        const blob = b64toBlob(
          value[0].picture.data,
          value[0].picture.contentType
        );
        const url = URL.createObjectURL(blob);
        animalPreview.src = url;
      } else {
        animalPreview.src =
          "../../../../assets//images/ui/animal-card/raw-images/default-no-image-1.png";
      }
      continue;
    }
    const name = document.getElementById(`edit-${key}`);
    name.value = value;
  }
};
