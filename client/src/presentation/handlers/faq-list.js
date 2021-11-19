/* eslint-disable no-invalid-this */
export const faqListHandler = () => {
  const faq = document.getElementsByClassName("question");
  let i;

  for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
      const faqs = document.querySelectorAll(".question");
      [...faqs].forEach((el) => {
        if (el === this) return;
        if (el.nextElementSibling.style.display === "block") {
          el.nextElementSibling.style.display = "none";
          el.firstElementChild.style.transform = "rotate(0deg)";
        }
      });
      this.classList.toggle("active");
      /* Toggle between hiding and showing the active panel */
      const body = this.nextElementSibling;
      if (body.style.display === "block") {
        body.style.display = "none";
        this.firstElementChild.style.transform = "rotate(0deg)";
      } else {
        body.style.display = "block";
        this.firstElementChild.style.transform = "rotate(90deg)";
      }
    });
  }
};
