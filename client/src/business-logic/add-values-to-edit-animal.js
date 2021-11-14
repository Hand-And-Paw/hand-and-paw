/* eslint-disable no-continue */
export const addValuesToEditAnimal = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    if (
      key === "isPrincipal" ||
      key === "fieldname" ||
      key === "_id" ||
      key === "userId" ||
      key === "registerDate" ||
      key === "updateDate" ||
      key === "__v" ||
      key === "pictures"
    ) {
      continue;
    }
    const name = document.getElementById(`edit-${key}`);
    name.value = value;
  }
};
