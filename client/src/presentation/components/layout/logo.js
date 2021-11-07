const createLogo = (props) => {
  // Init properties
  let imageSource =
    props?.imageSource || "/assets/images/ui/home/figma-images/Logo.png";

  const logo = document.createElement("div");
  logo.className = "logo";
  const anchor = document.createElement("a");
  anchor.href = "/index.html";
  const img = document.createElement("img");
  img.src = imageSource;
  anchor.appendChild(img);
  logo.appendChild(anchor);
  return logo;
};

export default createLogo;
