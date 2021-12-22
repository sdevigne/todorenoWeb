import axios from "axios";

export const GET_PROJECTS = "GET_PROJECTS";

export const getProjects = () => {

    const options = {
        headers : {'x-apikey' : process.env.REACT_APP_RESTDBIO_API}
    }
    console.log(process.env.REACT_APP_RESTDBIO_API)

    return (dispatch) => {
        return axios
            .get("https://todoreno-8328.restdb.io/rest/projects", options)
            .then((res) =>{
                dispatch({type : GET_PROJECTS, payload : res.data});
            })
            .catch((err) => console.log(err));
    }
}