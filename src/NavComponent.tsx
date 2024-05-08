import "./NavComponent.css";
import React, { useState } from "react";

function NavComponent() {
  const [navToggle, setNavToggle] = useState(false);

  const handleToggle = () => {
    setNavToggle((prevToggle) => !prevToggle);
  };

  return (
    <button
    className={`nav-toggle ${navToggle ? "active" : ""}`}
    aria-label={navToggle ? "Cerrar menú" : "Abrir menú"}
    onClick={handleToggle}
  >
    <i className="bi bi-list"></i>
  </button>
  );
}

export default NavComponent;
