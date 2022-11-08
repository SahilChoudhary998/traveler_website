import React from "react";
import {Link} from "react-router-dom";

function Result() {
    return <div className="columnContainer"> 
    THIS IS Result PAGE
    <Link to = "/Search">
        back to Search
    </Link>
    </div>;
}

export default Result;