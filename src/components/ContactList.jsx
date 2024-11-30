import { useEffect, useState } from "react";
import ContactItem from "./ContactItem";
import usersData from "../data/users.json";

const ContactList = ({ filter }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(usersData);
  }, []);

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Lista de contactos</h2>
      {filteredContacts.map((contact) => (
        <ContactItem 
          key={contact.id} 
          contact={contact} 
          onDelete={handleDeleteContact} 
        />
      ))}
    </div>
  );
};

export default ContactList;