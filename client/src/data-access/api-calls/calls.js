/* eslint-disable no-console */

import { state } from "../state/state.js";

export const performFetch = async (path) => {
  const URL = `${window.location.origin}/api/${path}`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${!state.token ? "" : state.token}`,
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
      Authorization: `bearer ${!state.token ? "" : state.token}`,
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    console.error(`HTTP error! status: ${response.message}\n-> ${URL}`);
  }
  const data = await response.json();

  return data;
};

export const performPostFormData = async (path, body) => {
  const URL = `${window.location.origin}/api/${path}`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `bearer ${!state.token ? "" : state.token}`,
    },
    body: JSON.stringify(body),
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
      Authorization: `bearer ${!state.token ? "" : state.token}`,
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

export const performUpdate = async (path, body) => {
  const URL = `${window.location.origin}/api/${path}`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `bearer ${!state.token ? "" : state.token}`,
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    console.error(`HTTP error! status: ${response.message}\n-> ${URL}`);
  }
  const data = await response.json();

  return data;
};

export const performSpecificUpdate = async (path, body) => {
  const URL = `${window.location.origin}/api/${path}`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: "PATCH",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `bearer ${!state.token ? "" : state.token}`,
    },
    body: JSON.stringify(body),
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
      Authorization: `bearer ${!state.token ? "" : state.token}`,
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    console.error(`HTTP error! status: ${response.message}\n-> ${URL}`);
  }
  const data = await response.json();

  return data;
};
