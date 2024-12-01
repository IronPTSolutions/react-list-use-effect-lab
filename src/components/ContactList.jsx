import React, { useState, useEffect } from "react";
import ContactItem from "./ContactItem";
import usersData from "../data/users.json";

const ContactList = () => {
  const [contacts, setContacts] = useState([]); // Estado para contactos
  const [showContacts, setShowContacts] = useState(false); // Estado para visibilidad

  // Carga inicial de contactos
  useEffect(() => {
    setContacts(usersData); // Carga contactos desde el JSON
  }, []);

  // Función para alternar visibilidad
  const toggleContacts = () => {
    setShowContacts((prevShowContacts) => !prevShowContacts);
  };

  // Función para eliminar un contacto
  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      {/* Botón para alternar visibilidad */}
      <button
        className={`btn ${showContacts ? "btn-danger" : "btn-primary"}`}
        onClick={toggleContacts}
      >
        {showContacts ? "Ocultar contactos" : "Ver todos"}
      </button>

      {/* Mostrar lista si `showContacts` es verdadero */}
      {showContacts && (
        <div>
          <h2>Lista de contactos</h2>
          <ul>
            {contacts.map((contact) => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onDelete={handleDeleteContact}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContactList;
