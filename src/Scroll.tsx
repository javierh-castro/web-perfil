import React, { useEffect } from 'react';

const ScrollListener = () => {
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

  return null; // No necesitamos renderizar nada en este componente
};

export default ScrollListener;
