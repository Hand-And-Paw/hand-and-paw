import closeModal from "../../handlers/close-modal.js";

const createModal = (content) => {
  const modalDiv = document.createElement("div");
  modalDiv.className = "modal-background";
  const modal = document.createElement("div");
  modal.className = "modal";
  const close = document.createElement("img");
  close.src = "/assets/icons/cross.svg";
  close.className = "close-modal";
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  modalContent.appendChild(content);
  modal.appendChild(close);
  modal.appendChild(modalContent);
  modalDiv.appendChild(modal);
  close.addEventListener("click", closeModal);
  return modalDiv;
};

export default createModal;
