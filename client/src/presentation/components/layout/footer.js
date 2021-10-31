import { navbar } from "./navbar.js";

const footer = (menuId) => {
  //main container
  const container = document.createElement("div");
  container.className = "container";
  //navbar menu
  container.appendChild(navbar(menuId));
  //about
  const about = document.createElement("p");
  about.className = "footer-about-project";
  about.innerText = `Created by students of HackYourFuture Belgium`;
  container.appendChild(about);

  //contact us
  const contactButton = document.createElement("button");
  contactButton.id = "contact-us";
  contactButton.className = "contact-button";
  contactButton.innerText = "Contact us";
  contactButton.addEventListener("click", () =>
    console.log("call contact us form")
  );
  container.appendChild(contactButton);

  //copyright
  const p = document.createElement("p");
  p.id = "copyrigt";
  p.innerHTML = `© 2021`;
  container.appendChild(p);
  //to the top
  const goUp = document.createElement("div");
  const upBtn = document.createElement("button");
  upBtn.id = "goUp";
  //insert icon
  upBtn.innerText = "GO UP icon";
  upBtn.addEventListener("click", () => console.log("go up handler"));
  goUp.appendChild(upBtn);
  container.appendChild(goUp);
  return container;
};

export default footer;
