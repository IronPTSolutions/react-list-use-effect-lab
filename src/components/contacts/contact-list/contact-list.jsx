import { useEffect, useState } from "react";
import ContactItem from "../contact-item/contact-item";
import contactsData from "../../../data/users.json";

function ContactList({ className = '' }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contactsData);
  }, []);

  const handleEventDeletion = (contact) => {
    const filteredContacts = contacts.filter((c) => c.id !== contact.id);
    setContacts(filteredContacts);
  }

  return (
    <div className={`d-flex flex-wrap gap-3 ${className}`}>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={handleEventDeletion} />
      ))} 
    </div>
  );
}

export default ContactList;