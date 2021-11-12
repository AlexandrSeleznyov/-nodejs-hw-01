const path = require("path");
const fs = require("fs").promises;
const contactsPath = path.resolve("");

async function listContacts() {
  try {
    const data = await fs.readFile(`${contactsPath}/db/contacts.json`, "utf8");
    const contacts = JSON.parse(data);
    console.table(contacts);
    return contacts;
  } catch (error) {
    throw error;
  }
}
module.exports = listContacts;
