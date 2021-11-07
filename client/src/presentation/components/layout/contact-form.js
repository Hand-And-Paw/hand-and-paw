const contactForm = (title, id) => {
  const form = document.createElement("form");
  form.className = "modal-form";
  form.id = id;
  form.action = "#";
  form.innerHTML = `
  <h1>${title}</h1>
  <div class="form-control">
    <label for="name">Name</label><br />
    <input type="name" name="name"/><br />
    <small> Error message </small>
  </div>
  <div class="form-control">
    <label for="phone-number">Phone number</label><br />
    <input type="number" name="phone-number" /><br />
    <small> Error message </small>
  </div>
  <div class="form-control">
    <label for="email">Email</label><br />
    <input type="email" name="email" autocomplete="email"  required/><br />
    <small> Error message </small>
  </div>
  <div class="form-control">
    <label for="Message">Message</label><br />
    <textarea rows="14" cols="60" required> </textarea>
    <small> Error message </small>
  </div>
  <button id = "send-${id}-form" class="button form-button">Send</button>
   `;
  return form;
};

export default contactForm;
