import React, { useState } from 'react';
import { submitContactForm } from '../services/api';
import "./ContactUs.css"

function ContactUs() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill out all required fields.');
            return;
        }
        await submitContactForm(formData);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className='text-center p-5'>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-3">
                    <input type="text" name="name" placeholder="Name" className="form-control" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <input type="email" name="email" placeholder="Email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <input type="text" name="subject" placeholder="Subject" className="form-control" value={formData.subject} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <textarea name="message" placeholder="Message" rows="4" className="form-control" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button className=" button" type="submit">Send</button>
            </form>

            <h4>Clinic Location</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487294.50353743153!2d78.40804554999998!3d17.412348700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1748093578448!5m2!1sen!2sin"
                title="Clinic Map" width="100%" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default ContactUs;
