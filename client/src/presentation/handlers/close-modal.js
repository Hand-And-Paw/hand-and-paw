const closeModal = () => {
  const modal = document.querySelector(".modal-background");
  const body = document.querySelector("body");
  body.removeChild(modal);
};

export default closeModal;
