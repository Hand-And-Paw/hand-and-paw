import goToTop from "../../../business-logic/go-to-top.js";

const goToTopBottom = () => {
  const gototop = document.createElement("div");
  const topIcon = document.createElement("img");
  topIcon.src = "/assets/icons/footer/ant-design_up-circle-outlined.svg";
  topIcon.addEventListener("click", goToTop);
  gototop.appendChild(topIcon);
  return gototop;
};

export default goToTopBottom;
