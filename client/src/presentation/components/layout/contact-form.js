/**
 * @param {string} title form header
 * @param {string} formId form id, gives same id with "-submit" to the form button
 * @returns contact form: name, phone, email, subject, message with submit button
 */

const contactForm = (title, formId, handler) => {
  const form = document.createElement("form");
  form.className = "modal-form";
  form.id = formId;
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
    <input type="number" name="phone" /><br />
    <small> Error message </small>
  </div>
  <div class="form-control">
    <label for="email">Email</label><br />
    <input type="email" name="email" autocomplete="email"  required/><br />
    <small> Error message </small>
  </div>
  <div class="form-control">
  <label for="subject">Subject</label><br />
  <input type="text" name="subject" /><br />
  <small> Error message </small>
</div>
  <div class="form-control">
    <label for="Message">Message</label><br />
    <textarea name="message" rows="10" cols="60" required> </textarea>
    <small> Error message </small>
  </div>
   `;
  const divEl = document.createElement("div");
  const button = document.createElement("button");
  button.id = `${formId}-submit`;
  button.classList.add("button", "form-button");
  button.type = "submit";
  button.innerHTML = "Send";
  button.addEventListener("click", handler);
  const br = document.createElement("br");
  const span = document.createElement("span");
  span.id = "status";
  divEl.appendChild(button);
  divEl.appendChild(br);
  divEl.appendChild(span);
  form.appendChild(divEl);
  return form;
};

export default contactForm;
