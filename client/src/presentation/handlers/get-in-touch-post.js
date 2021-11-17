/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { contactGiverPostEmail } from "../../data-access/emails/contact-giver.js";
import state from "../../data-access/state/state.js";
import {
  checkEmail,
  checkLength,
  checkPhoneNumber,
} from "../../business-logic/modal-form-validation.js";

const _ = (id) => {
  return document.getElementById(id);
};
export const contactGiverPostHandler = async (event) => {
  event.preventDefault();

  const areInputsValid = validate();

  if (areInputsValid) {
    const form = _("contact-giver-form");
    _("contact-giver-form-submit").disabled = true;
    _("status").innerHTML = "please wait ...";
    const formData = new FormData(form);
    formData.append("id", state.userId);
    formData.append("animalId", state.animalId);

    const userObj = {};
    for (const key of formData.keys()) {
      if (!formData.get(key)) {
        _("status").innerHTML = "Message not sent, please fill all the fields";
        _("contact-giver-form-submit").disabled = false;
        return;
      }
      userObj[key] = formData.get(key);
    }

    const postEmail = await contactGiverPostEmail(userObj);
    if (postEmail.success) {
      _(
        "contact-giver-form"
      ).innerHTML = `<h2>Thanks ${userObj.name}, your message has been sent.</h2>`;
    } else {
      _("status").innerHTML = "An error has ocurred try again later";
      _("contact-giver-form-submit").disabled = false;
    }
  }
};

function validate() {
  const form = document.querySelector("#contact-giver-form");
  const name = form.querySelector("#contact-giver-form-name");
  const phone = form.querySelector("#contact-giver-form-phone");
  const email = form.querySelector("#contact-giver-form-email");
  const message = form.querySelector("#contact-giver-form-message");

  let isValid = true;
  if (!checkLength(name, 3, 25)) {
    isValid = false;
  }
  if (!checkPhoneNumber(phone)) {
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
