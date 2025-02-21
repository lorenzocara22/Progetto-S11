const favoritesInitialState = { likedTracks: [] };

const favoritesReducer = (state = favoritesInitialState, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      return state.likedTracks.includes(action.payload)
        ? {
            ...state,
            likedTracks: state.likedTracks.filter(
              (track) => track !== action.payload
            ),
          }
        : { ...state, likedTracks: [...state.likedTracks, action.payload] };
    default:
      return state;
  }
};

export default favoritesReducer;
