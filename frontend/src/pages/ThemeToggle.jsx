import React, { useEffect, useState } from "react";
import "../assets/styles/Toggle.css";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="theme-toggle">
      <label className="switch">
        <input
          type="checkbox"
          checked={dark}
          onChange={() => setDark(!dark)}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
