import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import faqListHandler from "../handlers/faq-handler.js";


const buildPage = () => {
  document.getElementById("menu").appendChild(navbar());
  document.querySelector("footer").appendChild(footer());
   // faqListHandler();

  // const question = document.querySelectorAll(".question");

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

question.forEach(element => {
  element.addEventListener("click", faqListHandler);
  console.log();
  });

};
buildPage();
