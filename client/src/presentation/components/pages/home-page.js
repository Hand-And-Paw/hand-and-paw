import { fetchUsers } from "../../../api-calls/calls.js";

export const homePage = async () => {
  // put the component that belongs to homePage
  const divEl = document.createElement("div");
  const users = await fetchUsers();
  const img = document.createElement("img");
  img.src = `../../../../public/avatar-uploads/${users[0].avatar}`;
  divEl.textContent = JSON.stringify(users);
  divEl.appendChild(img);
  return divEl;
};
