import { contactUsPostEmail } from "../../data-access/emails/contact-us.js";

const _ = (id) => {
  return document.getElementById(id);
};
export const contactUsPostHandler = async (event) => {
  event.preventDefault();
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
};
