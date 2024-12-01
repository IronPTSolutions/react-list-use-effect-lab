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
    <div className="col-md-12">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={contact.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={contact.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="phoneNumber">
            Phone Number:
          </label>
          <input
            type="tel"
            className="form-control"
            name="phoneNumber"
            id="phoneNumber"
            value={contact.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="gender">
            Gender:
          </label>
          <select
            className="form-select"
            name="gender"
            id="gender"
            value={contact.gender}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="formFile">
            Contact Photo:
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            name="photo"
            accept=".jpg, .jpeg, .png"
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-outline-success">
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
