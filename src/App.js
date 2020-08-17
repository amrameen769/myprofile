import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Launcher from "./components/Launcher";
import CssBaseline from "@material-ui/core/CssBaseline";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import indigo from "@material-ui/core/colors/indigo";
import lightBlue from "@material-ui/core/colors/lightBlue";
import ScrollTop from "./components/ScrollTop";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: indigo[500]
        },
        secondary: {
            main: lightBlue[500]
        }
    }
})

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <CssBaseline/>
                <header className="App-header">
                    <NavBar/>
                </header>
                <Launcher/>
                <ScrollTop />
            </div>
        </MuiThemeProvider>
    );
}

export default App;
