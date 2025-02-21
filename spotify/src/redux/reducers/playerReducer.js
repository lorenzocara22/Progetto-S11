const playerInitialState = { currentTrack: null };

const playerReducer = (state = playerInitialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_TRACK":
      return { ...state, currentTrack: action.payload };
    default:
      return state;
  }
};

export default playerReducer;
