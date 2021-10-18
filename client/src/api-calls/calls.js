/* eslint-disable no-console */
const performFetch = async (path) => {
  const URL = `http://localhost:8080/api/${path}`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `bearer ${state.token}`,
    },
  });
  if (!response.ok) {
    console.error(
      `HTTP error! status: ${response.status} ${response.message}\n-> ${URL}`
    );
  }
  const data = await response.json();

  return data;
};

export const fetchUsers = async () => {
  return performFetch("user-subscriber");
};
