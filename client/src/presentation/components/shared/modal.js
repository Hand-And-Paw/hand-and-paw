// import { loginForm } from "./login-form.js";

export const createModal = (content) => {
  // condition if log in is pressed)
  const modalDiv = document.createElement("div");
  modalDiv.className = "modal-background";
  const modal = document.createElement("div");
  modal.className = "modal";
  const close = document.createElement("span");
  close.innerText = "X";
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  modalContent.appendChild(content);
  modal.appendChild(close);
  modal.appendChild(modalContent);
  modalDiv.appendChild(modal);
  return modalDiv;
};
