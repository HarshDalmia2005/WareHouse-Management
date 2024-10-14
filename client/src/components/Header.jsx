import React, { useState } from 'react'
import toggle from './burger-menu-svgrepo-com.svg'
import Sidebar from './Sidebar';
import Item from './Item';
import logo from './warehouse-solid.svg'

const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };
    // Function to toggle sidebar
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className=''>
            <div className='bg-black p-2 px-10 flex justify-between'>
                <img src={toggle} alt="" className='w-7 cursor-pointer invert' onClick={toggleSidebar} />
                <div className=' flex space-x-4'>
                <h2 className='font-bold text-xl text-white'>WareHouse Management </h2>
                <img src={logo} className='invert w-10'/>
                </div>
            </div>
            <div className='flex'>
                {
                    isSidebarOpen &&

                    <div className="sidebar-section">
                        <Sidebar onSelectItem={handleSelectItem} />
                    </div>

                }
                <Item selectedItem={selectedItem} />
            </div>
        </div>
    );
};

export default Header;