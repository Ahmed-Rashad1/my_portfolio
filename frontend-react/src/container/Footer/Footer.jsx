import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";
const Footer = () => {
const [formData, setFormData] = useState({name: '', email: '', massage: ''})
const [isFormSubmitted, setIsFormSubmitted] = useState(false)
const [loading, setLoading] = useState(false)


const { name, email, message } = formData;

const handleChangeInput = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = () => {
  setLoading(true);

  const contact = {
    _type: 'contact',
    name: name,
    email: email,
    message: message,
  };

  client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
    .catch((err) => console.log(err));
};

  return (
    <>
          <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="a7medra4aad3@gmail.com" className="p-text">a7medra4aad3@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +20 (10) 953-533-64" className="p-text">+20 (10) 953-533-64</a>
        </div>
      </div>
      {!isFormSubmitted ? 
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input type="text" className="p-text" placeholder="Your Name" value={name} name="name" onChange={handleChangeInput}/>
        </div>
        <div className="app__flex">
          <input type="email" className="p-text" placeholder="Your Email" value={email} name="email" onChange={handleChangeInput}/>
        </div>
        <div>
          <textarea name="message" placeholder="Your Message" value={message} onChange={handleChangeInput}/>
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending...' : 'Send Message'}</button>
      </div>
      :  
    <div>
      <h3 className="head-text">
        Thank you for getting in touch!
      </h3>
    </div>
  }
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
