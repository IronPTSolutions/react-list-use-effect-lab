import React, { useState, useEffect, useMemo } from "react";
import ContactList from "../ContactList";
import SearchBar from "../SearchBar";
import ContactForm from "../ContactForm";
import contactImage from "../contacts.jpg";
import usersData from "../../data/users.json";

function Home() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  // Carga inicial de contactos desde el JSON
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

    // Verifica duplicados basados en el email
    const isDuplicate = contacts.some(
      (contact) => contact.email === newContact.email
    );
    if (isDuplicate) {
      alert("El contacto ya existe.");
      return;
    }

    // Agrega el nuevo contacto con un ID único
    const contactWithId = { ...newContact, id: Date.now().toString() };
    setContacts((prevContacts) => [...prevContacts, contactWithId]);
  };

  // Maneja la eliminación de contactos
  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  // Filtra los contactos basados en el filtro actual
  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <div className="container">
      <h1>My Contacts</h1>
      <p>Gestiona tus contactos fácilmente. Añade, busca y elimina contactos desde esta interfaz amigable.</p>

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img src={contactImage} className="img-fluid" alt="Contactos" />
        </div>
        <div className="col-md-6 col-sm-12">
          <ContactForm onAddContact={handleAddContact} />
        </div>
      </div>

      <div className="mt-4">
        <SearchBar onFilterChange={handleFilterChange} />
        {contacts.length === 0 ? (
          <p>No hay contactos disponibles. Añade nuevos contactos.</p>
        ) : filteredContacts.length > 0 ? (
          <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
        ) : (
          <p>No hay contactos que coincidan con la búsqueda.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
