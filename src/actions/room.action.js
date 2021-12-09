export const SELECT_ROOM = "SELECT_ROOM";
export const UNSELECT_ROOM = "UNSELECT_ROOM";

export const selectRoom = (room) => {
    return (dispatch) => {
        return dispatch({type : SELECT_ROOM, payload : room});
    }
}

export const unselectRoom = () => {
    return (dispatch) => {
        return dispatch({type : UNSELECT_ROOM, payload : {}});
    }
}