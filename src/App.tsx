import { useState, useEffect } from "react";
import "./App.css";
import "./NavComponent.css";

// import NavComponent from "./NavComponent";

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
  };

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);

  //Hola
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggle = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
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
          <div className="dynamic">
            <label id="theme-toggle-button">
              <input type="checkbox" id="toggle" onClick={darkMode} />
              <svg
                viewBox="0 0 69.667 44"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  transform="translate(3.5 3.5)"
                  data-name="Component 15 – 1"
                  id="Component_15_1"
                >
                  <g
                    filter="url(#container)"
                    transform="matrix(1, 0, 0, 1, -3.5, -3.5)"
                  >
                    <rect
                      fill="#83cbd8"
                      transform="translate(3.5 3.5)"
                      rx="17.5"
                      height="35"
                      width="60.667"
                      data-name="container"
                      id="container"
                    ></rect>
                  </g>

                  <g transform="translate(2.333 2.333)" id="button">
                    <g data-name="sun" id="sun">
                      <g
                        filter="url(#sun-outer)"
                        transform="matrix(1, 0, 0, 1, -5.83, -5.83)"
                      >
                        <circle
                          fill="#f8e664"
                          transform="translate(5.83 5.83)"
                          r="15.167"
                          cy="15.167"
                          cx="15.167"
                          data-name="sun-outer"
                          id="sun-outer-2"
                        ></circle>
                      </g>
                      <g
                        filter="url(#sun)"
                        transform="matrix(1, 0, 0, 1, -5.83, -5.83)"
                      >
                        <path
                          fill="rgba(246,254,247,0.29)"
                          transform="translate(9.33 9.33)"
                          d="M11.667,0A11.667,11.667,0,1,1,0,11.667,11.667,11.667,0,0,1,11.667,0Z"
                          data-name="sun"
                          id="sun-3"
                        ></path>
                      </g>
                      <circle
                        fill="#fcf4b9"
                        transform="translate(8.167 8.167)"
                        r="7"
                        cy="7"
                        cx="7"
                        id="sun-inner"
                      ></circle>
                    </g>

                    <g data-name="moon" id="moon">
                      <g
                        filter="url(#moon)"
                        transform="matrix(1, 0, 0, 1, -31.5, -5.83)"
                      >
                        <circle
                          fill="#cce6ee"
                          transform="translate(31.5 5.83)"
                          r="15.167"
                          cy="15.167"
                          cx="15.167"
                          data-name="moon"
                          id="moon-3"
                        ></circle>
                      </g>
                      <g
                        fill="#a6cad0"
                        transform="translate(-24.415 -1.009)"
                        id="patches"
                      >
                        <circle
                          transform="translate(43.009 4.496)"
                          r="2"
                          cy="2"
                          cx="2"
                        ></circle>
                        <circle
                          transform="translate(39.366 17.952)"
                          r="2"
                          cy="2"
                          cx="2"
                          data-name="patch"
                        ></circle>
                        <circle
                          transform="translate(33.016 8.044)"
                          r="1"
                          cy="1"
                          cx="1"
                          data-name="patch"
                        ></circle>
                        <circle
                          transform="translate(51.081 18.888)"
                          r="1"
                          cy="1"
                          cx="1"
                          data-name="patch"
                        ></circle>
                        <circle
                          transform="translate(33.016 22.503)"
                          r="1"
                          cy="1"
                          cx="1"
                          data-name="patch"
                        ></circle>
                        <circle
                          transform="translate(50.081 10.53)"
                          r="1.5"
                          cy="1.5"
                          cx="1.5"
                          data-name="patch"
                        ></circle>
                      </g>
                    </g>
                  </g>

                  <g
                    filter="url(#cloud)"
                    transform="matrix(1, 0, 0, 1, -3.5, -3.5)"
                  >
                    <path
                      fill="#fff"
                      transform="translate(-3466.47 -160.94)"
                      d="M3512.81,173.815a4.463,4.463,0,0,1,2.243.62.95.95,0,0,1,.72-1.281,4.852,4.852,0,0,1,2.623.519c.034.02-.5-1.968.281-2.716a2.117,2.117,0,0,1,2.829-.274,1.821,1.821,0,0,1,.854,1.858c.063.037,2.594-.049,3.285,1.273s-.865,2.544-.807,2.626a12.192,12.192,0,0,1,2.278.892c.553.448,1.106,1.992-1.62,2.927a7.742,7.742,0,0,1-3.762-.3c-1.28-.49-1.181-2.65-1.137-2.624s-1.417,2.2-2.623,2.2a4.172,4.172,0,0,1-2.394-1.206,3.825,3.825,0,0,1-2.771.774c-3.429-.46-2.333-3.267-2.2-3.55A3.721,3.721,0,0,1,3512.81,173.815Z"
                      data-name="cloud"
                      id="cloud"
                    ></path>
                  </g>

                  <g
                    fill="#def8ff"
                    transform="translate(3.585 1.325)"
                    id="stars"
                  >
                    <path
                      transform="matrix(-1, 0.017, -0.017, -1, 24.231, 3.055)"
                      d="M.774,0,.566.559,0,.539.458.933.25,1.492l.485-.361.458.394L1.024.953,1.509.592.943.572Z"
                    ></path>
                    <path
                      transform="matrix(-0.777, 0.629, -0.629, -0.777, 23.185, 12.358)"
                      d="M1.341.529.836.472.736,0,.505.46,0,.4.4.729l-.231.46L.605.932l.4.326L.9.786Z"
                      data-name="star"
                    ></path>
                    <path
                      transform="matrix(0.438, 0.899, -0.899, 0.438, 23.177, 29.735)"
                      d="M.015,1.065.475.9l.285.365L.766.772l.46-.164L.745.494.751,0,.481.407,0,.293.285.658Z"
                      data-name="star"
                    ></path>
                    <path
                      transform="translate(12.677 0.388) rotate(104)"
                      d="M1.161,1.6,1.059,1,1.574.722.962.607.86,0,.613.572,0,.457.446.881.2,1.454l.516-.274Z"
                      data-name="star"
                    ></path>
                    <path
                      transform="matrix(-0.07, 0.998, -0.998, -0.07, 11.066, 15.457)"
                      d="M.873,1.648l.114-.62L1.579.945,1.03.62,1.144,0,.706.464.157.139.438.7,0,1.167l.592-.083Z"
                      data-name="star"
                    ></path>
                    <path
                      transform="translate(8.326 28.061) rotate(11)"
                      d="M.593,0,.638.724,0,.982l.7.211.045.724.36-.64.7.211L1.342.935,1.7.294,1.063.552Z"
                      data-name="star"
                    ></path>
                    <path
                      transform="translate(5.012 5.962) rotate(172)"
                      d="M.816,0,.5.455,0,.311.323.767l-.312.455.516-.215.323.456L.827.911,1.343.7.839.552Z"
                      data-name="star"
                    ></path>
                    <path
                      transform="translate(2.218 14.616) rotate(169)"
                      d="M1.261,0,.774.571.114.3.487.967,0,1.538.728,1.32l.372.662.047-.749.728-.218L1.215.749Z"
                      data-name="star"
                    ></path>
                  </g>
                </g>
              </svg>
            </label>
          </div>
        </nav>
      </header>
      <main className="main">
        <section className="home">
          <div className="titulo">
            <h1>Javier Hernán Castro</h1>
            <h3 className="text-animation">
              Soy <span></span>
            </h3>
            <p>
              los invito a ver mis proyectos, habilidades y logros destacados.
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
              <div>
              <div className="group relative">
  <button>
  <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  </button>
  <span className="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100">GitHub<span>
</span></span></div>
              </div>
              {/* <a className="cv" download="CV" href="./CV javier.pdf">
                CV
              </a> */}
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
          </ul>
        </section>

        <section id="skills" className="skills">
          <h1 className="no-responsive section">Habilidades</h1>
          <div className="format">
            <article className="skills-text">
              <h1 className="responsive section">Habilidades</h1>
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
            <article className="referenced">
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
              ></svg>
            </article>
          </div>
        </section>
        <footer>
          <p>&copy; Web desarrollada por Javier Castro</p>
        </footer>
      </main>
    </>
  );
}

export default App;
