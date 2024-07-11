// SplashPage.js
import React, {useRef} from "react";
import SplashScreen from "../../components/SplashScreen/SplashScreen";


const SplashPage = () => {

    const ref = useRef();
    ref.current = document.querySelector("#splash");

    return ref.current && (
        <SplashScreen refCurrent={ref.current}/>
    )
};


export default SplashPage;
