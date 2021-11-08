import { contactGiverPostEmail } from "../../data-access/emails/contact-giver.js";
import state from "../../data-access/state/state.js";

const _ = (id) => {
  return document.getElementById(id);
};
export const contactGiverPostHandler = async (event) => {
  event.preventDefault();
  const form = _("contact-giver-form");
  _("contact-giver-form-submit").disabled = true;
  _("status").innerHTML = "please wait ...";
  const formData = new FormData(form);
  formData.append("id", state.userId);

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
};
