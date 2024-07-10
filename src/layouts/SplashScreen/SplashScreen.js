// SplashScreen.js
import React, { useEffect } from "react";
import "./styles.module.css";

const SplashScreen = ({ onLoadingComplete }) => {
    useEffect(() => {
        const timer = setTimeout(onLoadingComplete, 3000); // Wyświetlanie przez 3 sekundy
        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <div className="splash-container">
            <div className="header-container">
                <h1>Perfect Antivirus</h1>
                <div className="underline"></div>
                <div className="subheading">Your Ultimate Security Solution</div>
            </div>
        </div>
    );
};

export default SplashScreen;
