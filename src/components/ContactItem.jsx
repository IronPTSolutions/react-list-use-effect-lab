import React from 'react';

const ContactItem = ({ contact, onDelete }) => {
  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phoneNumber}</p>
      {}
      <button onClick={() => onDelete(contact.id)}>Eliminar</button>
    </div>
  );
};

export default ContactItem;