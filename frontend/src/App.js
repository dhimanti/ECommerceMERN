// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Make sure the path is correct
import Register from './components/Register';
import Welcome from './components/Welcome';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} /> {/* Make sure this route is correct */}
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Welcome />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
