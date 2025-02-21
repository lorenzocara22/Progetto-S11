import { useDispatch, useSelector } from "react-redux";

const SongCard = ({ song }) => {
  const dispatch = useDispatch();
  const likedTracks = useSelector((state) => state.favorites.likedTracks);

  const addFavorite = () => {
    dispatch({ type: "ADD_FAVORITE", payload: song });
  };

  const removeFavorite = () => {
    dispatch({ type: "REMOVE_FAVORITE", payload: song.id });
  };

  const isFavorite = likedTracks.some((track) => track.id === song.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFavorite();
    } else {
      addFavorite();
    }
  };

  let heartIconClass = "bi ";
  if (isFavorite) {
    heartIconClass += "bi-heart-fill";
  } else {
    heartIconClass += "bi-heart";
  }

  return (
    <div
      className="song-card compact"
      onClick={() => dispatch({ type: "SET_CURRENT_TRACK", payload: song })}
    >
      {song.album && song.album.cover_medium ? (
        <img src={song.album.cover_medium} alt="cover" className="song-cover" />
      ) : (
        <p className="no-cover">Nessuna copertina</p>
      )}
      <div>
        <span className="song-title">{song.title}</span>
        <span className="artist-name">{song.artist?.name}</span>
      </div>
      <button className="favorite-button" onClick={handleFavoriteClick}>
        <i className={heartIconClass}></i>
      </button>
    </div>
  );
};

export default SongCard;
