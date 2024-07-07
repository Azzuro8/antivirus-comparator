import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../layouts/Menu/Menu";
import Footer from "../layouts/Footer/Footer";

const Layout = () => {
    return (
        <>
            <Menu />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
