import React, { useState } from 'react'
import Sidebar from './Sidebar';
import Item from './Item';
import logo from './warehouse-solid.svg'

const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };


    return (
        <div className=''>
            <div className='flex'>
                <div className="sidebar-section min-h-screen">
                <img src={logo} className='invert w-1/3 mx-auto'/>
                <h2 className='font-bold text-2xl text-white mb-10'>WareHouse Management </h2>
                    <Sidebar onSelectItem={handleSelectItem} />
                </div>
                <Item selectedItem={selectedItem} />
            </div>
        </div>
    );
};

export default Header;