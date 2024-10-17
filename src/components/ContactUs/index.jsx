import React, { useState } from 'react';
import Link from "@docusaurus/core/lib/client/exports/Link";
import { Icon } from '@iconify/react';
import './ContactUs.scss';


const ContactUs = () => {
  return (
    <div className="contact-us-wrapper container">
      <div className="row">
        <div className="col col--6">
          <h1>Get in touch</h1>
          <p>
            If you are interested in contacting us, please book a meeting with us, and we will get in touch as early as
            possible.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col col--6">
          <h2>Want email instead?</h2>
          <Link to="mailto:info@1block.ai" className="icon-link">
            <Icon icon="ic:outline-email" fontSize="35px"/> info@1block.ai
          </Link>
        </div>
        <div className="col col--6">
          <h2>Book a meeting now?</h2>
          <Link to="https://calendly.com/1block-ai/30min" className="icon-link">
            <Icon icon="ant-design:calendar-twotone" fontSize="35px"/> Meet with us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
