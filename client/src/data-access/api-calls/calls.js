/* eslint-disable no-console */

export const performFetch = async (path) => {
  const URL = `${window.location.origin}/api/${path}`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
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

export const performPostJson = async (path, body) => {
  const URL = `${window.location.origin}/api/${path}`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    console.error(`HTTP error! status: ${response.message}\n-> ${URL}`);
  }
  const data = await response.json();

  return data;
};

export const performPostFormData = async (path, formDataBody) => {
  const URL = `${window.location.origin}/api/${path}`;
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: "POST",
    body: formDataBody,
  });
  if (!response.ok) {
    console.error(`HTTP error! status: ${response.message}\n-> ${URL}`);
  }
  const data = await response.json();

  return data;
};

export const performDelete = async (path) => {
  const URL = `${window.location.origin}/api/${path}`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
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

export const performUpdate = async (path, formDataBody) => {
  const URL = `${window.location.origin}/api/${path}`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: "PUT",
    body: formDataBody,
  });
  if (!response.ok) {
    console.error(`HTTP error! status: ${response.message}\n-> ${URL}`);
  }
  const data = await response.json();

  return data;
};

export const performSpecificUpdate = async (path, formDataBody) => {
  const URL = `${window.location.origin}/api/${path}`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: "PATCH",
    body: formDataBody,
  });
  if (!response.ok) {
    console.error(`HTTP error! status: ${response.message}\n-> ${URL}`);
  }
  const data = await response.json();

  return data;
};

export const performSpecificUpdateJson = async (path, body) => {
  const URL = `${window.location.origin}/api/${path}`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    console.error(`HTTP error! status: ${response.message}\n-> ${URL}`);
  }
  const data = await response.json();

  return data;
};
