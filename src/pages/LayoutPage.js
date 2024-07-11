import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import Menu from "../layouts/Menu/Menu";
import Footer from "../layouts/Footer/Footer";
import SplashPage from "../layouts/SplashScreenContent/SplashPage";

const LayoutPage = () => {

    const location = useLocation();
    const isContactPage = location.pathname === "/contact";



    return (
        <>
            <SplashPage/>
            <Menu />
            <Outlet />
            {!isContactPage ? <Footer/> :"" }
        </>
    );
};

export default LayoutPage;
