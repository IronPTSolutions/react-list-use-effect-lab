import React from 'react';


const ContactItem = ({ contact }) => {
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
        <h3>{contact.name}</h3>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
      </div>
    );
  };
  
  export default ContactItem;