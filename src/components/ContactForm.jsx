import React, { useState } from "react";

function ContactForm({ onAddContact }) {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    gender: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name && contact.email && contact.phoneNumber && contact.photo) {
      onAddContact(contact);
      setContact({ name: "", email: "", phoneNumber: "", gender: "", photo: null });
    } else {
      alert("Por favor, completa todos los campos obligatorios.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          value={contact.phoneNumber}
          onChange={handleChange}
          placeholder="Teléfono"
          required
        />
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <button type="submit">Agregar contacto</button>
      </form>
    </div>
  );
}

export default ContactForm;
