import React, { useRef } from "react";
import emailjs, { send } from "@emailjs/browser";
import "./form.scss";

function form({ sendMassage, setSendMassage }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const { user_name, user_email, massage } = e.target.elements;

    if (!user_name.value || !user_email.value || !massage.value) {
      alert("Please fill in all fields before sending.");
      return;
    }

    emailjs
      .sendForm(
        "service_36ucdyt",
        "template_9om33cq",
        form.current,
        "My1NVRZ_vTBi0ev-y"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className={sendMassage ? "form show" : "form hidden"}>
      <div className="exit" onClick={() => setSendMassage((pre) => !pre)}>
        x
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">
          Your Name
        </label>
        <input type="text" name="user_name" id="name" />
        <label htmlFor="email">
          Your Email
        </label>
        <input type="email" name="user_email" id="email" />
        <label htmlFor="massage">
          Your Massage
        </label>
        <textarea name="massage" id="massage" cols="30" rows="10"></textarea>
        <div className="button">
          <input type="submit" value="send" />
        </div>
      </form>
    </section>
  );
}

export default form;
