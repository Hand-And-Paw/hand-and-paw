const contactUs = (e) => {
  const contactUs = document.createElement("div");

  const button = document.createElement("button");
  button.innerText = "Contact us";
  button.id = "contact-us";
  button.addEventListener("click", (e) =>
    console.log("working contact us listener")
  );
  contactUs.appendChild(button);
  return contactUs;
};

export default contactUs;
