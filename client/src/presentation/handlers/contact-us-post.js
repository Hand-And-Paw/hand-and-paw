/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { contactUsPostEmail } from "../../data-access/emails/contact-us.js";
import {
  checkEmail,
  checkPhoneNumber,
  checkLength,
} from "../../business-logic/modal-form-validation.js";

const _ = (id) => {
  return document.getElementById(id);
};
export const contactUsPostHandler = async (event) => {
  event.preventDefault();

  const areValidInputs = validate();

  if (areValidInputs) {
    const form = _("contact-us-form");
    _("contact-us-form-submit").disabled = true;
    _("status").innerHTML = "please wait ...";
    const formData = new FormData(form);
    const userObj = {};
    for (const key of formData.keys()) {
      if (!formData.get(key)) {
        _("status").innerHTML = "Message not sent, please fill all the fields";
        _("contact-us-form-submit").disabled = false;
        return;
      }
      userObj[key] = formData.get(key);
    }

    const postEmail = await contactUsPostEmail(userObj);
    if (postEmail.success) {
      _(
        "contact-us-form"
      ).innerHTML = `<h2>Thanks ${userObj.name}, your message has been sent.</h2>`;
    } else {
      _("status").innerHTML = "An error has ocurred try again later";
      _("contact-us-form-submit").disabled = false;
    }
  }
};

function validate() {
  const form = document.querySelector("#contact-us-form");
  const name = form.querySelector("#contact-us-form-name");
  const phone = form.querySelector("#contact-us-form-phone");
  const email = form.querySelector("#contact-us-form-email");
  const subject = form.querySelector("#contact-us-form-subject");
  const message = form.querySelector("#contact-us-form-message");

  let isValid = true;
  if (!checkLength(name, 3, 25)) {
    isValid = false;
  }
  if (!checkPhoneNumber(phone)) {
    isValid = false;
  }
  if (!checkLength(subject, 12, 50)) {
    isValid = false;
  }

  if (!checkLength(message, 30, 500)) {
    isValid = false;
  }
  if (!checkEmail(email)) {
    isValid = false;
  }

  return isValid;
}
