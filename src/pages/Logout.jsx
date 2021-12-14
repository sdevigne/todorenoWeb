import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../components/UserUtils';
import { Redirect, useHistory } from 'react-router';


const Logout = () => {
    const [show, setShow] = useState(false);
    const cognitoUser = getCurrentUser();
    
    useEffect (() => {
        if (cognitoUser !== null) {
            cognitoUser.signOut();
            localStorage.removeItem('USERNAME');
            setShow(true);
            //const history = useHistory();
            //history.push("/");
            //window.location.reload(false);
        } else {
            setShow(true);
            
        }
    });

    return (

        <div>
            Vous avez été deconnecté. Vous allez être redirigé...
            {show ? <Redirect to="/"/> : null}
        </div>
    );
};

export default Logout;