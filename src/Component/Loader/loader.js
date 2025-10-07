// Loader.jsx
import React from "react";
import "./loader.css";

const Loader = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="loader-overlay">
      Chargement...
    </div>
  );
};

export default Loader;

