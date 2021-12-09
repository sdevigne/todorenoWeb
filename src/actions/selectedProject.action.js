export const SELECT_PROJECT = "SELECT_PROJECT";
export const UNSELECT_PROJECT = "UNSELECT_PROJECT";

export const selectProject = (project) => {
    return (dispatch) => {
        return dispatch({type : SELECT_PROJECT, payload : project});
    }
}

export const unselectProject = () => {
    return (dispatch) => {
        return dispatch({type : UNSELECT_PROJECT, payload : {}});
    }
}