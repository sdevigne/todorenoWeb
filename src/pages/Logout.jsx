import React from 'react';


const Logout = () => {
    localStorage.clear();
    return (
        <div>
            Vous avez été deconnecté
        </div>
    );
};

export default Logout;