/**
 * @param {string} text message for when search returns 0 results
 * @returns div with article component
 */

const noAnimalsFound = (text) => {
  const divEl = document.createElement("div");
  divEl.className = "no-animals-found";
  const message = document.createElement("article");
  divEl.appendChild(message);
  message.innerText = text;
  return divEl;
};

export default noAnimalsFound;
