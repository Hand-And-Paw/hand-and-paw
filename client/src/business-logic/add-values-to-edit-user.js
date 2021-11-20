/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable no-continue */
import { b64toBlob } from "./base-to-blob.js";
import { publicAccessComponent } from "../presentation/components/shared/public-access.js";

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
      key === "email"
    ) {
      continue;
    }

    if (key === "publicAccess") {
      _id("yes-check").checked = true;
      _id("update-button").before(publicAccessComponent());
      for (const [day, accessAndHours] of Object.entries(value)) {
        if (accessAndHours.hours) {
          if ("monday-check".includes(day)) {
            _id("monday-check").checked = true;
            _name("monday-hours")[0].value = accessAndHours.hours;
          }
          if ("tuesday-check".includes(day)) {
            _id("tuesday-check").checked = true;
            _name("tuesday-hours")[0].value = accessAndHours.hours;
          }
          if ("wednesday-check".includes(day)) {
            _id("wednesday-check").checked = true;
            _name("wednesday-hours")[0].value = accessAndHours.hours;
          }
          if ("thursday-check".includes(day)) {
            _id("thursday-check").checked = true;
            _name("thursday-hours")[0].value = accessAndHours.hours;
          }
          if ("friday-check".includes(day)) {
            _id("friday-check").checked = true;
            _name("friday-hours")[0].value = accessAndHours.hours;
          }
          if ("saturday-check".includes(day)) {
            _id("saturday-check").checked = true;
            _name("saturday-hours")[0].value = accessAndHours.hours;
          }
          if ("sunday-check".includes(day)) {
            _id("sunday-check").checked = true;
            _name("sunday-hours")[0].value = accessAndHours.hours;
          }
        }
      }
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

function _id(id) {
  const element = document.getElementById(id);
  return element;
}

function _name(name) {
  const element = document.getElementsByName(name);
  return element;
}
