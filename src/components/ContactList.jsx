import { useEffect, useState } from "react";
import ContactItem from "./ContactItem";
import usersData from "../data/users.json";


const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [showContacts, setShowContacts] = useState(false); // Estado para mostrar/ocultar contactos

  // Cargar contactos iniciales
  useEffect(() => {
    setContacts(usersData); // Asigna datos iniciales desde un archivo JSON
  }, []);

  // Función para eliminar un contacto
  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  // Función para alternar la visibilidad de los contactos
  const toggleContacts = () => {
    setShowContacts((prevShowContacts) => !prevShowContacts);
  };

  return (
    <div>
      {/* Botón para alternar la visibilidad */}
      <button
        className={`btn ${showContacts ? "btn-danger" : "btn-primary"}`}
        onClick={toggleContacts}
      >
        {showContacts ? "Ocultar contactos" : "Ver todos"}
      </button>

      {/* Mostrar lista solo si `showContacts` es verdadero */}
      {showContacts && (
        <div>
          <h2>Todos los contactos</h2>
          <ul>
            {contacts.map((contact) => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onDelete={handleDeleteContact} // Pasar función de eliminación como prop
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContactList;
