const path = require("path");
const fs = require("fs");
const contactsPath = path.resolve("");
const { v4: uuidv4 } = require("uuid");

function listContacts() {
  fs.readFile(`${contactsPath}/db/contacts.json`, "utf8", (error, data) => {
    if (error) {
      console.log(error);
    }
    const contact = JSON.parse(data);
    console.table(contact);
  });
}

function getContactById(contactId) {
  fs.readFile(`${contactsPath}/db/contacts.json`, "utf8", (error, data) => {
    if (error) {
      console.error(error);
    }

    const contacts = JSON.parse(data);

    const contact = contacts.find(
      (contact) => contact.id === parseInt(contactId)
    );

    console.table(contact);
  });
}

function removeContact(contactId) {
  fs.readFile(`${contactsPath}/db/contacts.json`, "utf8", (error, data) => {
    if (error) {
      console.error(error);
    }

    const contacts = JSON.parse(data);

    const contact = contacts.filter(
      (contact) => contact.id !== parseInt(contactId)
    );
    fs.writeFile(
      `${contactsPath}/db/contacts.json`,
      JSON.stringify(contact),
      (err) => {
        if (err) throw err;
      }
    );
    console.table(contact);
  });
}

function addContact(name, email, phone) {
  fs.readFile(`${contactsPath}/db/contacts.json`, "utf8", (error, data) => {
    if (error) {
      console.error(error);
    }

    const contacts = JSON.parse(data);

    const currentContact = { id: uuidv4(), name, email, phone };

    const contact = [...contacts, currentContact];
    fs.writeFile(
      `${contactsPath}/db/contacts.json`,
      JSON.stringify(contact),
      (err) => {
        if (err) throw err;
      }
    );
    console.table(contact);
  });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
