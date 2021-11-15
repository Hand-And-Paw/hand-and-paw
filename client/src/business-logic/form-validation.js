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
  showError(input, "Email is not valid.");
  return false;
};

const checkPhoneNumber = (input) => {
  const re =
    /^(\+{1}\d{2,3}\s?[(]{1}\d{1,3}[)]{1}\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  }
  showError(input, "Email is not valid.");
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
      showError(input, `${getFieldName(input)} is required.`);
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
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
    return false;
  }
  if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less then ${max} characters`
    );
    return false;
  }
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
