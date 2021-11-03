const contactShelter = () => {
  const button = document.createElement("button");
  button.id = "contact-shelter";
  button.innerText = "Get in touch";
  button.classList.add("button");
  button.addEventListener("click", () =>
    console.log("working contact shelter listener")
  );
  return button;
};

export default contactShelter;
