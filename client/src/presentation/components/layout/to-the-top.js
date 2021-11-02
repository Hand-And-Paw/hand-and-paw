import goToTop from "../../../business-logic/go-to-top.js";

const goToTopButton = () => {
  const topIcon = document.createElement("img");
  topIcon.src = "/assets/icons/footer/ant-design_up-circle-outlined.svg";
  topIcon.addEventListener("click", goToTop);

  return topIcon;
};

export default goToTopButton;
