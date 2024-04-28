import { useState } from 'react';
import "./App.css";

function Dark() {
  const [dark, setDark] = useState(false);

  const darkMode = () => {
    setDark(!dark);
  }

  const bodyStyle: React.CSSProperties = {
    background: dark ? '#1f1f1f' : '',
    color: dark ? '#fff' : '#000',
    transition: 'all 1.5s ease',
  };

  return (
    <body style={bodyStyle}>
      <label onClick={darkMode}>
        <i className={dark ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
      </label>
    </body>
  );
}

export default Dark;
