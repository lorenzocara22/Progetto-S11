import { useDispatch } from "react-redux";
import { setCurrentTrack } from "../redux/actions";

const SongCard = ({ song }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentTrack(song));
  };

  let coverElement;
  if (song.album && song.album.cover_medium) {
    coverElement = (
      <img src={song.album.cover_medium} alt="cover" className="song-cover" />
    );
  } else {
    coverElement = <p className="no-cover">Nessuna copertina</p>;
  }

  return (
    <div className="song-card" onClick={handleClick}>
      {coverElement}
      <div>
        <span className="song-title">{song.title || "Sconosciuto"}</span>
        <span className="artist-name">
          {song.artist?.name || "Artista sconosciuto"}
        </span>
      </div>
    </div>
  );
};

export default SongCard;
