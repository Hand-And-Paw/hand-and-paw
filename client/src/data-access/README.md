How data is stored in teh system.

# Data Access

Functions you can use in your Business Logic to access and modify program state.

Each function is stored in a separate file so that all actions are easily visible, and so that dependency graphs clearly indicate which actions are used where.

- [Data Access](#data-access)
  - [User access](#user-access)
    - [`getUsers = async ()`](#getusers--async-)
    - [`getUser = async (id="")`](#getuser--async-id)
    - [`deleteUser = async (id = "")`](#deleteuser--async-id--)
    - [`registerUser = async (newUser = {}) `](#registeruser--async-newuser---)
    - [`updateUser = async (userId = "", updateData = {}`](#updateuser--async-userid---updatedata--)
    - [`deleteAnimalRegistration = async (userId = "", animalId = ""`](#deleteanimalregistration--async-userid---animalid--)
    - [`addFavorite = async (userId = "", animalId)`](#addfavorite--async-userid---animalid)
    - [`removeFavorite = async (userId = "", animalId)`](#removefavorite--async-userid---animalid)

> These Data Access functions will only work in the browser, not in Node.js

---

## User access

A collection of functions to make multiple requests to the database

### [`getUsers = async ()`](./user-access/get-users.js)

This function send a get request to the backend requesting all the users from database and the return value is an array where each element is an object that represents a user

- **args**:
  - No arguments
- **returns**: `[{user},{user}]`, an array of objects or an empty array if there are not users in hte collections

### [`getUser = async (id="")`](./user-access/get-user.js)

This function send a get request to the backend requesting the user with the id passed as argument

- **args**:
  - _id (string)_: The user id to find
- **returns**: [{user}] an array with one element that is the object user or an empty array if there is not user

- **side-effect**: none

<details>
<summary>use case</summary>

```js
import { performFetch } from "../api-calls/calls.js";
import { state } from "./state/state.js";
// Check if the animal is favorite in current user
const currentUser = await getUser(localStorage.getItem("userId"));
const checkFavorite = currentUser[0]?.favorites.some(
  (favoriteId) => favoriteId === state.animalId
);
```

</details>

### [`deleteUser = async (id = "")`](./user-access/delete-user.js)

Delete send a delete request to the backend requesting delete user from database and all animals that the user has published

- **args**: the id of the user
- **returns**: An object {message:"success message"} with `message` as property and the value is a success message with the id of the user removed..
- **throws**:
  - An error is the user doesn't exist
  - If the id have an invalid format
- **side-effect**: none

<details>
<summary>use case</summary>

```js
import { deleteUser } from "../data-access/user-access/delete-user.js";
import { state } from "./state/state.js";
// a handler that unsubscribe the user

export const unsubscribeUserHandler = (event) => {
  const deleteUser = await deleteUser(state.userId);
  if (deleteUser.message.includes("state.userId")) {
    const titleMessage = document.getElementById("title-message");
    titleMessage.innerText = `You're successfully unsubscribed`;
  }
};
```

</details>

### [`registerUser = async (newUser = {}) `](./user-access/register-user.js)

Send a post request to backend that creates a new user in the database.

- **args**:
  - _object {name, password, repeatPassword, email}_
  - _value (JSON data)_: the new data to save
- **returns**: `{}`, an object that is the user registered..
- **throws**:
  - An error is one of the parameters are missing,
  - If passwords do not match
  - Is email already exists
- **side-effect**: no side effects.

<details>
<summary>use case</summary>

```js
import { registerUser } from "./data-access/register-user.js";

// a handler that get data if the form
export const registerUserHandler = (event) => {
  event.preventDefault();
  const form = document.getElementById("register-form");
  const formData = new FormData(form);
  const userObj = {};
  for (const key of formData.keys()) {
    userObj[key] = formData.get(key);
  }
  const post = await registerUser(userObj);

  if (post?.user?._id) {
    form.innerHTML = `<p>${post.message}</p>`;
    setTimeout(closeModal, 1000);
    setTimeout(renderLoginForm, 1120);
  }
  return post;
};
```

</details>

### [`updateUser = async (userId = "", updateData = {}`](./user-access/update-user.js)

Send a PUT request to the backend that updates all values that are added by the user

- **args**:
  - _userId (string)_: the id of the use to be updated
- **returns**: `[{user}]`, the user object ina an array with properties updated.
- **throws**:
  - _ValidationError_: If the userId is not a string, or in he format that is stored

<details>
<summary>use case</summary>

```js
import { update } from "... ... data-access/update-user.js";

// a handler
export const updateUserHandler = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const userId = window.localStorage.getItem("userId");
  formData.append("id", window.localStorage.getItem("userId"));

  const post = await updateUser(userId, formData);
};
```

</details>

### [`deleteAnimalRegistration = async (userId = "", animalId = ""`](./user-access/delete-animal-registration.js)

Send a patch request to the backend that Removes the animal in animal collection and the animal id in he user registeredAnimalsProperties

- **args**:
  - _userId (string)_ the id of the user.
  - _animalId (string)_ the id of the animal.
- **returns**: `{message: 'success message...'}`.
- **throws**:
  - ValidationError if the ids are not in correct format or in not a string
  - ValidationError if the animal doesn't exist
  - ValidationError if the user doesn't exist
  - ValidationError if the animal doesn't belong to the user
- **side-effect**: The animal will be removed from database and also from user registered animals

<details>
<summary>use case</summary>

```js
import { deleteAnimalRegistration } from "... ... data-access/user-access/delete-animal-registration.js";

// a handler that deletes the users posted animal
export const deleteUserAnimalHandler = async (event) => {
  event.stopPropagation();
  // get current user id
  const currentUser = localStorage.getItem("userId");
  // delete animal
  const animalToDelete = e.target.closest(".animal").id;
  await deleteAnimalRegistration(currentUser, animalToDelete);
};
```

</details>

---

### [`addFavorite = async (userId = "", animalId)`](./user-access/add-favorite.js)

Send a PATCH request

- **args**:
  - _userId (string)_ the id of the user.
  - _animalId (string)_ the id of the animal.
- **returns**: `{message: 'success message...'}`.
- **throws**:
  - ValidationError if the ids are not in correct format or in not a string
  - ValidationError if the animal doesn't exist
  - ValidationError if the user doesn't exist
  - ValidationError if the animal doesn't belong to the user
- **sideEffect** none

<details>
<summary>use case</summary>

```js
import { hasKey } from "... ... data-access/has-key.js";
import { remove } from "... ... data-access/remove.js";

// a handler that adds the favorite one the heart is clicked
export const addFavorite = async (event) => {
  const imgFile = target.closest("#heart").src.split("/").pop();
  const userId = localStorage.getItem("userId");
  const animalId = event.target.closest(".animal").id;

  if (imgFile === "heart.svg") {
    target.src = "/assets/icons/active-heart.svg";
    // change DB
    target.classList.toggle("favorite");
    if ([...target.classList].includes("favorite")) {
      await addFavorite(userId, animalId);
    }
  }
};
```

</details>

### [`removeFavorite = async (userId = "", animalId)`](./user-access/remove-favorite.js)

Sends a PATCH request to the backend removing the animal id in favorites collection

- **args**:
  - _userId (string)_ the id of the user.
  - _animalId (string)_ the id of the animal.
- **returns**: `{message: 'success message...'}`.
- **throws**:
  - ValidationError if the ids are not in correct format or in not a string
  - ValidationError if the animal doesn't exist
  - ValidationError if the user doesn't exist
  - ValidationError if the animal doesn't belong to the user
- **sideEffect** updates the favorites array by removing tha animal id passed as argument

<details>
<summary>use case</summary>

```js
import { allKeys } from "... ... data-access/all-keys.js";

// a handler that remove the favorite
export const listUsers = (e) => {
  e.stopPropagation();
  // get current user id
  const currentUser = localStorage.getItem("userId");
  // delete animal
  const animalToDelete = e.target.parentElement.closest(
    ".search-result-card"
  ).id;
  await removeFavorite(currentUser, animalToDelete);
  // update search results
  const deleteCard = e.target.parentElement.closest(".search-result-card");
  deleteCard.remove();
};
```

</details>

---
