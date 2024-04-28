import { useState, useEffect } from "react";
import "./App.css";
// import Dark from "./dark";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".nav");
      if (header) {
        header.classList.toggle("active", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const darkMode = () => {
    setDark(!dark);
    if (!dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <>
      <header id="home">
        <nav className="nav">
          {/* <button className="nav-toggle" aria-label="Abrir menú">
            <i className="bi bi-list"></i>
          </button> */}
          <ul className="nav-links">
            <li className="img">
              <img
                className="imagen-perfil"
                src="img/j2.png"
                alt="logo de marca"
              />
            </li>
            <li>
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#projects">
                Portafolio
              </a>
            </li>
            <li>
              <a className="nav-link" href="#skills">
                Habilidades
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
          {/* <label htmlFor="toggle" id="label_toggle">
            <i className="fa-solid fa-moon"></i>
          </label>
          <input type="checkbox" id="toggle" /> */}
          <div className="dynamic">
            <label onClick={darkMode}>
              <i className={dark ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
            </label>
            {/* <button className="contact-button">
              <a href="#contact">Contacto</a>
            </button> */}
          </div>
        </nav>
      </header>
      <main className="main">
        <section className="home">
          <div className="titulo">
            <h1>Javier Hernán Castro</h1>
            <p>
              Soy Desarrollador software Full Stack, los invito a ver mis
              proyectos, habilidades y logros destacados.
            </p>
            <div className="links-perfil">
              <p className="github">
                <a
                  href="https://github.com/javierh-castro/mi_pagina_web"
                  target="_blank"
                  className="bi bi-github"
                ></a>
              </p>
              <p className="linkedin">
                <a
                  href="https://www.linkedin.com/in/javierhcc"
                  target="_blank"
                  className="bi bi-linkedin"
                ></a>
              </p>
              <a className="cv" download="CV" href="./CV javier.pdf">
                CV
              </a>
            </div>
          </div>
          <div className="row">
            <span></span>
            <span></span>
          </div>
        </section>
        <section id="projects">
          <h1 className="section">Portafolio</h1>
          <ul className="projects">
            <li className="card">
              <div className="description">
                <h2>Un e-commerce web</h2>
                <p>
                  Es un commerce con react donde podes filtrar por precio y
                  categoría y tiene una carrito de compra.
                </p>
              </div>
              <picture className="picture">
                <img src="img/commerce.png" alt="proyecto crud" />
                <ul>
                  <a
                    href="https://github.com/javierh-castro/mi_pagina_web"
                    target="_blank"
                    className="bi bi-github"
                  ></a>
                  <a href="" target="_blank" className="bi bi-link">
                    {" "}
                  </a>
                </ul>
              </picture>
            </li>

            <li className="card">
              <div className="description">
                <h2>Control financiero</h2>
                <p>
                  Ayuda a tener un balance financiero y también genera un
                  registro de gastos e ingresos.
                </p>
              </div>
              <picture className="picture">
                <img src="img/income expenses.png" alt="proyecto crud" />
                <ul>
                  <a
                    href="https://github.com/javierh-castro/Income-and-Expenses"
                    target="_blank"
                    className="bi bi-github"
                  ></a>
                  <a
                    href="https://income-expenses-example.netlify.app/"
                    target="_blank"
                    className="bi bi-link"
                  ></a>
                </ul>
              </picture>
            </li>
            <li className="card">
              <div className="description">
                <h2>Tic Tac Toe</h2>
                <p>Se trata del juego tic tac toe y esta basado en react.</p>
              </div>
              <picture className="picture">
                <img src="img/tic tac toe.png" alt="proyecto crud" />
                <ul>
                  <a
                    href="https://github.com/javierh-castro/tic-tac-toe"
                    target="_blank"
                    className="bi bi-github"
                  ></a>
                  <a
                    href="https://javierh-castro.github.io/tic-tac-toe/"
                    target="_blank"
                    className="bi bi-link"
                  ></a>
                </ul>
              </picture>
            </li>
            <li className="card">
              <div className="description">
                <h2>Organizador de tareas</h2>
                <p>
                  Este proyecto es para organizar las tareas que tenes
                  pendientes y estas por hacer.
                </p>
              </div>
              <picture className="picture">
                <img src="img/task.png" alt="proyecto crud" />
                <ul>
                  <a
                    href="https://github.com/javierh-castro/React-task-control-example"
                    target="_blank"
                    className="bi bi-github"
                  ></a>
                  <a
                    href="https://javierh-castro.github.io/React-task-control-example/"
                    target="_blank"
                    className="bi bi-link"
                  ></a>
                </ul>
              </picture>
            </li>
            <li className="card">
              <div className="description">
                <h2>Crud de usuarios</h2>
                <p>
                  El proyecto muestra un crud de usuarios y también se puede
                  organizar los usuarios según su categorías.
                </p>
              </div>
              <picture className="picture">
                <img src="img/crud 2.png" alt="proyecto crud" />
                <ul>
                  <a
                    href="https://github.com/javierh-castro/CRUD-2"
                    target="_blank"
                    className="bi bi-github"
                  ></a>
                  <a
                    href="https://github.com/javierh-castro/CRUD-2"
                    target="_blank"
                    className="bi bi-link"
                  ></a>
                </ul>
              </picture>
            </li>
            <li className="card">
              <div className="description">
                <h2>Registro de Cuenta</h2>
                <p>
                  En este ejemplo vemos como podes crearte una cuenta o acceder
                  directo a una ya creada.
                </p>
              </div>
              <picture className="picture">
                <img src="img/login.png" alt="proyecto crud" />
                <ul>
                  <a
                    href="https://github.com/javierh-castro/User-Register"
                    target="_blank"
                    className="bi bi-github"
                  ></a>
                  <a
                    href="https://github.com/javierh-castro/User-Register"
                    target="_blank"
                    className="bi bi-link"
                  ></a>
                </ul>
              </picture>
            </li>
          </ul>
        </section>

        <section id="skills" className="skills">
          <h1 className="section">Habilidades</h1>
          <div className="format">
            <article className="skills-text">
              {/* <h1 className="responsive section">Habilidades</h1> */}
              {/* <h1 className="section">Habilidades</h1> */}
              <ul>
                <li>
                  <p>
                    Poseo sólidos conocimientos y experiencia en desarrollo de
                    software, destacándome en la creación de aplicaciones
                    innovadoras y eficientes. Mi destreza incluye programación
                    en varios lenguajes y resolución de problemas.
                  </p>
                </li>
                <li>
                  <p>
                    Estoy encantado de tener la oportunidad de discutir cómo mis
                    habilidades y experiencia que puedan contribuir al éxito de
                    sus proyecto.
                  </p>
                </li>
                <li>
                  <p>
                    Siempre estoy en la búsqueda de mejorar mis habilidades y la
                    adaptación constante a las nuevas tendencias y tecnologías
                    del campo.
                  </p>
                </li>
              </ul>
            </article>
            <article className="habilidades">
              {/* <h1 className="no-responsive section">Habilidades</h1> */}
              <ul className="skills-list">
                <li>
                  <picture className="icon">
                    <img src="icon/js.ico" alt="img icon" />
                  </picture>
                </li>
                <li>
                  <picture className="icon">
                    <img src="icon/html.ico" alt="img icon" />
                  </picture>
                </li>
                <li>
                  <picture className="icon">
                    <img src="icon/css.ico" alt="img icon" />
                  </picture>
                </li>
                <li>
                  <picture className="icon">
                    <img src="icon/bootstrap.ico" alt="img icon" />
                  </picture>
                </li>
                <li>
                  <picture className="icon">
                    <img src="icon/node.ico" alt="img icon" />
                  </picture>
                </li>
                <li>
                  <picture className="icon">
                    <img src="icon/Mysql.ico" alt="img icon" />
                  </picture>
                </li>
                <li>
                  <picture className="icon">
                    <img src="icon/python.ico" alt="img icon" />
                  </picture>
                </li>
                <li>
                  <picture className="icon">
                    <img src="icon/react.ico" alt="img icon" />
                  </picture>
                </li>
                <li>
                  <picture className="icon">
                    <img src="icon/types.ico" alt="img icon" />
                  </picture>
                </li>
                <li>
                  <picture className="icon">
                    <img src="icon/expressjs.png" alt="img icon" />
                  </picture>
                </li>
                <li>
                  <picture className="icon">
                    <img src="icon/tailwind.png" alt="img icon" />
                  </picture>
                </li>
                <li>
                  <picture className="icon">
                    <img src="icon/mongo.png" alt="img icon" />
                  </picture>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2 className="section">Contacto</h2>
          <div className="format-contact">
            <form
              className="contact-form"
              name="contact"
              data-netlify="true"
              method="post"
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
              </p>
              <p className="input-field">
                <label htmlFor="message">Mensaje:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Ingrese tu mensaje"
                  required
                ></textarea>
              </p>
              <p>
                <button className="button-form" type="submit">
                  Enviar
                </button>
              </p>
            </form>
            <div className="referenced">
              <h4>DIRECCIÓN:</h4>
              <p>Mendoza, Argentina</p>
              <br />
              <h4>EMAIL:</h4>
              <p>javi2cc1@gmail.com</p>
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
              >
                <path
                  d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </section>
        <footer>
          <p>&copy; Web desarrollada por Javier Castro</p>
        </footer>
        <script src="menu.js"></script>
      </main>
    </>
  );
}

export default App;
