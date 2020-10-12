import React from 'react';
import './App.css';
import LandingPage, { AppState } from "./components/LandingPage"

const App: React.FunctionComponent = () => {
    const pastFailedState: AppState = window.localStorage.getItem("autoAppQualification");
    return (
    <div className="App">
        <LandingPage pastFailedState={pastFailedState} />
    </div>
    );
}

export default App;
