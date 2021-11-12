/* eslint-disable no-console */
/* eslint-disable no-return-assign */
const fileDataURL = (file) =>
  new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result);
    fr.onerror = reject;
    fr.readAsDataURL(file);
  });

export const showAnimalImage = (event) => {
  const file = event.srcElement.files[0];
  fileDataURL(file)
    .then((data) => (document.getElementById("animal-preview").src = data))
    .catch((err) => console.log(err));
};
