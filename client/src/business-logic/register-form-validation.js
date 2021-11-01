export const registerFormValidation = (event) => {
  //

  const username = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const repeatPassword = document.getElementById("repeat-password");

  const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
  };

  const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
  };

  //email
  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  //
  event.preventDefault();

  if (event.target.id === "submit-register-form") {
    if (username.value === "") {
      showError(username, "Username is required");
    } else {
      showSuccess(username);
    }
    if (email.value === "") {
      showError(email, "E-mail is required");
    } else if (!isValidEmail(email.value)) {
      showError(email, "E-mail is not valid");
    } else {
      showSuccess(email);
    }
  }
};
