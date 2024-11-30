import { useEffect, useState } from "react";
import ContactItem from "../contact-item/contact-item";
import contactsData from "../../../data/users.json";

function ContactList({ className = '' }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contactsData);
  }, []);

  return (
    <div className={`d-flex flex-wrap gap-3 ${className}`}>
      {contacts.map((contact) => (
        <ContactItem key={event.id} contact={contact} />
      ))} 
    </div>
  );
}

export default ContactList;