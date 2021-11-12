const path = require("path");
const fs = require("fs").promises;
const contactsPath = path.resolve("");
const { v4: uuidv4 } = require("uuid");

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(`${contactsPath}/db/contacts.json`, "utf8");
    const contacts = JSON.parse(data);
    const currentContact = { id: uuidv4(), name, email, phone };
    const contact = [...contacts, currentContact];
    await fs.writeFile(
      `${contactsPath}/db/contacts.json`,
      JSON.stringify(contact)
    );
    console.table(contact);
    return contact;
  } catch (error) {
    throw error;
  }
}

module.exports = addContact;
