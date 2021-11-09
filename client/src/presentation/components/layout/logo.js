const createLogo = (props) => {
  // Init properties
  let imageSource = props?.imageSource || "/assets/images/ui/logo-header.svg";

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
