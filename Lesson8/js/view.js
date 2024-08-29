// Show to user
const contactList = {
  render(contacts, element) {
    contacts.forEach((contact) => {
      let section = document.createElement('section');
      section.classList.add('contact');
      section.insertAdjacentHTML('beforeend',`<h2>${contact.firstName} ${contact.lastName}</h2>`);
      section.insertAdjacentHTML('beforeend',`<h2>${contact.phone}</h2>`);
      section.insertAdjacentHTML('beforeend',`<h2>${contact.email}</h2>`);
      section.insertAdjacentHTML('beforeend',`<h2>${contact.discription}</h2>`);
      element.appendChild(section);
    });
  },

  renderWithTemplate(contacts, element, template) {
    let html = '';
    contacts.forEach((contact) => {
      html += Mustache.render(template, contact);
    });
    element.innerHTML = html;
  },
};
