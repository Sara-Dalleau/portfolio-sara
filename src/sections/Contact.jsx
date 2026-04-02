import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6rm5twy",
        "template_s68b9zz",
        form.current,
        "vlO7xGv23UkQQKhCK"
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();

          setTimeout(() => {
            setStatus("");
          }, 4000);
        },
        () => {
          setStatus("error");

          setTimeout(() => {
            setStatus("");
          }, 4000);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>

      <p className="contact-intro">
        Une idée de projet, une opportunité ou simplement envie d’échanger ?  
        Je serais ravie de vous lire.
      </p>

      <div className="contact__container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <div className="form-row">
            <input
              type="text"
              name="user_lastname"
              placeholder="Nom"
              required
            />
            <input
              type="text"
              name="user_firstname"
              placeholder="Prénom"
              required
            />
          </div>

          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
          />

          <textarea
            name="message"
            placeholder="Votre message ..."
            rows="5"
            required
          ></textarea>

          <button type="submit">Envoyer</button>

          {/* MESSAGE */}
          {status === "success" && (
            <p className="form-message success">
              ✨ Message envoyé avec succès, je vous répondrai rapidement !
            </p>
          )}

          {status === "error" && (
            <p className="form-message error">
              ⚠️ Une erreur est survenue, merci de réessayer.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;