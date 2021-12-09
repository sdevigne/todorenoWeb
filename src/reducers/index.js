import { combineReducers } from "redux";
import projectsReducer from "./projects.reducer";
import selectedProjectReducer from "./selectedProject.reducer";
import placeReducer from "./place.reducer";
import roomReducer from "./room.reducer";

export default combineReducers({
    projectsReducer,
    selectedProjectReducer,
    placeReducer,
    roomReducer
});