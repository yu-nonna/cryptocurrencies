import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const NotFound = () => {
    return(
        <div className="NotFound">
            <h1 className="NotFound-title">404! Page not found</h1>
            <Link to="/" className="NotFound-link">Go to Homepage</Link>
        </div>
    )
}

export default NotFound;