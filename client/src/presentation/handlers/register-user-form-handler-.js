import { registerUser } from "../../data-access/user-access/register-user.js";

export const registerUserFormHandler = async () => {
  // event.preventDefault();
  const form = document.getElementById("register-form");
  const formData = new FormData(form);
  const userObj = {};
  for (const key of formData.keys()) {
    userObj[key] = formData.get(key);
  }
  const post = await registerUser(userObj);
  return post;

  // form.innerHTML = `<h1> ${post.message} </h1>`;
  // form.innerHTML = `Registered`;
};
