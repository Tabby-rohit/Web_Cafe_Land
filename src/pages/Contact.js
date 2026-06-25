import "./Contact.css";
import {useRef} from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2n16aym",
        "template_vph1jok",
        form.current,
        "ANfLdd6LFeZuDk5Pu"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__left">
          <p className="contact__tag">CONTACT US</p>

          <h2>
            Let’s build something
            <span> amazing together</span>
          </h2>

          <p className="contact__description">
            Whether you need an AI-powered platform, a modern landing page,
            or a scalable web application, WebCafe is ready to help.
          </p>
        </div>

        <div className="contact__right">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact__form"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Tell us about your project"
              required
            ></textarea>

            <button type="submit">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;