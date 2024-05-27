// Make sure to run npm install @formspree/react
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mjvndlno");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <section id="contact" className="contact">
      <h2 className="section">Contacto</h2>
      <div className="format-contact">
        <form
          className="contact-form"
          name="contactform"
          onSubmit={handleSubmit}
        >
          <p className="input-field">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ingrese tu nombre"
              required
            />
          </p>
          <p className="input-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingrese tu email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </p>
          <p className="input-field">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Ingrese tu mensaje"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </p>
          <p>
            <button
              className="button-form"
              type="submit"
              disabled={state.submitting}
            >
              Enviar
            </button>
          </p>
        </form>
        <article className="referenced">
          <h4>DIRECCIÓN:</h4>
          <p>Mendoza, Argentina</p>
          <br />
          <h4>EMAIL:</h4>
          <p>javiercastrohernan@gmail.com</p>
          <br />
          <p>
            Puedes contactarme enviando un mail o a través de mis redes
            sociales. ¡Espero tu mensaje!
          </p>
          <br />
          <div className="contacts">
            <a
              href="https://github.com/javierh-castro/mi_pagina_web"
              target="_blank"
              className="bi bi-github"
            ></a>
            <a
              href="https://www.linkedin.com/in/javierhcc"
              target="_blank"
              className="bi bi-linkedin"
            ></a>
          </div>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </article>
      </div>
    </section>
  );
}

export default ContactForm;
