/* eslint-disable no-console */
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTY4MDY5ODFiNzk4OWNkMWQzZDg3M2EiLCJ1c2VyTmFtZSI6InJhZmFlbCAxMjMiLCJ1c2VyRW1haWwiOiJhYmNkQGh5Zi5jb20iLCJpYXQiOjE2MzQyODk4NDJ9.mzZnP4Znx0HmYfq_53CalJCvK9St_h-MPxQThfjdvvE";

export const performFetch = async (path) => {
  const URL = `http://localhost:8080/api/${path}`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
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
