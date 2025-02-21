import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchResults } from "../redux/actions";
const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search/${searchTerm}`);
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${encodeURIComponent(
            searchTerm
          )}`
        );
        if (response.ok) {
          const { data } = await response.json();
          dispatch(setSearchResults(data.slice(0, 10)));
        }
      } catch (error) {
        console.error("Errore nella ricerca:", error);
      }

      setSearchTerm("");
    }
  };

  return (
    <aside className="col col-2">
      <nav
        className="navbar navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="container flex-column align-items-start">
          <a className="navbar-brand" href="/">
            <img
              src="/assets/logo/logo.png"
              alt="Spotify Logo"
              width="131"
              height="40"
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="/"
                  >
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </a>
                </li>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="/library"
                  >
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </a>
                </li>
                <li>
                  <form onSubmit={handleSubmit} className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary btn-sm h-100">
                        GO
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav-btn text-center mt-3">
          <button className="btn btn-light w-75 rounded-pill fw-bold border-0 mb-2">
            Sign Up
          </button>
          <button className="btn btn-outline-light w-75 rounded-pill fw-bold">
            Login
          </button>
          <br />
          <a href="#" className="text-white small">
            Cookie Policy
          </a>
          |
          <a href="#" className="text-white small">
            Privacy
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
