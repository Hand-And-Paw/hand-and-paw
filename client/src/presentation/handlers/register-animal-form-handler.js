import { registerAnimal } from "../../data-access/animal-access/register-animal.js";

export const registerAnimalFormHandler = async (event) => {
  event.preventDefault();
  const form = document.getElementById("register-animal-form");
  const formData = new FormData(form);

  formData.append("userId", window.localStorage.getItem("userId"));

  await registerAnimal(formData);
};
