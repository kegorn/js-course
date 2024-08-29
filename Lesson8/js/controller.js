// Contol action of user - bisnes logic
let html = document.querySelector('#contact-list');
let template = document.querySelector('#template').innerHTML;

// contactList.render(contactBook.contacts, html);

// https://github.com/janl/mustache.js
contactList.renderWithTemplate(contactBook.contacts, html, template);
