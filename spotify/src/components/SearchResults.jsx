import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchResults } from "../redux/actions";
import SongCard from "./SongCard";

const SearchResults = ({ query }) => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.results);
  const likedTracks = useSelector((state) => state.favorites.likedTracks);

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
    content = searchResults.map((song) => {
      const isFavorite = likedTracks.some((track) => track.id === song.id);
      return <SongCard key={song.id} song={song} isFavorite={isFavorite} />;
    });
  }

  return <div className="song-list">{content}</div>;
};

export default SearchResults;
