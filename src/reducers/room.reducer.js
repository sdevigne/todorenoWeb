import {
    SELECT_ROOM,
    UNSELECT_ROOM
} from "../actions/room.action";

const initialState = {};

export default function roomReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_ROOM :
            return action.payload;
        case UNSELECT_ROOM :
            return initialState;
        default :
            return state;
    }
}