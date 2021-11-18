/* eslint-disable no-continue */
import { b64toBlob } from "./base-to-blob.js";

export const addValuesToEditUser = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    if (
      key === "password" ||
      key === "favorites" ||
      key === "_id" ||
      key === "registeredAnimals" ||
      key === "registerDate" ||
      key === "updateDate" ||
      key === "__v" ||
      key === "publicAccess" ||
      key === "email"
    ) {
      continue;
    }
    if (key === "avatar") {
      const avatarPreview = document.getElementById("avatar-preview");
      if (value) {
        const blob = b64toBlob(value.data, value.contentType);
        const url = URL.createObjectURL(blob);
        avatarPreview.src = url;
      } else {
        avatarPreview.src =
          "../../../../assets/images/ui/animal-card/raw-images/default-no-image-1.png";
      }
      continue;
    }
    const name = document.getElementById(`${key}-input`);
    name.value = value;
  }
};
