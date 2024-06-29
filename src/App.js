import React, {useState} from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Compare from "./pages/Compare";
import NotFound from "./pages/NotFound";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./assets/styles/globals.css";
import AppContext from "./context/AppContext";

function App() {
    const [antiviruses, setAntiviruses] = useState([]);
    const [chosen, setChosen] = useState([null, null, null])

    return (
        <AppContext.Provider
            value={{
                antiviruses: antiviruses,
                setAntiviruses: setAntiviruses,
                chosen: chosen,
                setChosen: setChosen,
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="compare" element={<Compare/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
