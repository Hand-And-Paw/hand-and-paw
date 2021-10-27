import { navbar } from "./navbar.js";

const footer = (mainMenu) => {
  //main container
  const container = document.createElement("div");
  container.className = "container";
  //navbar menu
  const navigation = document.createElement("div");
  navigation.className = "footer-navigation";
  navigation.appendChild(navbar());
  container.appendChild(navigation);
  //about
  const about = document.createElement("div");
  about.className = "footer-about-project";
  about.innerText = `Created by students of HackYourFuture Belgium`;
  const button = document.createElement("button");
  button.className = "contact-us";
  button.innerText = "Contact us";
  button.addEventListener("click", () => console.log("call contact us form"));
  about.appendChild(button);
  container.appendChild(about);
  //copyright
  const copyright = document.createElement("div");
  const p = document.createElement("p");
  p.id = "copyrigt";
  p.innerHTML = `All rights reserved © 2021`;
  copyright.appendChild(p);
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
