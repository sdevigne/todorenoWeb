import { combineReducers } from "redux";
import projectsReducer from "./projects.reducer";
import selectedProjectReducer from "./selectedProject.reducer";

export default combineReducers({
    projectsReducer,
    selectedProjectReducer
});