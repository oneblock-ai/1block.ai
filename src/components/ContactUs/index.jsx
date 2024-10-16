import React, { useState } from 'react';
import './ContactUs.css';
import Link from "@docusaurus/core/lib/client/exports/Link"; // Add styles as per your design
import { Icon } from '@iconify/react';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    companySize: 'Micro (1-9)',
    industry: 'Technology',
    jobTitle: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Handle form submission logic (e.g., sending data to the backend)
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-us-wrapper container">
      <div className="row">
        <h1>Get in touch</h1>
        <p>
          If you are interested in contacting us, please book a meeting with us, and we will get in touch as early as possible.
        </p>

        <div className="col">
          <h2>Want email instead?</h2>
          <Link to="mailto:info@1block.ai" className="icon-link">
            <Icon icon="ic:outline-email" fontSize="24px"/>info@1block.ai
          </Link>
        </div>

        <div className="col">
          <h2>Book a meeting now?</h2>
          <Link to="https://calendly.com/1block-ai/30min" className="icon-link">
            <Icon icon="ant-design:calendar-twotone" fontSize="26px"/>Meet with us
          </Link>
        </div>

        {/*<div className="col">*/}
        {/*  {submitted ? (*/}
        {/*    <div className="mb-6">*/}
        {/*      <h3>Thank you for contacting us!</h3>*/}
        {/*      <p>We will get back to you shortly.</p>*/}
        {/*    </div>*/}
        {/*  ) : (*/}
        {/*    <form className="form" onSubmit={handleSubmit}>*/}
        {/*      <div className="mb-3">*/}
        {/*        <label className="form-label" htmlFor="name">Name*</label>*/}
        {/*        <input*/}
        {/*          type="text"*/}
        {/*          id="name"*/}
        {/*          name="name"*/}
        {/*          className="form-control"*/}
        {/*          value={formData.name}*/}
        {/*          onChange={handleChange}*/}
        {/*          required*/}
        {/*        />*/}
        {/*      </div>*/}

        {/*      <div className="mb-3">*/}
        {/*        <label className="form-label" htmlFor="email">Email*</label>*/}
        {/*        <input*/}
        {/*          type="email"*/}
        {/*          id="email"*/}
        {/*          name="email"*/}
        {/*          className="form-control"*/}
        {/*          value={formData.email}*/}
        {/*          onChange={handleChange}*/}
        {/*          required*/}
        {/*        />*/}
        {/*      </div>*/}

        {/*      <div className="mb-3">*/}
        {/*        <label className="form-label" htmlFor="company">Company</label>*/}
        {/*        <input*/}
        {/*          type="text"*/}
        {/*          id="company"*/}
        {/*          name="company"*/}
        {/*          className="form-control"*/}
        {/*          value={formData.company}*/}
        {/*          onChange={handleChange}*/}
        {/*        />*/}
        {/*      </div>*/}

        {/*      <div className="mb-3">*/}
        {/*        <label className="form-label" htmlFor="jobTitle">Job Title</label>*/}
        {/*        <input*/}
        {/*          type="text"*/}
        {/*          id="jobTitle"*/}
        {/*          name="jobTitle"*/}
        {/*          className="form-control"*/}
        {/*          value={formData.jobTitle}*/}
        {/*          onChange={handleChange}*/}
        {/*        />*/}
        {/*      </div>*/}

        {/*      <div className="row mb-3">*/}
        {/*        <div className="col">*/}
        {/*          <label className="form-label" htmlFor="companySize">Company Size</label>*/}
        {/*          <select*/}
        {/*            id="companySize"*/}
        {/*            name="companySize"*/}
        {/*            className="form-select"*/}
        {/*            value={formData.companySize}*/}
        {/*            onChange={handleChange}*/}
        {/*          >*/}
        {/*              <option>Micro (1-9)</option>*/}
        {/*              <option>Small (10-99)</option>*/}
        {/*              <option>Medium (100-999)</option>*/}
        {/*              <option>Large (1000+)</option>*/}
        {/*            </select>*/}
        {/*          </div>*/}

        {/*          <div className="col">*/}
        {/*            <label className="form-label" htmlFor="industry">Industry</label>*/}
        {/*            <select*/}
        {/*              id="industry"*/}
        {/*              name="industry"*/}
        {/*              value={formData.industry}*/}
        {/*              className="form-select"*/}
        {/*              onChange={handleChange}*/}
        {/*            >*/}
        {/*              <option>Technology</option>*/}
        {/*              <option>Healthcare</option>*/}
        {/*              <option>Finance</option>*/}
        {/*              <option>Education</option>*/}
        {/*              <option>Other</option>*/}
        {/*            </select>*/}
        {/*          </div>*/}
        {/*        </div>*/}

        {/*        <div className="form-floating mb-3">*/}
        {/*        <textarea*/}
        {/*          className="form-control"*/}
        {/*          placeholder="Leave a message here"*/}
        {/*          id="message"*/}
        {/*          name="message"*/}
        {/*          value={formData.message}*/}
        {/*          required*/}
        {/*          onChange={handleChange}*/}
        {/*        />*/}
        {/*          <label htmlFor="message">Message*</label>*/}
        {/*        </div>*/}

        {/*        <button type="submit" className="btn btn-dark btn-lg">*/}
        {/*          Send message*/}
        {/*        </button>*/}
        {/*    </form>*/}
        {/*    )}*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default ContactUs;
