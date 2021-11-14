const toMyAnimalsBtn = (id, text, href) => {
  const subNavigation = document.createElement("div");
  const a = document.createElement("a");
  subNavigation.id = id;
  subNavigation.className = id;
  const img = document.createElement("img");
  img.className = "arrow-back";
  img.src = "/assets/icons/blue_back-arrow.svg";
  subNavigation.appendChild(img);
  a.innerText = text;
  a.href = href;
  a.classList.add("link-button");
  subNavigation.appendChild(a);
  return subNavigation;
};

export default toMyAnimalsBtn;
