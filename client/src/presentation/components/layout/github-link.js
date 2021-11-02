const githubRepo = () => {
  const anchor = document.createElement("a");
  anchor.href = "https://github.com/Hand-And-Paw/hand-and-paw";
  const icon = document.createElement("img");
  icon.src = "/assets/icons/footer/akar-icons_github-fill.svg";
  anchor.appendChild(icon);
  return anchor;
};

export default githubRepo;
