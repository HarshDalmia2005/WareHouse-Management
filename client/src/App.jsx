import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';  // Import react-router-dom for routing
import Sidebar from './components/Sidebar';
import './App.css';
import Item from './components/Item';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/SignupForm'; // Import the Signup component

const App = () => {
    const [LoggedIn, setLoggedIn] = useState(false);

    return (
        <Router> {/* Wrap the app with Router */}

            <Routes>
                {/* Route for the main app (home) */}
                <Route path="/" element={
                    <div className="app flex-col bg-[#EEF1BD]">
                        <Header LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} />
                        <Footer />
                    </div>
                } />


                <Route path="/login" element={<Login LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} />} />

                <Route path="/signup" element={<Signup />} />


                <Route path="*" element={<Navigate to="/" />} />  {/* Redirects any undefined route to home */}
            </Routes>

        </Router >
    );
};

export default App;
