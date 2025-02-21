export const setSearchResults = (results) => ({
  type: "SET_SEARCH_RESULTS",
  payload: results,
});

export const setCurrentTrack = (track) => ({
  type: "SET_CURRENT_TRACK",
  payload: track,
});

export const addFavorite = (track) => ({
  type: "ADD_FAVORITE",
  payload: track,
});

export const removeFavorite = (trackId) => ({
  type: "REMOVE_FAVORITE",
  payload: trackId,
});
