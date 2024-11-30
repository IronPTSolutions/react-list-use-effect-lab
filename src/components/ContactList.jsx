import { useEffect, useState } from "react";
import ContactItem from "./ContactItem";
import usersData from "../data/users.json";


const ContactList = () => {
  const [contacts, setContacts] = useState([]); 
  useEffect(() => {
    setContacts(usersData);
  }, []);

  return (
    <div>
      <h2>Lista de contactos</h2>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
