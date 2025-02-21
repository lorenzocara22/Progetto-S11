import { createStore, combineReducers } from "redux";
import playerReducer from "./reducers/playerReducer";
import searchReducer from "./reducers/searchReducer";
import favoritesReducer from "./reducers/favoritesReducer";

const rootReducer = combineReducers({
  player: playerReducer,
  search: searchReducer,
  favorites: favoritesReducer,
});

const store = createStore(rootReducer);

export default store;
