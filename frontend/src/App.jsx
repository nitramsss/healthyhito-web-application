import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./component/Navigation";
import Home from "./pages/Home";

function App() {
    return (
        <>  
            <Navigation />
            <Home />
        </>
    );
}

export default App;

