import React from "react";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className="list-group">
      {contacts.map((contact) => (
        <li key={contact.id} className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>{contact.name}</strong> - {contact.email} - {contact.phoneNumber}
          </div>
          <button
            onClick={() => onDeleteContact(contact.id)}
            className="btn btn-danger"
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
