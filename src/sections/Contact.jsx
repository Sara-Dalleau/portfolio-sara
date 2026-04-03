import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setLoading(false);
        form.current.reset();

        setTimeout(() => {
          setStatus("");
        }, 4000);
      })
      .catch(() => {
        setStatus("error");
        setLoading(false);

        setTimeout(() => {
          setStatus("");
        }, 4000);
      });
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
            <label htmlFor="lastname" className="sr-only">Nom</label>
            <input
              id="lastname"
              type="text"
              name="user_lastname"
              placeholder="Nom"
              required
            />

            <label htmlFor="firstname" className="sr-only">Prénom</label>
            <input
              id="firstname"
              type="text"
              name="user_firstname"
              placeholder="Prénom"
              required
            />
          </div>

          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            type="email"
            name="user_email"
            placeholder="Email"
            required
          />

          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Votre message ..."
            rows="5"
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Envoi..." : "Envoyer"}
          </button>

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