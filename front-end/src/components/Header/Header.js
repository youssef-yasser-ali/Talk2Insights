import React from "react";
import "./Header.css"; // Import your header styles

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">
        Talk2
        <span>Insights</span>
      </h1>

      <p className="header-description">
        Your Source for Audio Text Extraction and Sentiment Analysis
      </p>
    </header>
  );
}

export default Header;
