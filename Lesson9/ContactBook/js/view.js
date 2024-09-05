// Show to user
const contactList = {
  renderWithTemplate(contacts, element, template) {
    let html = '';
    contacts.forEach((contact) => {
      html += Mustache.render(template, contact);
    });
    element.innerHTML = html;
  },
};
