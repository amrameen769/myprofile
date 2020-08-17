import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Launcher from "./components/Launcher";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <header className="App-header">
                <NavBar/>
            </header>
            <Launcher/>
        </div>
    );
}

export default App;
