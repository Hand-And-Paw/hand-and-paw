const editAnimalProfile = (animalId) => {
  localStorage.setItem("animalId", animalId);
  const editAnimalProfileBtn = document.createElement("img");
  editAnimalProfileBtn.src = "/assets/icons/edit-icon.svg";
  editAnimalProfileBtn.id = "edit-animal";
  editAnimalProfileBtn.className = "edit-animal";
  editAnimalProfileBtn.addEventListener("click", (e) =>
    window.localStorage.setItem("animalId", e.target.closest(".animal-card").id)
  );
  editAnimalProfileBtn.addEventListener(
    "click",
    () => (window.location.href = "../pages/edit-animal-profile.html")
  );
  return editAnimalProfileBtn;
};

export default editAnimalProfile;
