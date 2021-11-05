import { registerUser } from "../../data-access/user-access/register-user.js";

export const registerUserFormHandler = async () => {
  const form = document.getElementById("register-form");
  const formData = new FormData(form);
  const userObj = {};
  for (const key of formData.keys()) {
    userObj[key] = formData.get(key);
  }
  const post = await registerUser(userObj);
  return post;
};
