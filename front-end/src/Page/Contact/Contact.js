import React, { useState } from "react";
import "./Contact.css";
import logoImg from "../../assets/img2.jpg";
import { APIURL } from "../../config";
import TextInput from "../../components/AudioAnalysis/Form/TextInput/TextInput";

function Contact() {
  const initalFormState = {
    name: "",
    email: "",
    message: "",
  };
  //   Stats
  const [formData, setFormData] = useState(initalFormState);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${APIURL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(
          `Server error: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error.message);
      setFormErrors({
        serverError: "Server error. Please try again later.",
      });
    } finally {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData(initalFormState);
        setFormErrors({});
      }, 5000);
    }
  };

  const getMessage = () => {
    if (formErrors.serverError) {
      return <p>{formErrors.serverError}</p>;
    }
    return <p>Thank you for your message. We will get back to you soon!</p>;
  };

  return (
    <section className="contact">
      <div className="header">
        <h1 className="header-title">
          Contact <span>Us</span>
        </h1>
        <p className="header-description">
          Welcome to Talk2Insights, your trusted partner in audio analysis. Our
          mission is to transform spoken words and sounds into valuable
          insights, making audio data accessible and actionable.
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-logo">
              <img src={logoImg} alt="Company Logo" />
            </div>
          </div>

          <div className="contact-form">
            <h2>Send us a message</h2>
            {formSubmitted ? (
              getMessage()
            ) : (
              <form onSubmit={handleSubmit}>
                <TextInput
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  error={formErrors.name}
                />
                <TextInput
                  label="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  error={formErrors.email}
                />
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
