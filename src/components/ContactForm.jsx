import React, { useState } from "react";

function ContactForm({ onAddContact }) {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        gender: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevContact) => ({
            ...prevContact,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (contact.name && contact.email && contact.phoneNumber) {
            onAddContact(contact); // Llamar la función del padre
            setContact({ name: "", email: "", phoneNumber: "", gender: "" }); // Limpiar formulario
        } else {
            alert("Por favor, completa todos los campos obligatorios.");
        }
    };

    return (

        <div className="col-md-12">
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label className="form-label">
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={contact.name}
                            onChange={handleChange}
                            placeholder="Enter name"
                            required
                        />
                    </label>
                </div>
                
                <div className="col-md-6">
                    <label className="form-label">
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={contact.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            required
                        />

                    </label>
                </div>
                
                <div className="col-md-6">
                    <label className="form-label">
                        Phone Number:
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={contact.phoneNumber}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            required
                        />
                    </label>
                </div>

                <div className="col-md-6">
                    <label className="form-label">
                        Gender:
                        <select
                            name="gender"
                            value={contact.gender}
                            onChange={handleChange}
                        >
                            <option value="">-- Select Gender --</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                </div>

                <div  className="col-md-6">   
                    <label for="formFile" className="form-label">
                    Foto de contacto</label>
                        <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            accept=".jpg, .jpeg, .png"
                            required
                        />
                </div>

                <div class="col-12">
                    <button type="submit" class="btn btn-outline-success">Add Contact</button>
                </div>
            </form>

        </div>
    );
}

export default ContactForm;
