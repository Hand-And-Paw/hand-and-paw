import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import { registerAnimalFormHandler } from "../handlers/register-animal-form-handler.js";

const fileDataURL = file => new Promise((resolve,reject) => {
   let fr = new FileReader();
   fr.onload = () => resolve( fr.result);
   fr.onerror = reject;
   fr.readAsDataURL( file)
});

export const showAnimalImage = (event) => {
   const file = event.srcElement.files[0];
   console.log("@@@@@@",file)
   fileDataURL( file)
    .then( data => (document.getElementById("animal-preview").src = data))
    .catch(err => console.log(err));
}

const buildPage = () => {
  document.getElementById("menu").appendChild(navbar());
  document.querySelector("footer").appendChild(footer());
  const form = document.getElementById("register-animal-form");
  form.addEventListener("submit", registerAnimalFormHandler);
  const imgInput = document.getElementById("img");
  imgInput.addEventListener("change", showAnimalImage);
};
buildPage();

