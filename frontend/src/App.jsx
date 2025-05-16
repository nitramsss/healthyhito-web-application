import React from "react";
import LogIn from "./component/login";
import Home from "./component/home";
import Navigation from "./component/navigations";


import { Routes, Route } from "react-router-dom";
import LogOut from "./component/logout";



function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/logout" element={<LogOut />} />
            </Routes>
        </>
    );
}

export default App;

