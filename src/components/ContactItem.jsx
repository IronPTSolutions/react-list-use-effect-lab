import React from 'react';

const ContactItem = ({ contact, onDelete }) => {
  return (
    <div className="card">
        <div className="card-body">
            <h2 className="card-title">{contact.name}</h2>
                <ul>
                    <li className="list-group-item"><p className="card-text"> Email: {contact.email}</p></li>
                    <li className="list-group-item"><p className="card-text">Phone: {contact.phoneNumber}</p></li>
                    <li className="list-group-item"><button type="button" className="btn btn-outline-danger" onClick={() => onDelete(contact.id)}>Eliminar</button></li>
                </ul>
        </div>
    </div>
  );
};
export default ContactItem