import { useEffect, useState } from "react"; 
import ContactItem from "../contact-item/ContactItem";
import contactData from "../../../data/users.json";

function ContactList () {
    const [contacts, setContacts ] = useState ([]);

    useEffect(()=> {
        setContacts (contactData)
    }, []);

    return (
        <div>
            {contacts.map((contact) => (
                 <ContactItem key={contact.id} contact={contact} />))}
        </div>
        
    );
}

export default ContactList;