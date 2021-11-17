/* eslint-disable no-continue */
export const addValuesToEditUser = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    if (
      key === "password" ||
      key === "favorites" ||
      key === "_id" ||
      key === "registeredAnimals" ||
      key === "registerDate" ||
      key === "updateDate" ||
      key === "__v" ||
      key === "avatar" ||
      key === "publicAccess" ||
      key === "email"
    ) {
      continue;
    }
    const name = document.getElementById(`${key}-input`);
    name.value = value;
  }
};
