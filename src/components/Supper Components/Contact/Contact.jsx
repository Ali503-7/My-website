import React, { useEffect, useRef, useState } from "react";
import Email from "../../Bata Components/My_email/email";
import Hacker from "../../../assets/JSAnimation/hackingTransition";
import Social from "../../Bata Components/Social/social";
import Form from "../../Bata Components/Form/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Contact.scss";

function Contact() {
  const header = useRef();
  const [sendMassage, setSendMassage] = useState(false);

  useEffect(() => {
    Hacker(header, 5);
  }, []);

  return (
    <section className="contact container">
      <div className="header">
        <h1 ref={header} data-value={"Contact Me"}>
          Contact Me
        </h1>
      </div>
      <div className="body">
        <div className="open-tag">
          {"<"}Contact{">"}
        </div>
        <div className="contact-msg">
          <p>
            Thanks for reaching out! Please provide your name, email, and
            message so I can reply within 24 hours. Contact me on social media
            if you prefer. thanks😘
          </p>
        </div>
        <div className="social-links">
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/ali-mohamed-b351a6206/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/Ali503-7" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.frontendmentor.io/profile/Ali503-7"
              target="_blank"
            >
              <img src="/imgs/logs/frontend-mentor-seeklogo.com.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="send-massage button">
          <button onClick={() => setSendMassage((pre) => !pre)}>
            Send Massage
          </button>
        </div>
        <div className="close-tag">
          {"<"}/Contact{">"}
        </div>
      </div>
      <Email />
      <Social />
      <Form sendMassage={sendMassage} setSendMassage={setSendMassage} />
    </section>
  );
}

export default Contact;
