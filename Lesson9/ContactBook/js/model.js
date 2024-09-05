// Work with data

const contactBook = {
  contacts: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      phone: '1234123412',
      email: 'test@test.com',
      description: 'Software Developer at Tech Corp.',
    },
    {
      id: 2,
      firstName: 'John2',
      lastName: 'Doe',
      phone: '2222222222',
      email: 'test@test.com',
      description: 'Software Developer at Tech Corp.',
    },
    {
      id: 3,
      firstName: 'John3',
      lastName: 'Doe',
      phone: '3333333333',
      email: 'test@test.com',
      description: 'Software Developer at Tech Corp.',
    },
  ],

  lastId: 3,

  add(contact) {
    this.lastId++;
    contact.id = this.lastId;
    this.contacts.push(contact);
  },
  remove(id) {
    let index = this.contacts.findIndex(x => x.id == id);
    this.contacts.splice(index, 1);
  },
  update(id, contact) {
    let index = this.contacts.findIndex(x => x.id == id);
    this.contacts[index] = contact;
  },
  find(id) {
    let index = this.contacts.findIndex(x => x.id == id);
    return this.contacts[index];
  },

};
