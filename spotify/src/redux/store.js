import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchReducer";
import playerReducer from "./reducers/playerReducer";
import favoritesReducer from "./reducers/favoritesReducer";

const store = configureStore({
  reducer: {
    search: searchReducer,
    player: playerReducer,
    favorites: favoritesReducer,
  },
});

export default store;
