import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "8013897c-10a9-41e9-8eac-2317c7f73fa5");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  }).then((res) => res.json());

  if (res.success) {
    alert("Success", res);
  }
};





const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Late's a Talk</h1>
          <p>
            I'm currently avaliable to take on new project, so feel free to
            contact with me..
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>skyworld171@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+880171564654</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Jashore, Bangladesh</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" name="'name" placeholder="Enter Your Name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Write Your Text Here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
