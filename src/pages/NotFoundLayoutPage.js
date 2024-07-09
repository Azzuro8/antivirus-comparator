import React from "react";
import {Outlet} from "react-router-dom";

const NotFoundLayoutPage = () => {
    return (
        <div>
            <Outlet/>
        </div>
    )

};

export default NotFoundLayoutPage;
