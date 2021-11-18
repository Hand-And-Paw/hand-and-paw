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
    <input id="${formId}-name" type="name" name="name"/>
 
  </div>
  <div class="form-control">
    <label for="phone-number">Phone number</label><br />
    <input id="${formId}-phone" type="number" name="phone" />

  </div>
  <div class="form-control">
    <label for="email">Email</label><br />
    <input id="${formId}-email" type="email" name="email" autocomplete="email"  required/>
   
  </div>
  <div class="form-control">
  <label for="subject">Subject</label><br />
  <input id="${formId}-subject" type="text" name="subject" />

</div>
  <div class="form-control">
    <label for="Message">Message</label><br />
    <textarea id="${formId}-message" name="message" rows="10" cols="60" required> </textarea>

  </div>
   `;
  const divEl = document.createElement("div");
  const button = document.createElement("button");
  button.id = `${formId}-submit`;
  button.classList.add("button", "regular-button");
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
