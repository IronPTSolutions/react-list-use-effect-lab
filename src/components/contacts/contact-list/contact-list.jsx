import { useEffect, useState } from 'react';
import contactsData from '../../../data/users.json';
import ContactItem from '../contact-item/contact-item';

function ContactList({ className = '', name }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const filteredContacts = name ? 
      contactsData.filter((contact) => contact.name.toLocaleLowerCase().includes(name)) : 
      contactsData;
    setContacts(filteredContacts);
  }, [name]);

  const handleDeleteContact = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
  }

  return (
    <div className={`d-flex gap-3 flex-wrap ${className}`}>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={handleDeleteContact}/>
      ))}
    </div>
  )
}

export default ContactList