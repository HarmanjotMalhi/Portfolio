import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
  

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4okxwzu', 'template_r9r4q9h', form.current, {
        publicKey: 'G1ezVtjgIeNYprtOw',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return ( 
    <Container fluid id="contact">
      <form className="form-container">
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" id="name" placeholder="Enter your name" required />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" id="email" placeholder="Enter your email" required />
  </div>
  <div className="form-group">
    <label htmlFor="message">Message</label>
    <textarea id="message" placeholder="Enter your message" required></textarea>
  </div>
  <button type="submit">Send</button>
</form>
<Row style={{marginBottom:"150px"}}>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/HarmanjotMalhi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/harmanjot-malhi-a99124266/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/harman_malhi._/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
     );
}
 
export default Contact;