import React, { useState } from "react";

const ChangeTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div style={{ 
      backgroundColor: isDarkMode ? "#333" : "#fff", 
      height: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center" 
    }}>
      <button onClick={toggleTheme} style={{ padding: "10px", fontSize: "20px" }}>
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default ChangeTheme;

