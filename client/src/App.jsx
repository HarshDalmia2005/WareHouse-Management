import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css'
import Item from './components/Item';
import Header from './components/Header';

const App = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className="app flex-col">
            <Header />
            <div className='flex'>
                <div className="sidebar-section">
                    <Sidebar onSelectItem={handleSelectItem} />
                </div>
                <Item selectedItem={selectedItem} />
            </div>
        </div>
    );
};

export default App;
