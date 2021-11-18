const contactUs = (handler) => {
  const contactUs = document.createElement("div");
  const contactUsParagraph = document.createElement("p");
  contactUsParagraph.innerText = "Contact us";
  contactUsParagraph.id = "contact-us";
  contactUsParagraph.addEventListener("click", handler);
  contactUs.appendChild(contactUsParagraph);
  return contactUs;
};

export default contactUs;
