import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Mabor from './components/Mabor';
import { allDls, newProject } from './components/buyCoursesData';
import { Auth0Provider } from '@auth0/auth0-react';
import config from './auth-config.json';

function App() {
    return (
        <Auth0Provider
            domain={config.domain}
            clientId={config.clientId}
            redirectUri={config.redirectUri}
        >
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/purchase/:id" element={<Mabor dlss={allDls} />} />
                        <Route path="/purchase/new/:id" element={<Mabor dlss={newProject} />} />
                        <Route path="/" element={<HomePage allDls={allDls} newProject={newProject} />} />
                    </Routes>
                </div>
            </Router>
        </Auth0Provider>
    );
}

export default App;;