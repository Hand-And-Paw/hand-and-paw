const createLogo = () => {
  const logo = document.createElement("div");
  logo.className = "logo";
  const anchor = document.createElement("a");
  anchor.href = "/index.html";
  const img = document.createElement("img");
  img.src = "/assets/images/ui/home/figma-images/Logo.png";
  anchor.appendChild(img);
  logo.appendChild(anchor);
  return logo;
};

export default createLogo;
