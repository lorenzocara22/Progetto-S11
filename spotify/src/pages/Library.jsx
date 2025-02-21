import React from "react";
import { useSelector } from "react-redux";
import SongCard from "../components/SongCard";

const Library = () => {
  const likedTracks = useSelector((state) => state.favorites.likedTracks);

  return (
    <div className="library-container">
      <h2 className="library">Your Library</h2>
      <div className="song-list">
        {likedTracks.length > 0 ? (
          likedTracks.map((song) => <SongCard key={song.id} song={song} />)
        ) : (
          <p>Non hai ancora messo "Mi piace" a nessuna canzone.</p>
        )}
      </div>
    </div>
  );
};

export default Library;
