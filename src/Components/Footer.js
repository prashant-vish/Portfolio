import "./Footer.style.css";
import {
  FaFacebook,
  FaHome,
  FaLaptop,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{
                color: "white",
                marginRight: "1rem",
              }}
            />
            <div>
              <p>Nandganj , Ghazipur</p>
              <p> UP, India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "1rem" }}
              />
              +91-9838574409
            </h4>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "white", marginRight: "1rem" }}
                />
                vishwakarmar0216@gmail.com
              </h4>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            This is prashant Vishwakarma, Creator of this portfolio Website i
            love to show my Gratidute to Harkirat singh who made me able to
            create a descent looking websites and Web Applications..He is my
            Mentor.
          </p>
          <div className="social">
            <FaFacebook
              size={40}
              style={{ color: "white", marginRight: "1rem" }}
            />

            <FaLaptop
              href="https://leetcode.com/prashant_vish/"
              size={40}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaTwitter
              href="www.twitter.com"
              size={40}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaLinkedin
              href="https://www.linkedin.com/in/prashant-vishwakarma-b457a2210/"
              size={40}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
