import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import SearchResults from "./components/SearchResults";
import Home from "./pages/Home";
import Library from "./pages/Library";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");

  return (
    <Provider store={store}>
      <div>
        <Sidebar setQuery={setQuery} />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
          </Routes>
          <SearchResults query={query} />
        </div>
      </div>
      <Player />
    </Provider>
  );
};

export default App;
