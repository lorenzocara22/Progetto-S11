const favoritesInitialState = {
  likedTracks: JSON.parse(localStorage.getItem("likedTracks")) || [],
};

const favoritesReducer = (state = favoritesInitialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      if (state.likedTracks.some((track) => track.id === action.payload.id)) {
        return state;
      }
      const updatedFavorites = [...state.likedTracks, action.payload];
      localStorage.setItem("likedTracks", JSON.stringify(updatedFavorites));

      return { ...state, likedTracks: updatedFavorites };

    case "REMOVE_FAVORITE":
      const filteredFavorites = state.likedTracks.filter(
        (track) => track.id !== action.payload
      );
      localStorage.setItem("likedTracks", JSON.stringify(filteredFavorites));

      return { ...state, likedTracks: filteredFavorites };

    default:
      return state;
  }
};

export default favoritesReducer;
