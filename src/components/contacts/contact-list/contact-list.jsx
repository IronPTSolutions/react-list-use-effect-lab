import { useEffect, useState } from 'react';
import contactsData from '../../../data/users.json';
import ContactItem from '../contact-item/contact-item';

function ContactList({ className = '', filter = {} }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const filteredContacts = contactsData.filter((contact) => {
      return (!filter.name || contact.name.toLocaleLowerCase().includes(filter.name.toLocaleLowerCase())) &&
        (!filter.gender || contact.gender === filter.gender)
    })
    setContacts(filteredContacts);
  }, [filter]);

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