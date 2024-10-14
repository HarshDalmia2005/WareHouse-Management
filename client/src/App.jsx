import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css'
import Item from './components/Item';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';

const App = () => {
   const [openLogin, setopenLogin] = useState(false)
   const [LoggedIn, setLoggedIn] = useState(false)
    return (
        <div className="app flex-col bg-[#EEF1BD]">
            {openLogin && <Login LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} openLogin={openLogin} setopenLogin={setopenLogin} />}
            {!openLogin && <Header LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} openLogin={openLogin} setopenLogin={setopenLogin} />}
            {!openLogin && <Footer/>}
        </div>
    );
};

export default App;
