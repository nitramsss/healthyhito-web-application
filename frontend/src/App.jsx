import React from "react";
import LogIn from "./component/login";
import Home from "./component/home";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LogIn />} />
            </Routes>
        </>
    );
}

export default App;
