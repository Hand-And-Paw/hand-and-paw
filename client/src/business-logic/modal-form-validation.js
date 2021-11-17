/* eslint-disable no-use-before-define */
// show error

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

// show success

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// check email valid

const checkEmail = (input) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  }
  showError(input, "Email has invalid format.");
  return false;
};

const checkPhoneNumber = (input) => {
  const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  }
  showError(input, "This entry can only contain numbers.");
  return false;
};

const checkUrl = (string) => {
  try {
    return Boolean(new URL(string));
  } catch (e) {
    return false;
  }
};

// check required fields

const checkRequired = (inputArr) => {
  let valid = true;
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      // showError(input, `${getFieldName(input)} is required.`);
      showError(input, `Field is required.`);
      valid = false;
    } else {
      showSuccess(input);
    }
  });
  return valid;
};

// check input length
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    // showError(input, `${input.name} must be at least ${min} characters`);
    showError(input, `Must be at least ${min} characters`);

    return false;
  }
  if (input.value.length > max) {
    // showError(input, `${input.name} must be less then ${max} characters`);
    showError(input, `Must be at least ${min} characters`);

    return false;
  }
  showSuccess(input);
  return true;
};

// check passwords match
const checkPasswordMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match.");
    return false;
  }
  return true;
};

const checkEmailMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "Emails do not match.");
    return false;
  }
  return true;
};

// get fieldname

const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};
export {
  checkEmail,
  checkLength,
  checkPasswordMatch,
  checkRequired,
  showError,
  checkEmailMatch,
  checkPhoneNumber,
  checkUrl,
};
