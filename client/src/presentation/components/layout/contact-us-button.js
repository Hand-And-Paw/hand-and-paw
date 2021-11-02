const contactUsButton = (e) => {
  const button = document.createElement("button");
  button.innerText = "Contact us";
  button.id = "contact-us";
  button.addEventListener("click", (e) =>
    console.log("working contact us listener")
  );
  return button;
};

export default contactUsButton;
