import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css'
import Item from './components/Item';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
   

    return (
        <div className="app flex-col bg-[#EEF1BD]">
            <Header />
            <Footer/>
        </div>
    );
};

export default App;
