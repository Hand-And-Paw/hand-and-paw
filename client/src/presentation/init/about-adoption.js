import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import { burgerHandler } from "../handlers/burger-handler.js";

const buildPage = async () => {
  document.getElementById("menu").appendChild(await navbar());
  document.querySelector("footer").appendChild(footer());
  // faqListHandler();

  var faq = document.getElementsByClassName("question");
  var i;

  for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
      /* Toggle between hiding and showing the active panel */
      var body = this.nextElementSibling;
      if (body.style.display === "block") {
        body.style.display = "none";
      } else {
        body.style.display = "block";
      }
    });
  }

  burgerHandler();
};
buildPage();
