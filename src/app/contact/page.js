"use client";

import React from "react";
import { Send } from "lucide-react";
import Button from "@mui/material/Button";
import "./page.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    
    // Create a template parameters object
    const templateParams = {
      to_email:"redribbongarments7@gmail.com",
      email_from: e.target.email_from.value,
      message: e.target.message.value
    };

    emailjs
      .send(
        'service_s4rm529',
        "template_wzk609k",
        templateParams,
        "lHYF9zJWeaB3KgDsH"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert(`Failed to send email: ${error.text}`);
        }
      );
  };

  return (
    <div className="App">
      <h1 className="page_title">Contact Us</h1>
      <form className="contact_form" onSubmit={sendEmail}>
        <label htmlFor="emailFrom" className="email__label">
          Your Email:
        </label>
        <input
          type="email"
          name="email_from"
          id="emailFrom"
          className="email__input"
          required
        />
        <textarea
          name="message"
          id="message"
          className="message__box"
          required
        ></textarea>
        <Button
          type="submit"
          variant="contained"
          endIcon={<Send />}
          className="send_button"
        >
          Send
        </Button>
      </form>
    </div>
  );
}
export default Contact