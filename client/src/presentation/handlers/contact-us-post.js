const _ = (id) => {
  return document.getElementById(id);
};
export const contactUsPostHandler = (event) => {
  debugger;
  event.preventDefault();
  _("send-contact-message").disabled = true;
  _("status").innerHTML = "please wait ...";
  const formData = new FormData();
  formData.append("name", _("name").value);
  formData.append("email", _("email").value);
  formData.append("message", _("message").value);
  const ajax = new XMLHttpRequest();
  ajax.open("POST", `/contact.php`);
  ajax.onreadystatechange = () => {
    if (ajax.readyState === 4 && ajax.status === 200) {
      if (ajax.responseText === "success") {
        _("my_form").innerHTML = `<h2>Thanks ${
          _("n").value
        }, your message has been sent.</h2>`;
      } else {
        _("status").innerHTML = ajax.responseText;
        _("send-contact-message").disabled = false;
      }
    }
  };
  ajax.send(formData);
};
