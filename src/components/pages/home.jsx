import React, { useState, useEffect } from "react";
import ContactList from "../ContactList";
import SearchBar from "../SearchBar";
import ContactForm from "../ContactForm";
import contactImage from "../contacts.jpg";
import usersData from "../../data/users.json";

function Home() {
  const [contacts, setContacts] = useState([]); // Estado para los contactos
  const [filter, setFilter] = useState(""); // Estado para el filtro

  // Carga inicial de contactos
  useEffect(() => {
    setContacts(usersData);
  }, []);

  // Maneja los cambios del filtro
  const handleFilterChange = (value) => {
    setFilter(value);
  };

  // Maneja la adición de nuevos contactos
  const handleAddContact = (newContact) => {
    if (!newContact.name || !newContact.email || !newContact.phoneNumber) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    // Agregar un ID único al nuevo contacto
    const contactWithId = { ...newContact, id: Date.now().toString() };

    setContacts((prevContacts) => [...prevContacts, contactWithId]);
  };

  // Filtra los contactos basados en el filtro actual
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>My Contacts</h1>
      <p>
        Lorem fistrum amatomaa qué dise usteer apetecan diodenoo. Ahorarr te voy
        a borrar el cerito quietooor por la gloria de mi madre no puedor papaar
        papaar.
      </p>

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img
            src={contactImage}
            className="img-fluid"
            id="irregular-shape"
            alt="Contacts"
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <ContactForm onAddContact={handleAddContact} />
        </div>
      </div>

      <div className="mt-4">
        {/* Barra de búsqueda */}
        <SearchBar onFilterChange={handleFilterChange} />

        {/* Lista de contactos filtrados */}
        {filteredContacts.length > 0 ? (
          <ContactList contacts={filteredContacts} />
        ) : (
          <p>
            {filter
              ? "No hay contactos que coincidan con la búsqueda."
              : "No hay contactos disponibles. Añade nuevos contactos."}
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
