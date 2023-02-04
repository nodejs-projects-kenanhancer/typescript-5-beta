type Mail = { message: string };

type Phone = { text: string };

type Contact = Mail | Phone;

function info(contact: Contact) {
  if ("message" in contact) {
    return contact.message;
  }

  return contact.text;
}

export {};
