import React, { useState, useEffect } from "react";
import LayoutPage from "./pages/LayoutPage";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import ContactPage from "./pages/ContactPage";
import NotFoundLayoutPage from "./pages/NotFoundLayoutPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/globals.css";
import AppContext from "./context/AppContext";
import NotFoundPage from "./pages/NotFoundPage";

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
                        <Route path="/" element={<LayoutPage />}>
                            <Route index element={<HomePage />} />
                            <Route path="result" element={<ResultPage />} />
                            <Route path="contact" element={<ContactPage />} />
                        </Route>
                        <Route path="*" element={<NotFoundLayoutPage />}>
                            <Route path="*" element={<NotFoundPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            )}
        </AppContext.Provider>
    );
}

export default App;
