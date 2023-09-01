import "./Form.style.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xd1nd4v",
        "template_dpc5v39",
        form.current,
        "a3k8bVIA58juXfdid"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name" required></input>
        <label>Your Email</label>
        <input type="email" name="user_email" required></input>

        <label>Your Message</label>
        <textarea
          name="message"
          rows={6}
          placeholder="Type Your Message Here!"
          required
        ></textarea>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
