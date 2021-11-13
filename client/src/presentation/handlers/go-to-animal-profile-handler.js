import showAnimalProfile from "./show-animal-profile.js";
import closeModal from "./close-modal.js";
import toMyAnimalsBtn from "../components/layout/go-to-added-animals.js";

const goToAnimalProfile = async (e, animalId) => {
  const modal = document.querySelector(".modal-background");
  if (document.body.contains(modal)) {
    closeModal();
  }
  await showAnimalProfile(e, animalId);
  const button = document.getElementById("to-search-results");
  button.remove();
  // append go to my animals
  const page = document.querySelector(".animal-profile-page.container");
  page.insertAdjacentElement(
    "afterbegin",
    toMyAnimalsBtn(
      "go-to-my-animals",
      "Go to my animals",
      "/src/presentation/components/pages/my-animals.html"
    )
  );
};

export default goToAnimalProfile;
