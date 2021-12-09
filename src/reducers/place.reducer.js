import {
    SELECT_PLACE,
    UNSELECT_PLACE
} from "../actions/place.action";

const initialState = {};

export default function placeReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_PLACE :
            return action.payload;
        case UNSELECT_PLACE :
            return initialState;
        default :
            return state;
    }
}