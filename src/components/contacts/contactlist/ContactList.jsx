import { useEffect, useState } from "react";
import ContactItem from "../contactitem/contactItem";
import contactData from "../../../data/users.json"



function ContactList ({ className = '', name }) {
    const [contacts, setContacts] = useState ([]);

    useEffect(() => {
        const filteredContacts =  name ?
            contactData.filter((contact) => contact.name.toLowerCase().includes(name?.toLowerCase())) :
            contactData;
                
        setContacts(filteredContacts)
    }, [name]);

    const handleContactDeletion  = (contact) => {
        const filteredContacts = contacts.filter((c) => c.id !== contact.id);
        setContacts(filteredContacts);
    }
    
    return (
        <div className={`d-flex flex-wrap ${className}`}> 
            {contacts.map((contact) =>(
                <ContactItem key={contact.id} contact={contact} onDelete={handleContactDeletion}/>
            ))}
        </div>
    )
}

export default ContactList;