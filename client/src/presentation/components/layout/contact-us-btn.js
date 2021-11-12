const contactUs = (handler) => {
  const contactUsEl = document.createElement("div");
  const button = document.createElement("button");
  button.innerText = "Contact us";
  button.id = "contact-us";
  button.addEventListener("click", handler);
  contactUsEl.appendChild(button);
  return contactUsEl;
};

export default contactUs;
