import {
    SELECT_PROJECT,
    UNSELECT_PROJECT
} from "../actions/selectedProject.action";

const initialState = {};

export default function selectProjectReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_PROJECT :
            console.log(action.payload);
            return action.payload;
        case UNSELECT_PROJECT :
            return initialState;
        default :
            return state;
    }
}