"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                formData,
                'YOUR_USER_ID' // Replace with your EmailJS user ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Message sent successfully!');
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        message: '',
                    });
                },
                (error) => {
                    console.error(error.text);
                    alert('Failed to send message, please try again later.');
                }
            );
    };

    return (
        <section id='kontakt'>
            <div className="contact-form-container">
                <h2 className='white'>Imate projekat na umu? Hajde da zajedno izgradimo nešto izvanredno.</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Ime"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Prezime"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Broj telefona"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Poruka"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" className="submit-button">
                        Pošalji poruku
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
