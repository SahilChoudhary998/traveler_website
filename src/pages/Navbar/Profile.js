import React from "react";
import {useNavigate} from "react-router-dom";

function Profile() {
    
    let navigate = useNavigate();
    return <div className="columnContainer"> 
    <button onClick = {() =>navigate('/')}>
        Home
    </button>
   
    </div>;
}

export default Profile;
