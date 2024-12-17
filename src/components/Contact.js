import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import FadeInSection from './FadeInSection';
import './Contact.scss';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // You would replace this with your actual email sending logic
      // This is a placeholder for client-side email submission
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'khanhhuyenx20@gmail.com'
        })
      });

      if (response.ok) {
        alert('Message sent successfully!');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <FadeInSection>
        <div id="contact" className="contact">
          <div className="section-header">
            <span className="section-title">
              <FaPaperPlane className="section-icon" /> / contact
              <div className="dash"></div>
            </span>

            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-method">
                  <FaEnvelope className="contact-icon" />
                  <a 
                    href={`mailto:khanhhuyenx20@gmail.com`} 
                    className="contact-link"
                  >
                    khanhhuyenx20@gmail.com
                  </a>
                </div>
                <div className="contact-method">
                  <FaPhone className="contact-icon" />
                  <a 
                    href={`tel:+16474519838`} 
                    className="contact-link"
                  >
                    +1 (647) 451-9838
                  </a>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Contact;