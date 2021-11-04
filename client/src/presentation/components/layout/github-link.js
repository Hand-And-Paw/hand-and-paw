const githubRepo = () => {
  const githubRepo = document.createElement("div");
  githubRepo.className = "githubrepo"
  const anchor = document.createElement("a");
  anchor.href = "https://github.com/Hand-And-Paw/hand-and-paw";
  anchor.target = "blank";
  const icon = document.createElement("img");
  icon.className="github-icon"
  icon.src = "/assets/icons/footer/akar-icons_github-fill.svg";
  anchor.appendChild(icon);
  githubRepo.appendChild(anchor);
  return githubRepo;
};

export default githubRepo;
