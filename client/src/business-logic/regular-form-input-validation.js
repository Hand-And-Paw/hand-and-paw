/* eslint-disable no-param-reassign */
const renderMessage = (messageEl, text, className) => {
  messageEl.innerHTML = text;
  messageEl.className = className;
};

const checkLength = (input, min, max, className) => {
  if (input.formInput.value.length < min) {
    input.formInput.style.borderColor = "red";
    renderMessage(
      input.formMessage,
      `Must be at least ${min} characters`,
      className
    );
    return false;
  }
  if (input.formInput.value.length > max) {
    input.formInput.style.borderColor = "red";
    renderMessage(
      input.formMessage,
      `Must be less then ${max} characters`,
      className
    );
    return false;
  }
  return true;
};

const checkPhoneNumber = (input, className) => {
  const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
  if (re.test(input.formInput.value.trim())) {
    return true;
  }
  input.formInput.style.borderColor = "red";
  renderMessage(
    input.formMessage,
    "This entry can only contain numbers.",
    className
  );
  return false;
};

const checkUrl = (input, className) => {
  const re =
    // eslint-disable-next-line no-useless-escape
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
  if (re.test(input.formInput.value.trim())) {
    return true;
  }
  input.formInput.style.borderColor = "red";
  renderMessage(
    input.formMessage,
    `Url is not valid must be complete url example: http://www.yourpage.com`,
    className
  );
  return false;
};

const validateForm = (nameEl, phoneEl, websiteEl) => {
  const name = nameEl;
  const phone = phoneEl;
  const website = websiteEl;

  let isValid = true;

  if (!checkLength(name, 3, 25, "failText")) {
    isValid = false;
  }
  if (phone.formInput.value) {
    if (!checkPhoneNumber(phone, "failText")) {
      isValid = false;
    }
  }
  if (website.formInput.value) {
    if (!checkUrl(website, "failText")) {
      isValid = false;
    }
  }
  return isValid;
};

export { validateForm };
