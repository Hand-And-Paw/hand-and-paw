import { fetchUsers } from "../../../api-calls/calls.js";

export const homePage = async () => {
  // put the component that belongs to homePage
  const divEl = document.createElement("div");
  const users = await fetchUsers();
  console.log(users);
  divEl.textContent = JSON.stringify(users);
  return divEl;
};
