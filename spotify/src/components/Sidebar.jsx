import React, { useState } from "react";

const Sidebar = ({ setQuery }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(input);
  };

  return (
    <aside className="sidebar">
      <img src="/assets/logo.png" alt="Spotify Logo" className="spotify-logo" />

      <nav className="nav-links">
        <a href="/">
          <i className="bi bi-house-door-fill"></i> Homepage
        </a>
        <a href="/library">
          <i className="bi bi-book"></i> Your Library
        </a>
      </nav>

      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit" className="btn btn-success">
          GO
        </button>
      </form>

      <div className="auth-buttons">
        <button className="btn btn-primary w-100">Sign Up</button>
        <button className="btn btn-outline-light w-100">Login</button>
      </div>
    </aside>
  );
};

export default Sidebar;
