export const SELECT_PLACE = "SELECT_PLACE";
export const UNSELECT_PLACE = "UNSELECT_PLACE";

export const selectPlace = (place) => {
    return (dispatch) => {
        return dispatch({type : SELECT_PLACE, payload : place});
    }
}

export const unselectPlace = () => {
    return (dispatch) => {
        return dispatch({type : UNSELECT_PLACE, payload : {}});
    }
}