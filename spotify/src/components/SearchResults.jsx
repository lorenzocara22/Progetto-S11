import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchResults } from "../redux/actions";
import SongCard from "./SongCard";

const SearchResults = ({ query }) => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.results);

  useEffect(() => {
    const fetchSongs = async () => {
      if (!query) return;

      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );

      if (response.ok) {
        const { data } = await response.json();
        dispatch(setSearchResults([...data]));
      }
    };

    fetchSongs();
  }, [query, dispatch]);

  let content;
  if (searchResults.length > 0) {
    content = searchResults.map((song) => (
      <SongCard key={song.id} song={song} />
    ));
  } else {
    content = <p className="no-results">Nessun risultato trovato</p>;
  }

  return <div className="song-list-container">{content}</div>;
};

export default SearchResults;
