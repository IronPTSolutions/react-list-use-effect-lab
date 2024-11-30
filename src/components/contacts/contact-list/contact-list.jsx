import { useEffect, useState } from "react";
import ContactItem from "../contact-item/contact-item";
import contactsData from "../../../data/users.json";

function ContactList({ className = '' }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contactsData);
  }, []);

  const handleOnDelete = (contact) => {
    const filteredContacts = contacts.filter((c) => c.id !== contact.id);
    setContacts(filteredContacts);
  }

  return (
    <div className={`d-flex flex-wrap gap-3 ${className}`}>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={handleOnDelete} />
      ))} 
    </div>
  );
}

export default ContactList;