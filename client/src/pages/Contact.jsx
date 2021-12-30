import React from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Contact() {
  return (
    <div className="contactpage">
      <h1>Get in touch</h1>
      <p>As a freelancer, I'm available for new projects and collaborations.</p>
      <span className="contact-w">
        <span className="container-cn">
          Send me an email:
          <a
            style={{ backgroundColor: "tomato" }}
            className="contact-link"
            href="mailto:fatihcandev@gmail.com"
          >
            <span className="contact-icon">
              <HiOutlineMail />
            </span>
            fatihcandev@gmail.com
          </a>
        </span>
        <span className="container-cn">
          Dm me on twitter:
          <a
            style={{ backgroundColor: "cornflowerblue" }}
            className="contact-link"
            href="https://twitter.com/fatihcisk"
          >
            {" "}
            <span className="contact-icon">
              <AiOutlineTwitter />
            </span>
            @fatihcisk
          </a>
        </span>
        <span className="container-cn">
          Contact via Linkedin:
          <a
            style={{ backgroundColor: "royalblue" }}
            className="contact-link"
            href="https://www.linkedin.com/in/fatihcnn/"
          >
            {" "}
            <span className="contact-icon">
              <AiFillLinkedin />
            </span>
            Linkedin
          </a>
        </span>
      </span>
    </div>
  );
}
