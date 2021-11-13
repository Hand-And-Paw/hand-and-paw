const notificationWithLink = (message, linkText, link, handler) => {
  const divEl = document.createElement("div");
  const title = document.createElement("h1");
  title.innerText = message;
  const anchor = document.createElement("a");
  anchor.className = "link-button";
  anchor.href = link;
  anchor.innerHTML = linkText;
  anchor.addEventListener("click", handler);
  divEl.appendChild(title);
  divEl.appendChild(anchor);
};

export default notificationWithLink;
