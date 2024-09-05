// COntrol action of user - business logic
const html = document.querySelector('#contact-list');
const template = document.querySelector('#template').innerHTML;
const contactForm = document.querySelector('#contactForm');
//Inputs
const firstNameInput = document.querySelector('#firstNameInput');
const lastNameInput = document.querySelector('#lastNameInput');
const phoneInput = document.querySelector('#phoneInput');
const emailInput = document.querySelector('#emailInput');
const descriptionInput = document.querySelector('#descriptionInput');

let editId = null;

function render() {
    contactList.renderWithTemplate(contactBook.contacts, html, template);
}

contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Do not sent data , deny default operation fro browser

    let contact = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
        description: descriptionInput.value,
    }
    if (editId == null) {
        contactBook.add(contact);
    } else {
        contactBook.update(editId, contact);
        editId = null;
        firstNameInput.value = '';
        lastNameInput.value = '';
        phoneInput.value = '';
        emailInput.value = '';
        descriptionInput.value = '';
    }
    render();
});

function remove(id) {
    // alert(id);
    contactBook.remove(id);
    render();
}

function edit(id) {
    const contact = contactBook.find(id);

    editId = contact.id;

    firstNameInput.value = contact.firstName;
    lastNameInput.value = contact.lastName;
    phoneInput.value = contact.phone;
    emailInput.value = contact.email;
    descriptionInput.value = contact.description;



    render();
}


render();