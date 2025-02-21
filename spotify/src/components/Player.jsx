import React from "react";
import { useSelector } from "react-redux";

const Player = () => {
  const currentTrack = useSelector((state) => state.player.currentTrack);

  return (
    <div className="player-container">
      {currentTrack && (
        <div className="track-info">
          <img src={currentTrack.album.cover_medium} alt="Album Cover" />
          <div>
            <p>{currentTrack.title}</p>
            <p>{currentTrack.artist.name}</p>
          </div>
        </div>
      )}

      <div className="player-controls">
        <img src="/assets/shuffle.png" alt="Shuffle" />
        <img src="/assets/prev.png" alt="Previous" />
        <img src="/assets/play.png" alt="Play" />
        <img src="/assets/next.png" alt="Next" />
        <img src="/assets/repeat.png" alt="Repeat" />
      </div>
    </div>
  );
};

export default Player;
