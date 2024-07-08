import React, { useState, useEffect } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/globals.css";
import AppContext from "./context/AppContext";

function App() {
    const [antiviruses, setAntiviruses] = useState([]);
    const [chosen, setChosen] = useState([null, null, null]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedChosen = localStorage.getItem('chosenAntiviruses');
        if (storedChosen) {
            setChosen(JSON.parse(storedChosen));
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!loading) {
            localStorage.setItem('chosenAntiviruses', JSON.stringify(chosen));
        }
    }, [chosen, loading]);

    return (
        <AppContext.Provider
            value={{
                antiviruses: antiviruses,
                setAntiviruses: setAntiviruses,
                chosen: chosen,
                setChosen: setChosen,
            }}
        >
            {loading ? (
                <div>Loading...</div>
            ) : (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="result" element={<Result />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            )}
        </AppContext.Provider>
    );
}

export default App;
