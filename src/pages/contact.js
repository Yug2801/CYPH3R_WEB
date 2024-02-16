import React, { useState } from "react";
import Header from "../components/header";
import Foote from "../components/footer";
import {firestore} from '../firebase/firebase';
import '../css/contact.css';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
    
        const docRef = firestore.collection('Contact').doc(formData.firstName.toLowerCase()); // Use 'contacts' as the collection name
    
    
    await docRef.set({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    });
  
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });
      setErrorMessage("");
  
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage("Error sending message. Please try again later.");
    }
  };

  return (
    <div>
      <Header />
      <div className="container-contact100">
        <div className="Contactus">
          <form className="contact-form" onSubmit={handleSubmit}>
            <span className="contactform-html">Send Us A Message</span>
            <label className="name-html" htmlFor="first-name">
              Tell us your name *
            </label>
            <div className="name-contact">
              <div className="firstname-input" data-validate="Type first name">
                <input
                  id="first-name"
                  className="input100"
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <span className="focus-input100"></span>
              </div>
              <div className="Lastname-input" data-validate="Type last name">
                <input
                  className="input100"
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <span className="focus-input100"></span>
              </div>
            </div>
            <label className="email-html" htmlFor="email">
              Enter your email *
            </label>
            <div className="email-input" data-validate="Valid email is required: ex@abc.xyz">
              <input
                id="email"
                className="input100"
                type="text"
                name="email"
                placeholder="Eg. example@email.com"
                value={formData.email}
                onChange={handleChange}
              />
              <span className="focus-input100"></span>
            </div>
            <label className="call-html" htmlFor="phone">
              Enter phone number
            </label>
            <div className="call-input">
              <input
                id="phone"
                className="input100"
                type="text"
                name="phone"
                placeholder="Eg. 99999 99999"
                value={formData.phone}
                onChange={handleChange}
              />
              <span className="focus-input100"></span>
            </div>
            <label className="Message-html" htmlFor="message">
              Message *
            </label>
            <div className="message-input" data-validate="Message is required">
              <textarea
                id="message"
                className="input100"
                name="message"
                placeholder="Write us a message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <span className="focus-input100"></span>
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="Send-button">
              <button className="button-contact" type="submit">Send Message</button>
            </div>
          </form>
          <div className="left-contact" >
        <div className='contact-info'>
          <div className="location">
            <div>
              <span className="loc-svg"></span>
            </div>
            <div className="Address-val">
              <span className="txt1">Address</span>
              <span className="txt2">IIIT KOTA PERMANENT CAMPUS RANPUR, KOTA</span>
            </div>
          </div>
          <div className="call-contact">
            <div>
              <span className="call-svg"></span>
            </div>
            <div className="Call-text">
              <span className="txt1">Lets Talk</span>
              <span className="txt3">+91 95093 48632</span>
            </div>
          </div>
          <div className="Mail-contact">
            <div>
              <span className="mail-svg"></span>
            </div>
            <div className="Mail-text">
              <span className="txt1">General Support</span>
              <span className="txt3">cyph3r@iiitkota.ac.in</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div ><Foote/></div>
    
        </div>
  );
};

export default ContactUs;
