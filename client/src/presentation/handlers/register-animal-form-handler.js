import { registerAnimal } from "../../data-access/animal-access/register-animal.js";

export const registerAnimalFormHandler = async (event) => {
  event.preventDefault();
  const form = document.getElementById("register-animal-form");
  const formData = new FormData(form);

  formData.append("userId", window.localStorage.getItem("userId"));
  // const userObj = {};
  for (const key of formData.keys()) {
    console.log(key, "-->", formData.get(key));
  }
  await registerAnimal(formData);

  // form.innerHTML = `<h1> ${post.message} </h1>`;
};
