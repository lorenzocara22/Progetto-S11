export const setSearchResults = (results) => ({
  type: "SET_SEARCH_RESULTS",
  payload: results,
});

export const setCurrentTrack = (track) => ({
  type: "SET_CURRENT_TRACK",
  payload: track,
});

export const toggleFavorite = (trackId) => ({
  type: "TOGGLE_FAVORITE",
  payload: trackId,
});
