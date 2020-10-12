import React from 'react';
import './App.css';
import LandingPage, {AppState} from "./components/LandingPage"

function App() {
    const pastFailedState: AppState = window.localStorage.getItem("autoAppQualification");
    return (
    <div className="App">
        <LandingPage pastFailedState={pastFailedState} />
    </div>
    );
}

export default App;
