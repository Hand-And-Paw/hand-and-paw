import createModal from "../components/shared/modal.js";
import closeModal from "./close-modal.js";

const openModal = (modalContent) => {
  const modal = document.querySelector(".modal-background");
  if (!document.body.contains(modal)) {
    document
      .querySelector("body")
      .insertAdjacentElement("beforeend", createModal(modalContent));
  } else {
    closeModal();
  }
};

export default openModal;
