import { useState, useEffect } from "react";
import "./App.css";
import "./NavComponent.css";
import ContactForm from "./components/ContactForm";

// import NavComponent from "./NavComponent";

function App() {
  const [dark, setDark] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".nav");
      if (header) {
        header.classList.toggle("active", window.scrollY > 0);
      }
      const home = document.querySelector(".home");
      if (home) {
        home.classList.toggle("active", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const darkMode = () => {
    setDark(!dark);
  };

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);
  
  //Control de menu responsive
  const handleToggle = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
  };

  const handleMenuItemClick = () => {
    setMenuVisible(false); // Cierra el menú al hacer clic en un elemento de navegación
  };

  return (
    <>
      <header id="home">
        <div id="container">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <nav className="nav">
          {/* <NavComponent/> */}
          <button
            className="nav-toggle"
            aria-label={menuVisible ? "Cerrar menú" : "Abrir menú"}
            onClick={handleToggle}
          >
            <i className="bi bi-list"></i>
          </button>
          <ul className={`nav-links ${menuVisible ? "nav-menu_visible" : " "}`}>
            <li className="img">
              <img
                className="imagen-perfil"
                src="img/javierperfil.png"
                alt="logo de marca"
              />
            </li>
            <li>
              <a className="nav-link" href="#home" onClick={handleMenuItemClick}>
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#projects" onClick={handleMenuItemClick}>
                Portafolio
              </a>
            </li>
            <li>
              <a className="nav-link" href="#skills" onClick={handleMenuItemClick}>
                Habilidades
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact" onClick={handleMenuItemClick}>
                Contacto
              </a>
            </li>
          </ul>
          <div className="dynamic">
            <label>
              <input
                className="toggle-checkbox"
                type="checkbox"
                onClick={darkMode}
              />
              <div className="toggle-slot">
                <div className="toggle-button"></div>
                <div className="moon-icon-wrapper">
                  <div
                    className="iconify moon-icon"
                    data-icon="feather-moon"
                    data-inline="false"
                  ></div>
                </div>
                <div className="sun-icon-wrapper">
                  <div
                    className="iconify sun-icon"
                    data-icon="feather-sun"
                    data-inline="false"
                  ></div>
                </div>
              </div>
            </label>
          </div>
        </nav>
      </header>
      <main className="main">
        <section className="home">
          <div className="titulo">
            <h1>Javier Hernán Castro</h1>
            <h3 className="text-animation">
              Yo soy <span></span>
            </h3>
            <p>
              Explora mis proyectos destacados, competencias adquiridas y logros
              importantes que reflejan mi compromiso y pasión por mi profesión.
            </p>
            <div className="links-perfil">
              <p className="github">
                <a href="https://github.com/javierh-castro" target="_blank">
                  <svg
                    viewBox="0 0 496 512"
                    height="1em"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>{" "}
                </a>
              </p>
              <p className="linkedin">
                <a href="https://www.linkedin.com/in/javierhcc" target="_blank">
                  <svg
                    fill="#fff"
                    viewBox="0 0 448 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>{" "}
                </a>
              </p>
              <p className="cv">
                <a
                  href="https://docs.google.com/document/d/1teIMery5jQU2oLm9xv59Ly5G0Phe0HHErQqQmOmBs14/edit"
                  target="_blank"
                >
                  cv
                </a>
              </p>
            </div>
          </div>
          {/* <NavComponent/> */}
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
                <h2>Recipify</h2>
                <p>
                  En este proyecto echo en equipo basado en next.js, es una web
                  donde te registras y buscas recetas de cocina también podes
                  publicar tus recetas en la web
                </p>
              </div>
              <picture className="picture">
                <img src="img/recipify.png" alt="proyecto crud" />
                <ul>
                  <a
                    href="https://github.com/javierh-castro/proyect-recipify"
                    target="_blank"
                    className="bi bi-github"
                  ></a>
                  <a
                    href="https://recipify-rho.vercel.app/recetas"
                    target="_blank"
                    className="bi bi-link"
                  ></a>
                </ul>
              </picture>
            </li>
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
                    href="https://github.com/javierh-castro/proyect-ecommerce/tree/master"
                    target="_blank"
                    className="bi bi-github"
                  ></a>
                  <a
                    href="https://ecommerce-javier.netlify.app/"
                    target="_blank"
                    className="bi bi-link"
                  >
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
          </ul>
        </section>

        <section id="skills" className="skills">
          <h1 className="no-responsive section">Habilidades</h1>
          <div className="format">
            <article className="skills-text">
              <h1 className="responsive section">Habilidades</h1>
              {/* <h1 className="section">Habilidades</h1> */}
              <ul className="text-separation">
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
        <ContactForm />
        <footer>
          <p>&copy; Web desarrollada por Javier Castro</p>
        </footer>
      </main>
    </>
  );
}

export default App;
